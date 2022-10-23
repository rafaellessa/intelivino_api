import { describe, beforeEach, it, expect } from 'vitest'
import { FactoryRepositoryMemory } from '../factory/factory-repository-memory'
import { mockCreateAccount } from '../../mocks/account'
import { Right } from '../../../shared/either'
describe('AccountRepositoryMemory', () => {
  it('Should create one account', async () => {
    const factoryRepository = new FactoryRepositoryMemory()
    const accountRepository = factoryRepository.makeAccountRepository()
    const parsedAccount = await accountRepository.create(mockCreateAccount())
    expect(parsedAccount).toBeInstanceOf(Right)
  })
})
