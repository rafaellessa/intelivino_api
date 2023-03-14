import {
  AccountCreateDto,
  AccountRepository,
} from '../../domain/repositories/account-repository'
import { FactoryRepository } from '../../infra/repositories/factory/factory-repository'
import { Either, left, right } from '../../shared/either'
import { Failure } from '../../domain/errors'
import { Account } from '../../domain/entities'
export class CreateAccount {
  accountRepository: AccountRepository
  constructor(readonly factoryRepository: FactoryRepository) {
    this.accountRepository = factoryRepository.makeAccountRepository()
  }

  async execute(data: AccountCreateDto): Promise<Either<Failure, Account>> {
    const account = await this.accountRepository.create(data)
    if (account.isLeft()) {
      return left(account.value)
    }
    return right(account.value)
  }
}
