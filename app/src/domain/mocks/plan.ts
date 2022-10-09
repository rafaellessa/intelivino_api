import { PlanProps } from '../entities/plan'
import { faker } from '@faker-js/faker'

export const createPlanMock = (): PlanProps => {
  return {
    maxLabels: faker.datatype.number(),
    maxUsers: faker.datatype.number(),
    name: 'Mensal',
    price: Number(faker.commerce.price()),
  }
}
