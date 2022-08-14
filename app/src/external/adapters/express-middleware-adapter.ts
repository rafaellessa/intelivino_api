import { StatusCodeResponse } from '../../infra/protocols/http'
import { Middleware } from '../../presentation/middleware/ports/middleware'
import { Request, Response, NextFunction } from 'express'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      accessToken: req.headers.authorization?.replace('Bearer ', ''),
    }
    const httpResponse = await middleware.handle(request)
    if (httpResponse.statusCode === StatusCodeResponse.OK) {
      res.locals = { user: httpResponse.body }
      return next()
    }
    return res.status(httpResponse.statusCode).json({
      error: httpResponse.body,
    })
  }
}
