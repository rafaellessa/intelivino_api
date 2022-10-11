import { faker } from '@faker-js/faker'
import { AddressProps } from '../entities/address'

export const createAddressMock = (): AddressProps => {
  return {
    street: faker.address.street(),
    city: faker.address.city(),
    country: faker.address.country(),
    district: 'any_district',
    number: faker.datatype.number().toString(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    additionalInformation: '',
  }
}
