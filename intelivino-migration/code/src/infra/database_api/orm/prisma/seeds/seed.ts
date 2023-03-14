import { slugGenerator } from '../../../../../domain/utils/slug_generator'
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

  const orderStatus = await prisma.orderStatus.createMany({
    data: [
      {
        name: 'Pendente',
        slug: slugGenerator('Pendente'),
      },
      {
        name: 'Cancelado',
        slug: slugGenerator('Cancelado'),
      },
      {
        name: 'Aguadando Pagamento',
        slug: slugGenerator('Aguadando Pagamento'),
      },
      {
        name: 'Pagamento Recusado',
        slug: slugGenerator('Pagamento Recusado'),
      },
      {
        name: 'Entrega em Andamento',
        slug: slugGenerator('Entrega em Andamento'),
      },
      {
        name: 'Finalizado',
        slug: slugGenerator('Finalizado'),
      },
    ],
  })

  console.log({ activities })
  console.log({ roles })
  console.log({ orderStatus })
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
