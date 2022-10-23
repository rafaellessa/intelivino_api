import { PersonProps } from '../entities/person'
import { createAddressMock } from './address'
import CpfGenerator from '../utils/cpf-generator'
import { faker } from '@faker-js/faker'

export const createPersonMock = (): PersonProps => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    phone: faker.phone.number('55 ## #####-####'),
    whatsapp: faker.phone.number('55 ## #####-####'),
    address: createAddressMock(),
    cpf: new CpfGenerator().generate(),
    email: faker.internet.email(),
  }
}
