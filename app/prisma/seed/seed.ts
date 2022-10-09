import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import CpfGenerator from '../../src/domain/utils/cpf-generator'
const prisma = new PrismaClient()

async function main() {
  const activities = await prisma.activities.createMany({
    data: [
      {
        name: 'Loja Física',
        slug: 'loja_fisica',
        uuid: uuidv4(),
      },
      {
        name: 'Wine bar',
        slug: 'wine_bar',
        uuid: uuidv4(),
      },
      {
        name: 'E-commerce',
        slug: 'e-commerce',
        uuid: uuidv4(),
      },
      {
        name: 'Champanheria',
        slug: slugGenerator('Champanheria'),
        uuid: uuidv4(),
      },
      {
        name: 'Consultor de vendas',
        slug: 'consultor_de_vendas',
        uuid: uuidv4(),
      },
      {
        name: 'Organizador de eventos',
        slug: slugGenerator('Organizador de eventos'),
        uuid: uuidv4(),
      },
      {
        name: 'Vinícola',
        slug: slugGenerator('Vinícola'),
        uuid: uuidv4(),
      },
      {
        name: 'Importadora',
        slug: slugGenerator('Importadora'),
        uuid: uuidv4(),
      },
    ],
  })
  const account = await prisma.account.create({
    data: {
      name: faker.name.firstName(),
      cpf_cnpj: new CpfGenerator().generate(),
      gender: 'M',
      person_type: 'F',
      uuid: uuidv4(),
      banner: '',
      instagram_url: '',
      logo: '',
      site: faker.internet.url(),
      social_reason: '',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
