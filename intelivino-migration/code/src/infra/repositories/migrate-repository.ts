import { PrismaClient } from "@prisma/client";
import { PrismaClient as PrismaClientDbProd } from "../database_api/orm/prisma/client";
import { slugGenerator } from "../utils/slug_generator";
import { cleanString } from "../utils/string";

interface GrapeCreateDto {
  name: string;
}

export class MigrateRepository {
  prismaDbOlder: PrismaClient;
  prismaDbProd: PrismaClientDbProd;
  constructor() {
    this.prismaDbOlder = new PrismaClient();
    this.prismaDbProd = new PrismaClientDbProd();
  }
  async migrateGrapes() {
    try {
      let page = 1;
      const perPage = 50;
      let itemsPaginated = 0;
      do {
        itemsPaginated = 0;
        const grapesOlder = await this.prismaDbOlder.uvas.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        });
        for (const grape of grapesOlder) {
          await this.prismaDbProd.grape.create({
            data: {
              name: grape.nome,
            },
          });
        }
        itemsPaginated = grapesOlder.length;
        page++;
      } while (itemsPaginated === perPage);
    } catch (error) {
      console.log("Deu merda");
      throw new Error((error as Error).message);
    }
  }

  async migrateCountry() {
    try {
      let page = 1;
      const perPage = 50;
      let itemsPaginated = 0;
      do {
        itemsPaginated = 0;
        const countries = await this.prismaDbOlder.meta_paises.findMany({
          take: perPage,
          skip: this.calculatePage(page, perPage),
        });
        for (const country of countries) {
          const states = await this.prismaDbOlder.meta_estados.findMany({
            where: {
              pais_id: country.id,
            },
          });
          await this.prismaDbProd.country.create({
            data: {
              name: country.descricao || "",
              slug: slugGenerator(cleanString(country.descricao!)),
              value: country.valor,
              states: {
                create: states.map((state) => ({
                  name: state.descricao,
                  slug: slugGenerator(cleanString(state.descricao)),
                })),
              },
            },
          });
        }
        itemsPaginated = countries.length;
        page++;
      } while (itemsPaginated === perPage);
    } catch (error) {
      console.log("Deu merda");
      throw new Error((error as Error).message);
    }
  }

  calculatePage(offset: number, limit: number): number {
    return (offset - 1) * limit;
  }
}
