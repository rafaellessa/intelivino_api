import { MigrateRepository } from '../../infra/repositories/migrate-repository'
import { Router } from 'express'

export default (router: Router): void => {
  const migrateRepository = new MigrateRepository()
  router.get('/migrate/uvas', (_req, response) => {
    response.setHeader('Content-Type', 'application/json')
    migrateRepository.migrateGrapes()
    response.send({})
  })

  router.get('/migrate/paises', (_req, response) => {
    response.setHeader('Content-Type', 'application/json')
    migrateRepository.migrateCountry()
    response.send({})
  })

  router.get('/migrate/accounts', (_req, response) => {
    response.setHeader('Content-Type', 'application/json')
    migrateRepository.migrateAccountsAndBusinessUsers()
    response.send({})
  })
}
