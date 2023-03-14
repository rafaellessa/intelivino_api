import { faker } from '@faker-js/faker'
import { PersonProps } from '../entities'
import { CpfGenerator } from '../utils/cpf-generator'
import { createAddressMock } from './address'

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
