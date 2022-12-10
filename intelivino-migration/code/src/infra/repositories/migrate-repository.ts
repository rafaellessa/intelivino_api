import { faker } from '@faker-js/faker'
import {
  activities_business,
  business,
  PrismaClient,
  users,
} from '@prisma/client'
import {
  Account,
  GenderType,
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

  async initialMigrate() {
    try {
      await this.migrateGrapes()
      await this.migrateCountry()
      await this.migratePlans()
      await this.migrateActivities()
      await this.migrateDeliveries()
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateActivities() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.activities.deleteMany({})
      do {
        itemsPaginated = 0
        const activities = await this.prismaDbOlder.activities.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const activity of activities) {
          await this.prismaDbProd.activities.create({
            data: {
              name: activity.nome,
              slug: slugGenerator(cleanString(activity.nome)),
              external_id: activity.id,
            },
          })
        }
        itemsPaginated = activities.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }
  async migrateDeliveries() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.delivery.deleteMany({})
      await this.prismaDbProd.accountDelivery.deleteMany({})
      do {
        itemsPaginated = 0
        const deliveries = await this.prismaDbOlder.deliveries.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        for (const delivery of deliveries) {
          await this.prismaDbProd.delivery.create({
            data: {
              name: delivery.nome,
              slug: slugGenerator(cleanString(delivery.nome)),
              external_id: delivery.id,
            },
          })
        }
        itemsPaginated = deliveries.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }
  async migrateGrapes() {
    try {
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      await this.prismaDbProd.grape.deleteMany({})
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
              external_id: grape.id,
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
      await this.prismaDbProd.country.deleteMany({})
      await this.prismaDbProd.state.deleteMany({})
      await this.prismaDbProd.city.deleteMany({})
      await this.prismaDbProd.region.deleteMany({})
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
          const responseCreateCountry = await this.prismaDbProd.country.create({
            data: {
              external_id: country.id,
              name: country.descricao || '',
              slug: slugGenerator(cleanString(country.descricao!)),
              value: country.valor,
              states: {
                create: states.map((state) => ({
                  name: state.descricao,
                  external_id: state.id,
                  slug: slugGenerator(cleanString(state.descricao)),
                })),
              },
            },
            include: {
              states: true,
            },
          })

          for (const state of states) {
            const stateCreated = responseCreateCountry.states.find(
              (item) => item.external_id === state.id
            )
            const cities = await this.prismaDbOlder.meta_municipios.findMany({
              where: {
                estado_id: state.id,
              },
            })
            for (const city of cities) {
              await this.prismaDbProd.city.create({
                data: {
                  external_id: city.id,
                  name: city.descricao,
                  slug: slugGenerator(cleanString(city.descricao)),
                  state_id: stateCreated?.id || '',
                },
              })
            }
            const regions =
              await this.prismaDbOlder.meta_regioes_business.findMany({
                where: {
                  meta_estado_id: state.id,
                  meta_pais_id: country.id,
                },
              })
            for (const region of regions) {
              await this.prismaDbProd.region.create({
                data: {
                  external_id: region.id,
                  name: region.descricao,
                  slug: slugGenerator(cleanString(region.descricao)),
                  state_id: stateCreated?.id || '',
                },
              })
            }
          }
        }
        itemsPaginated = countries.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migratePlans() {
    try {
      await this.prismaDbProd.plan.deleteMany()
      await this.prismaDbProd.paymentCycle.deleteMany()
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const plans = await this.prismaDbOlder.planos.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        })
        if (!plans) {
          throw new Error('none plans')
        }
        const paymentCycle = await this.prismaDbProd.paymentCycle.create({
          data: {
            name: 'Mensal',
            slug: 'mensal',
          },
        })
        for (const plan of plans) {
          await this.prismaDbProd.plan.create({
            data: {
              name: plan.nome!,
              external_id: plan.id,
              slug: slugGenerator(plan.nome!),
              description: plan.descricao!,
              max_labels: plan.max_rotulos!,
              max_users: plan.max_users!,
              price: Number(plan.valor_plano!),
              payment_cycle_id: paymentCycle.id,
            },
          })
        }
        itemsPaginated = plans.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateAccountsAndBusinessUsers(accountIds?: number[]) {
    let page = 1
    const perPage = 50
    let itemsPaginated = 0
    const roleBusiness = await this.getRole('Business')
    const roleSeller = await this.getRole('Seller')
    if (!roleBusiness || !roleSeller) {
      throw new Error('Business role not found')
    }
    await this.prismaDbProd.account.deleteMany({})
    await this.prismaDbProd.user.deleteMany({})
    await this.prismaDbProd.accountUser.deleteMany({})
    do {
      itemsPaginated = 0
      const accounts = accountIds
        ? await this.getAccountsPerId(accountIds)
        : await this.getAccounts(page, perPage)
      for (const account of accounts) {
        const responseCreateAccount = await this.createAccount(account)
        await this.createAccountActivities(account, responseCreateAccount)
        await this.createAccountUser(account, responseCreateAccount)
        await this.createAccountSeller(account.user_id!)
        await this.createAccountDeliveries(account, responseCreateAccount)
      }
      itemsPaginated = accounts.length
      page++
    } while (itemsPaginated === perPage)
  }

  async getRole(roleName: string) {
    try {
      return await this.prismaDbProd.role.findUnique({
        where: {
          name: roleName,
        },
      })
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async getAccounts(page: number, perPage?: number) {
    return await this.prismaDbOlder.business.findMany({
      include: {
        users: true,
        activities_business: true,
      },
      where: {
        user_id: {
          not: null,
        },
        users: {
          plano_id: {
            not: null,
            notIn: [1],
          },
        },
        status: {
          equals: true,
        },
      },
      take: perPage,
      skip: this.calculatePage(page, perPage || 10),
    })
  }

  async getAccountsPerId(accountIds: number[]) {
    return await this.prismaDbOlder.business.findMany({
      include: {
        users: true,
        activities_business: true,
      },
      where: {
        user_id: {
          not: null,
        },
        users: {
          plano_id: {
            not: null,
            notIn: [1],
          },
        },
        status: {
          equals: true,
        },
        id: {
          in: accountIds,
        },
      },
    })
  }

  getAccountCpfAndPersonType(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    }
  ) {
    let personType = '' as PersonType
    let cpfCnpj = null
    if (account.person_type === 'cnpj') {
      personType = 'J'
      cpfCnpj = account.cnpj
    } else {
      personType = 'F'
      cpfCnpj = account.cpf
    }
    return {
      cpfCnpj,
      personType,
    }
  }

  async createAccount(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    }
  ) {
    const { personType } = this.getAccountCpfAndPersonType(account)
    let accountPlan = null
    if (account.users?.plano_id) {
      accountPlan = await this.prismaDbProd.plan.findFirst({
        where: {
          external_id: account.users?.plano_id,
        },
      })
    }
    return await this.prismaDbProd.account.create({
      data: {
        external_id: account.user_id!,
        name: account.main_contact_name || '',
        country: account.users?.address_country || '',
        city: account.users?.city || '',
        district: account.users?.address_neighborhood || '',
        street: account.users?.address_street || '',
        number: account.users?.address_number || '',
        state: account.users?.state || '',
        zipcode: account.users?.address_cep || '',
        complement: account.users?.address_complement || '',
        domain:
          account.users?.name_business_slug || faker.internet.domainName(),
        email: account.users?.email || '',
        market_name: account.users?.name_business || '',
        phone: account.main_contact_fone,
        gender: 'ND',
        person_type: personType,
        cpf_cnpj: account.person_type === 'cpf' ? account.cpf : account.cnpj,
        site: account.website,
        social_reason: account.razao_social,
        logo: account.logotipo_url,
        whatsapp: account.whatsapp,
        isActive: account.status ? account.status : false,
        facebook_url: account.facebook_url,
        instagram_url: account.instagram_url,
        plan_id: accountPlan ? accountPlan.id : null,
        account_configuration: {
          create: {
            header_color: account.cor_texto_cabecalho,
            banner_market_url: account.banner_catalogo_url,
          },
        },
      },
    })
  }

  async createAccountActivities(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    },
    newAccount: Account
  ) {
    for (const activity of account.activities_business) {
      const newActivity = await this.prismaDbProd.activities.findUnique({
        where: {
          external_id: activity.activity_id!,
        },
      })
      await this.prismaDbProd.accountActivities.create({
        data: {
          account_id: newAccount.id,
          activities_id: newActivity?.id || '',
        },
      })
    }
  }
  async createAccountDeliveries(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    },
    newAccount: Account
  ) {
    const deliveries = await this.prismaDbOlder.deliveries_business.findMany({
      where: {
        business_id: account.id,
        AND: {
          business_id: {
            not: null,
          },
        },
      },
    })
    for (const delivery of deliveries) {
      const newDelivery = await this.prismaDbProd.delivery.findUnique({
        where: {
          external_id: delivery.delivery_id!,
        },
      })
      await this.prismaDbProd.accountDelivery.create({
        data: {
          account_id: newAccount.id,
          delivery_id: newDelivery?.id || '',
        },
      })
    }
  }
  async createAccountUser(
    account: business & {
      activities_business: activities_business[]
      users: users | null
    },
    accountCreated: Account
  ) {
    const roleBusiness = await this.getRole('Business')
    const { cpfCnpj } = this.getAccountCpfAndPersonType(account)
    if (!roleBusiness) {
      throw new Error('Business role not found')
    }
    await this.prismaDbProd.user.create({
      data: {
        account_user: {
          create: {
            account_id: accountCreated.id,
            role_id: roleBusiness.id,
          },
        },
        name: account.users?.name || '',
        email: account.users?.email || '',
        phone: account.fone,
        city: account.users?.city || '',
        state: account.users?.state || '',
        zipcode: account.users?.address_cep || '',
        complement: account.users?.address_complement,
        country: account.users?.address_country || '',
        number: account.users?.address_number || '',
        district: account.users?.address_neighborhood || '',
        street: account.users?.address_street || '',
        password: account.users?.password || '',
        apple_id: account.users?.apple,
        facebook_id: account.users?.facebook,
        birthdate: account.users?.birthday || new Date(),
        gender: 'ND' as GenderType,
        cpf_cnpj: cpfCnpj,
        google_id: account.users?.google,
        photo: account.users?.photo,
        whatsapp: account.whatsapp,
        rd_station_id: account.users?.rdstation_id,
        rd_station_sync: account.users?.rdstation_sync === null ? false : true,
      },
    })
  }

  async createAccountSeller(accountId: number) {
    const roleSeller = await this.getRole('Seller')
    if (!roleSeller) {
      throw new Error('Seller role not found')
    }
    const newAccountAlreadyExists = await this.prismaDbProd.account.findUnique({
      where: {
        external_id: accountId,
      },
    })
    if (!newAccountAlreadyExists) {
      throw new Error('Account not found')
    }
    const accountSeller = await this.prismaDbOlder.business.findMany({
      where: {
        user_id_parent: accountId,
      },
      include: {
        users: true,
      },
    })
    if (!accountSeller) {
      throw new Error('Account not found')
    }
    for (const account of accountSeller) {
      await this.prismaDbProd.user.create({
        data: {
          account_user: {
            create: {
              account_id: newAccountAlreadyExists.id,
              role_id: roleSeller.id,
            },
          },
          name: account.users?.name || '',
          email: account.users?.email || '',
          phone: account.fone,
          city: account.users?.city || '',
          state: account.users?.state || '',
          zipcode: account.users?.address_cep || '',
          complement: account.users?.address_complement,
          country: account.users?.address_country || '',
          number: account.users?.address_number || '',
          district: account.users?.address_neighborhood || '',
          street: account.users?.address_street || '',
          password: account.users?.password || '',
          apple_id: account.users?.apple,
          facebook_id: account.users?.facebook,
          birthdate: account.users?.birthday || new Date(),
          gender: 'ND' as GenderType,
          cpf_cnpj: account.person_type === 'cpf' ? account.cpf : account.cnpj,
          google_id: account.users?.google,
          photo: account.users?.photo,
          whatsapp: account.whatsapp,
          rd_station_id: account.users?.rdstation_id,
          rd_station_sync: account.users?.rdstation_sync,
        },
      })
    }
  }
  async migrateLabels() {
    try {
      await this.prismaDbProd.label.deleteMany()
      await this.prismaDbProd.labelCampaign.deleteMany()
      await this.prismaDbProd.labelGrape.deleteMany()
      await this.prismaDbProd.labelType.deleteMany()
      await this.prismaDbProd.orderLabel.deleteMany()
      let page = 1
      const perPage = 50
      let itemsPaginated = 0
      do {
        itemsPaginated = 0
        const labels = await this.prismaDbOlder.indicacoes.findMany({
          include: {
            campaigns_indicacoes: true,
            indicacoes_uvas: true,
          },
        })
        for (const label of labels) {
          // const responseCreateLabels = await this.prismaDbProd.label.create({
          //   data: {
          //     name: label.nome || '',
          //     price: Number(label.preco),
          //     promotional_price: Number(label.preco_promocional),
          //     description: label.descricao,
          //     alcohol_percentage: label.porcentagem_alcool,
          //     harvest: label.safra,
          //     is_active: label.status_indicacao_id === 1 ? true : false,
          //   },
          // })
        }
        itemsPaginated = labels.length
        page++
      } while (itemsPaginated === perPage)
    } catch (error) {
      console.log('Deu merda')
      throw new Error((error as Error).message)
    }
  }

  async migrateSellers() {}
  calculatePage(offset: number, limit: number): number {
    return (offset - 1) * limit
  }
}
