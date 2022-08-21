import { faker } from '@faker-js/faker'
import { ItemProps } from '../entities/item'

export enum ItemComercialType {
  promotional = 'promocao',
  release = 'lancamento',
  kit = 'kit',
  regular = 'normal',
}

export const createItemMock = (): ItemProps => {
  return {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
    description: faker.datatype.string(),
    price: Number(faker.commerce.price()),
    photo: faker.internet.url(),
    promotionalPrice: 0,
    comercialType: ItemComercialType.regular,
    stock: true,
  }
}
