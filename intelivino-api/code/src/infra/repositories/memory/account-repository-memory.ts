import { Account, Address } from '../../../domain/entities'
import { Failure } from '../../../domain/errors'
import {
  AccountCreateDto,
  AccountRepository,
} from '../../../domain/repositories'
import { Either, left, right } from '../../../shared/either'
import { faker } from '@faker-js/faker'

import { EntityNotFound } from '../../errors/entity-not-found'

export class AccountRepositoryMemory implements AccountRepository {
  accounts: Account[] = []
  static instance: AccountRepositoryMemory
  constructor() {
    this.accounts = []
  }

  static getInstance(): AccountRepositoryMemory {
    if (!this.instance) {
      this.instance = new AccountRepositoryMemory()
    }
    return this.instance
  }

  create(data: AccountCreateDto): Promise<Either<Failure, Account>> {
    const parsedAccount = new Account({
      id: faker.datatype.uuid(),
      marketName: faker.name.jobArea(),
      name: data.name,
      email: data.email,
      address: new Address({
        city: data.city,
        country: data.country,
        district: data.district,
        number: data.number,
        state: data.state,
        street: data.street,
        zipcode: data.zipcode,
        additionalInformation: data.complement,
      }),
      logo: data.logo,
      cpfCnpj: data.cpfCnpj,
      phone: data.phone,
      whatsapp: data.whatsapp,
      domain: data.domain,
      facebookUrl: data.facebookUrl,
      gender: data.gender,
      personType: data.personType,
      socialReason: data.socialReason,
      banner: data.banner,
      instagramUrl: data.instagramUrl,
      site: data.site,
    })
    this.accounts.push(parsedAccount)
    return Promise.resolve(right(parsedAccount))
  }

  async get(accountId: string): Promise<Either<Failure, Account>> {
    const parsedAccount = this.accounts.find(
      (account) => account.id === accountId
    )
    if (!parsedAccount) {
      return left(new EntityNotFound(`Entity with id ${accountId} not found`))
    }

    return Promise.resolve(right(parsedAccount))
  }
}
