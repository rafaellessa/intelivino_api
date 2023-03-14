import { faker } from '@faker-js/faker'
import { OrderProps } from '../entities'
import { CpfGenerator } from '../utils/cpf-generator'

export const createOrderMock = (): OrderProps => {
  return {
    cpf: new CpfGenerator().generate(),
    sequence: faker.datatype.number(),
  }
}
