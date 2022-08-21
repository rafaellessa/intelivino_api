import { faker } from '@faker-js/faker'
import { LabelProps } from '../entities/label'

export const createLabelMock = (): LabelProps => {
  return {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
    description: faker.datatype.string(),
    price: Number(faker.commerce.price()),
    photo: '',
    promotionalPrice: Number(faker.commerce.price()),
  }
}
