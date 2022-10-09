import { OrderProps } from '../entities/order'
import CpfGenerator from '../utils/cpf-generator'
import { faker } from '@faker-js/faker'

export const createOrderMock = (): OrderProps => {
  return {
    cpf: new CpfGenerator().generate(),
    sequence: faker.datatype.number(),
  }
}
