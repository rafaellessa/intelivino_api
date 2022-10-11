import { SubscriptionProps } from '../entities/subscription'
import { faker } from '@faker-js/faker'
import { createPlanMock } from './plan'

export const createSubscriptionMock = (): SubscriptionProps => {
  return {
    accountId: faker.datatype.number(),
    due: faker.date.future(),
    plan: createPlanMock(),
  }
}
