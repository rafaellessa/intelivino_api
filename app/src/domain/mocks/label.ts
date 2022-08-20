import { LabelProps } from '../entities/label'
import { faker } from '@faker-js/faker'

export const createLabelMock = (): LabelProps => {
  return {
    name: faker.name.firstName(),
    price: Number(faker.commerce.price()),
    photo: '',
    promotionalPrice: Number(faker.commerce.price()),
  }
}
