import { AccountRepository, UserRepository } from '../../../domain/repositories'
import { FactoryRepository } from './factory-repository'
import { AccountRepositoryMemory } from '../memory/account-repository-memory'
import { UserRepositoryMemory } from '../memory/user-repository-memory'

export class FactoryRepositoryMemory implements FactoryRepository {
  constructor() {}
  makeAccountRepository(): AccountRepository {
    return AccountRepositoryMemory.getInstance()
  }
  makeUserRepository(): UserRepository {
    return UserRepositoryMemory.getInstance()
  }
}
