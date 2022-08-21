import { createAccountMock } from '../mocks/account'
import Account from './account'
import Plan from './plan'
import Subscription from './subscription'
import { createSubscriptionMock } from '../mocks/subscription'
import AccountUser from './account-user'
import { faker } from '@faker-js/faker'
import { createPersonMock } from '../mocks/person'
import Label from './label'
import { createLabelMock } from '../mocks/label'
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

  it('Should create one account and add subscription', () => {
    const mockedAccount = createAccountMock()
    const account = new Account(mockedAccount)
    const subscriptionMocked = createSubscriptionMock()
    account.addSubscription(new Subscription(subscriptionMocked))
    expect(account.email).toBe(mockedAccount.email)
    expect(account.subscriptions[0]?.price).toBe(subscriptionMocked.plan.price)
    expect(account.getSubscriptionActive()).toBeTruthy()
  })

  it('Should create one account and add subscription and add users', () => {
    const mockedAccount = createAccountMock()
    const account = new Account(mockedAccount)
    const mockedSubscription = createSubscriptionMock()
    mockedSubscription.plan.maxLabels = 2
    mockedSubscription.plan.maxUsers = 2
    mockedSubscription.due = faker.date.future()
    account.addSubscription(new Subscription(mockedSubscription))
    account.addUsers(new AccountUser(createPersonMock()))
    account.addUsers(new AccountUser(createPersonMock()))
    expect(account.email).toBe(mockedAccount.email)
    expect(account.subscriptions[0]?.price).toBe(mockedSubscription.plan.price)
    expect(account.getSubscriptionActive()).toBeTruthy()
    expect(account.users).toHaveLength(2)
  })

  it('Should create one account and add subscription and add max limit users', () => {
    const mockedAccount = createAccountMock()
    const account = new Account(mockedAccount)
    const mockedSubscription = createSubscriptionMock()
    mockedSubscription.plan.maxLabels = 2
    mockedSubscription.plan.maxUsers = 2
    mockedSubscription.due = faker.date.future()
    account.addSubscription(new Subscription(mockedSubscription))
    account.addUsers(new AccountUser(createPersonMock()))
    account.addUsers(new AccountUser(createPersonMock()))
    expect(account.email).toBe(mockedAccount.email)
    expect(account.subscriptions[0]?.price).toBe(mockedSubscription.plan.price)
    expect(account.getSubscriptionActive()).toBeTruthy()
    expect(account.users).toHaveLength(2)
    expect(() => account.addUsers(new AccountUser(createPersonMock()))).toThrow(
      'Maximum of user'
    )
  })

  it('Should note add users when not exist subscription active', () => {
    const mockedAccount = createAccountMock()
    const account = new Account(mockedAccount)
    const mockedSubscription = createSubscriptionMock()
    mockedSubscription.plan.maxLabels = 2
    mockedSubscription.plan.maxUsers = 2
    mockedSubscription.due = faker.date.past()
    account.addSubscription(new Subscription(mockedSubscription))
    expect(() => account.addUsers(new AccountUser(createPersonMock()))).toThrow(
      'None subscription active'
    )
  })

  it('Should note add labels when not exist subscription active', () => {
    const mockedAccount = createAccountMock()
    const account = new Account(mockedAccount)
    const mockedSubscription = createSubscriptionMock()
    mockedSubscription.plan.maxLabels = 2
    mockedSubscription.plan.maxUsers = 2
    mockedSubscription.due = faker.date.past()
    account.addSubscription(new Subscription(mockedSubscription))
    expect(() => account.addLabels(new Label(createLabelMock()))).toThrow(
      'None subscription active'
    )
  })

  it('Should note add label when not exist subscription active', () => {
    const mockedAccount = createAccountMock()
    const account = new Account(mockedAccount)
    const mockedSubscription = createSubscriptionMock()
    mockedSubscription.plan.maxLabels = 2
    mockedSubscription.plan.maxUsers = 2
    mockedSubscription.due = faker.date.future()
    account.addSubscription(new Subscription(mockedSubscription))
    account.addLabels(new Label(createLabelMock()))
    account.addLabels(new Label(createLabelMock()))
    expect(() => account.addLabels(new Label(createLabelMock()))).toThrow(
      'Maximum of labels'
    )
  })

  it('Should create one account and add subscription expired', () => {
    const mockedAccount = createAccountMock()
    const account = new Account(mockedAccount)
    account.addSubscription(
      new Subscription({
        accountId: account.id,
        plan: new Plan({
          name: 'Mensal',
          maxLabels: 10,
          maxUsers: 5,
          price: 39.9,
        }),
        due: new Date('2020-01-01T10:00:00'),
      })
    )
    expect(account.email).toBe(mockedAccount.email)
    expect(account.subscriptions[0]?.price).toBe(39.9)
    expect(account.getSubscriptionActive()).toBeFalsy()
  })
})
