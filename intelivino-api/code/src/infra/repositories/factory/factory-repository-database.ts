import { AccountRepository, UserRepository } from '@/domain/repositories'
import { PrismaClient } from '@prisma/client'
import { FactoryRepository } from './factory-repository'
import { AccountRepositoryDatabase } from '../database/account-repository-database'

export class FactoryRepositoryDatabase implements FactoryRepository {
  constructor(readonly prisma: PrismaClient) {}
  makeAccountRepository(): AccountRepository {
    return new AccountRepositoryDatabase(this.prisma)
  }
  makeUserRepository(): UserRepository {
    throw new Error('Method not implemented.')
  }
}
