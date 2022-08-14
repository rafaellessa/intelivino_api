import request from 'supertest'
import app from '../config/app'
import { faker } from '@faker-js/faker'

describe('Body parser Middleware', () => {
  jest.setTimeout(10000)
  test('should parse body as json', async () => {
    const fakeName = faker.name.firstName()
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: fakeName })
      .expect({ name: fakeName })
  })
})
