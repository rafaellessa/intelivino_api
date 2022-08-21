import { createAccountMock } from '../mocks/account'
import Account from './account'
describe('account', () => {
  it('Should create one account if pass correct attributes', () => {
    const mockedAccount = createAccountMock()
    const account = new Account(mockedAccount)
    expect(account.email).toBe(mockedAccount.email)
  })

  it('Should not create one account if pass incorrect CPF', () => {
    const mockedAccount = createAccountMock()
    mockedAccount.cpf = '111111111111'
    expect(() => new Account(mockedAccount)).toThrow('Invalid CPF')
  })
})
