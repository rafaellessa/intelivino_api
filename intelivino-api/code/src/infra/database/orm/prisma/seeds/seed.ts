import { slugGenerator } from '../../../../../domain/utils/slug_generator'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.activities.deleteMany({})
  const activities = await prisma.activities.createMany({
    data: [
      {
        name: 'Loja Física',
        slug: slugGenerator('Loja Física'),
      },
      {
        name: 'Wine Bar',
        slug: slugGenerator('Wine Bar'),
      },
      {
        name: 'E-commerce',
        slug: slugGenerator('E-commerce'),
      },
      {
        name: 'Champanheria',
        slug: slugGenerator('Champanheria'),
      },
      {
        name: 'Consultor de vendas',
        slug: slugGenerator('Consultor de vendas'),
      },
      {
        name: 'Organizador de eventos',
        slug: slugGenerator('Organizador de eventos'),
      },
      {
        name: 'Vinícola',
        slug: slugGenerator('Vinícola'),
      },
      {
        name: 'Importadora',
        slug: slugGenerator('Importadora'),
      },
    ],
  })
  // const account = await prisma.account.create({
  //   data: {
  //     name: faker.name.firstName(),
  //     cpf_cnpj: new CpfGenerator().generate(),
  //     gender: 'M',
  //     person_type: 'F',
  //     uuid: uuidv4(),
  //     banner: '',
  //     instagram_url: '',
  //     logo: '',
  //     site: faker.internet.url(),
  //     social_reason: '',
  //     facebook_url: faker.internet.url(),
  //     phone:
  //   },
  // })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
