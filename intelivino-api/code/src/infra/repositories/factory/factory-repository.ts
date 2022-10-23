import { AccountRepository, UserRepository } from '../../../domain/repositories'

export interface FactoryRepository {
  makeAccountRepository(): AccountRepository
  makeUserRepository(): UserRepository
}
