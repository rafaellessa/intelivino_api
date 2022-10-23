import { Router } from "express";

export (router: Router): void => {
  router.get("/api-docs", (_req, response) => {
    response.setHeader("Content-Type", "application/json");
    response.send({});
  });
};
