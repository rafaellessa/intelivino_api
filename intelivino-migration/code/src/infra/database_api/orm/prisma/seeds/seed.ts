import { slugGenerator } from '@/domain/utils/slug_generator'
import { PrismaClient } from '../client'

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

  const roles = await prisma.role.createMany({
    data: [
      {
        name: 'Admin',
      },
      {
        name: 'Business',
      },
      {
        name: 'Seller',
      },
    ],
  })

  console.log({ activities })
  console.log({ roles })
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
