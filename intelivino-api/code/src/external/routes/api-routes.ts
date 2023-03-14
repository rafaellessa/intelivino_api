import { Router } from 'express'

export default (router: Router): void => {
  router.get('/api-docs', (_req, response) => {
    const a = 'teste'
    console.log({ a })
    response.setHeader('Content-Type', 'application/json')
    response.send({})
  })
}
