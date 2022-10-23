import { MigrateRepository } from "../../infra/repositories/migrate-repository";
import { Router } from "express";

export (router: Router): void => {
  const migrateRepository = new MigrateRepository();
  router.get("/migrate/uvas", (_req, response) => {
    response.setHeader("Content-Type", "application/json");
    migrateRepository.migrateGrapes();
    response.send({});
  });

  router.get("/migrate/paises", (_req, response) => {
    response.setHeader("Content-Type", "application/json");
    migrateRepository.migrateCountry();
    response.send({});
  });
};
