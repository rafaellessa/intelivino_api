import { mockCreateAccount } from '@/infra/mocks/account'
import { Right } from '@/shared/either'
import { describe, it, expect, beforeAll } from 'vitest'
import { FactoryRepository } from '../../infra/repositories/factory/factory-repository'
import { FactoryRepositoryMemory } from '../../infra/repositories/factory/factory-repository-memory'
import { CreateAccount } from './create-account'
describe('account', () => {
  let factoryRepository: FactoryRepository
  let createAccount: CreateAccount
  beforeAll(() => {
    factoryRepository = new FactoryRepositoryMemory()
    createAccount = new CreateAccount(factoryRepository)
  })
  it('Should create one account', async () => {
    const mockedAccount = mockCreateAccount()
    const result = await createAccount.execute(mockedAccount)
    expect(result).toBeInstanceOf(Right)
  })
})
