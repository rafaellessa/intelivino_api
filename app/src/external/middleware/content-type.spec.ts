import request from 'supertest'
import app from '../config/app'
import { describe, test, vi } from 'vitest'

describe('Content Type Middleware', () => {
  vi.useFakeTimers()
  setTimeout(() => {}, 10000)
  test('should return default content type as json', async () => {
    app.get('/test_content_type', (_req, res) => {
      res.send('')
    })
    await request(app).get('/test_content_type').expect('content-type', /json/)
  })

  test('should return xml content type when forced', async () => {
    app.get('/test_content_type_xml', (_req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(app)
      .get('/test_content_type_xml')
      .expect('content-type', /xml/)
  })
})
