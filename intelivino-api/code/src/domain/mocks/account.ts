import { AccountProps } from '../entities/account'
import { faker } from '@faker-js/faker'
import CpfGenerator from '../utils/cpf-generator'
import Address from '../entities/address'
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
  }
}
