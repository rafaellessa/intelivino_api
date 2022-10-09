import Plan from './plan'
import Subscription from './subscription'
import { describe, it, expect } from 'vitest'
describe('Subscription', () => {
  it('Should create one subscription', () => {
    const plan = new Plan({
      name: 'mensal',
      price: 39.9,
      maxUsers: 5,
      maxLabels: 10,
    })
    const subscription = new Subscription({
      accountId: 1,
      plan,
      due: new Date('2020-01-01T10:00:00'),
    })
    expect(subscription.accountId).toBe(1)
    expect(subscription.price).toBe(39.9)
  })
})
