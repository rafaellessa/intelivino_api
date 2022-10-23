import { Subscription, SubscriptionProps } from '@/domain/entities'
import { AccountRepository } from '@/domain/repositories/account-repository'
import { left } from '@/shared/either'
import { FactoryRepository } from '../../infra/repositories/factory/factory-repository'
export class AddSubscriptionToAccount {
  accountRepository: AccountRepository
  constructor(readonly factoryRepository: FactoryRepository) {
    this.accountRepository = factoryRepository.makeAccountRepository()
  }
  async execute(accountId: string, data: SubscriptionProps) {
    const account = await this.accountRepository.get(accountId)
    if (account.isLeft()) {
      return left(account.value)
    }
    account.value.addSubscription(
      new Subscription({
        accountId: account.value.id,
        due: data.due,
        plan: data.plan,
      })
    )
  }
}
