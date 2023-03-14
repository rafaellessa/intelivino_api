import { faker } from '@faker-js/faker'
import { Address, UserProps } from '../entities'
import { createAddressMock } from './address'

export const createUserMock = (): UserProps => ({
  address: new Address(createAddressMock()),
  email: faker.internet.email(),
  gender: 'M',
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  password: faker.internet.password(),
  lastLogin: faker.date.recent(),
})
