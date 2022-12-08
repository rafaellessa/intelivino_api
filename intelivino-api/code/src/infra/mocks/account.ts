import { AccountCreateDto } from '@/domain/repositories'
import { faker } from '@faker-js/faker'
import { CpfGenerator } from '../../domain/utils/cpf-generator'
export const mockCreateAccount = (): AccountCreateDto => ({
  city: faker.address.city(),
  street: faker.address.street(),
  country: faker.address.country(),
  district: 'any_district',
  number: faker.datatype.number().toString(),
  state: faker.address.state(),
  zipcode: faker.address.zipCode(),
  complement: '',
  name: faker.name.firstName(),
  email: faker.internet.email(),
  phone: faker.phone.number('55 ## #####-####'),
  cpfCnpj: new CpfGenerator().generate(),
  domain: faker.internet.domainName(),
  gender: 'F',
  logo: faker.internet.url(),
  personType: 'F',
  banner: faker.internet.url(),
  configuration: {
    bannerMarketUrl: faker.internet.url(),
    headerColor: '',
  },
  facebookUrl: faker.internet.url(),
  instagramUrl: faker.internet.url(),
  socialReasons: faker.company.name(),
  site: faker.internet.url(),
  whatsapp: faker.phone.number('55 ## #####-####'),
  marketName: faker.name.firstName(),
})
