import { faker } from '@faker-js/faker'
import { AccountProps, Address } from '../entities'
import { CpfGenerator } from '../utils/cpf-generator'
import { createAddressMock } from './address'

export const createAccountMock = (): AccountProps => {
  return {
    id: faker.datatype.uuid(),
    address: new Address(createAddressMock()),
    phone: faker.phone.number('55 ## #####-####'),
    logo: '',
    whatsapp: faker.phone.number('55 ## #####-####'),
    cpf: new CpfGenerator().generate(),
    email: faker.internet.email(),
    name: faker.name.firstName(),
    marketName: faker.name.firstName(),
  }
}
