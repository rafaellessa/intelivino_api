import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
// import { slugGenerator } from "../../../../../domain/utils/slug_generator";

const prisma = new PrismaClient();

async function main() {
  // await prisma.activities.deleteMany({});
  // const activities = await prisma.activities.createMany({
  //   data: [
  //     {
  //       name: "Loja Física",
  //       slug: "loja_fisica",
  //       uuid: uuidv4(),
  //     },
  //     {
  //       name: "Wine bar",
  //       slug: "wine_bar",
  //       uuid: uuidv4(),
  //     },
  //     {
  //       name: "E-commerce",
  //       slug: "e_commerce",
  //       uuid: uuidv4(),
  //     },
  //     {
  //       name: "Champanheria",
  //       slug: "Champanheria",
  //       uuid: uuidv4(),
  //     },
  //     {
  //       name: "Consultor de vendas",
  //       slug: "consultor_de_vendas",
  //       uuid: uuidv4(),
  //     },
  //     {
  //       name: "Organizador de eventos",
  //       slug: "Organizador de eventos",
  //       uuid: uuidv4(),
  //     },
  //     {
  //       name: "Vinícola",
  //       slug: "Vinícola",
  //       uuid: uuidv4(),
  //     },
  //     {
  //       name: "Importadora",
  //       slug: "Importadora",
  //       uuid: uuidv4(),
  //     },
  //   ],
  // });
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
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
