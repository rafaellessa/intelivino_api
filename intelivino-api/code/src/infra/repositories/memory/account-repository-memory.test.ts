import { describe, expect, it } from 'vitest'
import { Right } from '../../../shared/either'
import { mockCreateAccount } from '../../mocks/account'
import { FactoryRepositoryMemory } from '../factory/factory-repository-memory'
describe('AccountRepositoryMemory', () => {
  it('Should create one account', async () => {
    const factoryRepository = new FactoryRepositoryMemory()
    const accountRepository = factoryRepository.makeAccountRepository()
    const parsedAccount = await accountRepository.create(mockCreateAccount())
    expect(parsedAccount).toBeInstanceOf(Right)
  })
})
