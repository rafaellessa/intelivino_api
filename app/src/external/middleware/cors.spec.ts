import app from '../config/app'
import request from 'supertest'
import { describe, test, vi } from 'vitest'

describe('CORS Middleware', () => {
  vi.useFakeTimers()
  setTimeout(() => {}, 10000)
  test('should enable CORS', async () => {
    app.post('/test_cors', (_req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-headers', '*')
      .expect('access-control-allow-methods', '*')
  })
})
