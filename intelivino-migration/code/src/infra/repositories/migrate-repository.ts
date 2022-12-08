import { PrismaClient } from '@prisma/client'
import {
  PersonType,
  PrismaClient as PrismaClientDbProd,
} from '../database_api/orm/prisma/client'
import { slugGenerator } from '../utils/slug_generator'
import { cleanString } from '../utils/string'

interface GrapeCreateDto {
  name: string
}

export class MigrateRepository {
  prismaDbOlder: PrismaClient
  prismaDbProd: PrismaClientDbProd
  constructor() {
    this.prismaDbOlder = new PrismaClient()
    this.prismaDbProd = new PrismaClientDbProd()
  }
  async migrateGrapes() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const grapesOlder = await this.prismaDbOlder.uvas.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const grape of grapesOlder) {
          await this.prismaDbProd.grape.create({
            data: {
              name: grape.nome,
            },
          })
        }
        itemsPaginated = grapesOlder.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateCountry() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const countries = await this.prismaDbOlder.meta_paises.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const country of countries) {
          const states = await this.prismaDbOlder.meta_estados.findMany({
            where: {
              pais_id: country.id,
            },
          })
          await this.prismaDbProd.country.create({
            data: {
              name: country.descricao || '',
              slug: slugGenerator(cleanString(country.descricao!)),
              value: country.valor,
              states: {
                create: states.map((state) => ({
                  name: state.descricao,
                  slug: slugGenerator(cleanString(state.descricao)),
                })),
              },
            },
          })
        }
        itemsPaginated = countries.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateAccounts() {
    let page = 1
    const perPage = 50
    let itemsPaginated = 0
    do {
      itemsPaginated = 0
      const accounts = await this.prismaDbOlder.business.findMany({
        include: {
          users: {
            include: {},
          },
        },
        where: {
          user_id: {
            not: null,
          },
          user_id_parent: {
            equals: null,
          },
        },
        take: perPage,
        skip: this.calculatePage(page, perPage),
      })
      for (const account of accounts) {
        let personType = '' as PersonType
        if (account.person_type === 'cnpj') {
          personType = 'J'
        } else {
          personType = 'F'
        }
        const responseCreateAccount = await this.prismaDbProd.account.create({
          data: {
            name: account.main_contact_name || '',
            country: account.users?.address_country || '',
            district: account.users?.address_neighborhood || '',
            street: account.users?.address_street || '',
            number: account.users?.address_number || '',
            state: account.users?.state || '',
            zipcode: account.users?.address_cep || '',
            complement: account.users?.address_complement || '',
            domain: '',
            email: account.users?.email || '',
            market_name: account.users?.name_business || '',
            phone: account.main_contact_fone,
            gender: 'ND',
            person_type: personType,
            cpf_cnpj:
              account.person_type === 'cpf' ? account.cpf : account.cnpj,
            site: account.website,
            social_reason: account.razao_social,
            logo: account.logotipo_url,
            whatsapp: account.whatsapp,
            isActive: account.status ? account.status : false,
            facebook_url: account.facebook_url,
            instagram_url: account.instagram_url,
            account_configuration: {
              create: {
                header_color: account.cor_texto_cabecalho,
                banner_market_url: account.banner_catalogo_url,
              },
            },
          },
        })
      }
      itemsPaginated = accounts.length
      page++
    } while (itemsPaginated === perPage)
  }

  calculatePage(offset: number, limit: number): number {
    return (offset - 1) * limit
  }
}
