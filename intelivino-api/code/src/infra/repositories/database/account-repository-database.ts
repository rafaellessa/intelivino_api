import { Account, Address } from '@/domain/entities'
import { Failure } from '@/domain/errors'
import {
  AccountCreateDto,
  AccountRepository,
} from '@/domain/repositories/account-repository'
import DatabaseError from '@/infra/errors/database-error'
import { Either, left, right } from '@/shared/either'
import { PrismaClient } from '@prisma/client'
export class AccountRepositoryDatabase implements AccountRepository {
  constructor(readonly prisma: PrismaClient) {}
  async create(data: AccountCreateDto): Promise<Either<Failure, Account>> {
    try {
      const account = await this.prisma.account.create({
        data: {
          name: data.name,
          email: data.email,
          country: data.country,
          district: data.district,
          domain: data.domain,
          gender: data.gender,
          market_name: data.marketName,
          number: data.number,
          phone: data.phone,
          person_type: data.personType,
          state: data.state,
          street: data.street,
          city: data.city,
          zipcode: data.zipcode,
          banner: data.banner,
          complement: data.complement,
          cpf_cnpj: data.cpfCnpj,
          facebook_url: data.facebookUrl,
          instagram_url: data.instagramUrl,
          isActive: data.isActive,
          logo: data.logo,
          social_reason: data.socialReason,
          site: data.site,
          whatsapp: data.whatsapp,
        },
      })
      const parsedAccount = new Account({
        id: account.id,
        name: account.name,
        email: account.email,
        address: new Address({
          street: account.street,
          number: account.number,
          city: account.city,
          state: account.state,
          country: account.country,
          district: account.district,
          zipcode: account.zipcode,
          additionalInformation: account.complement,
        }),
        domain: account.domain,
        gender: account.gender,
        isActive: account.isActive,
        marketName: account.market_name,
        personType: account.person_type,
        banner: account.banner,
        cpfCnpj: account.cpf_cnpj,
        externalId: account.external_id,
        facebookUrl: account.facebook_url,
        instagramUrl: account.instagram_url,
        logo: account.logo,
        socialReason: account.social_reason,
        phone: account.phone,
        site: account.site,
        whatsapp: account.whatsapp,
      })
      return right(parsedAccount)
    } catch (error) {
      return left(new DatabaseError((error as Error).message))
    }
  }
  get(accountId: string): Promise<Either<Failure, Account>> {
    throw new Error('Method not implemented.')
  }
}
