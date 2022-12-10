import { MigrateRepository } from '../../infra/repositories/migrate-repository'
import { Router } from 'express'

export default (router: Router): void => {
  const migrateRepository = new MigrateRepository()
  router.get('/migrate/initial', (_req, response) => {
    response.setHeader('Content-Type', 'application/json')
    migrateRepository.initialMigrate()
    response.send({})
  })

  router.get('/migrate/paises', (_req, response) => {
    response.setHeader('Content-Type', 'application/json')
    migrateRepository.migrateCountry()
    response.send({})
  })

  router.get('/migrate/planos', (_req, response) => {
    response.setHeader('Content-Type', 'application/json')
    migrateRepository.migratePlans()
    response.send({})
  })

  router.get('/migrate/usuarios', (_req, response) => {
    response.setHeader('Content-Type', 'application/json')
    migrateRepository.migrateAccountsAndBusinessUsers()
    response.send({})
  })
}
