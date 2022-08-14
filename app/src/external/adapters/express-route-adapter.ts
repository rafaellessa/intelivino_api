import { TokenInfoResponse } from '../../usecases/auth/get-token-info/get-token-info'
import { Request, Response } from 'express'
import AhreasController from '../../presentation/adapters/controllers/ahreas-controller'
import { HttpRequest } from '../../presentation/adapters/controllers/ports/http'

export const adaptRoute = (controller: AhreasController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
      user: res.locals.user as TokenInfoResponse,
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
