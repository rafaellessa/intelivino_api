import { PrismaClient } from "@prisma/client";
import { PrismaClient as PrismaClientDbProd } from "../database_api/orm/prisma/client";

export class GrapeRepository {
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
        itemsPaginated = grapesOlder.length;
        for (const grape of grapesOlder) {
          await this.prismaDbProd.grape.create({
            data: {
              name: grape.nome,
            },
          });
        }
        page++;
      } while (itemsPaginated === perPage);
    } catch (error) {
      console.log("Deu merda");
    }
  }

  calculatePage(offset: number, limit: number): number {
    return (offset - 1) * limit;
  }
}
