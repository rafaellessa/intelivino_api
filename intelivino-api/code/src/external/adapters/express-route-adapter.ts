import { BaseController } from '@/presentation/controllers/base-controller'
import { HttpRequest } from '@/presentation/controllers/ports/http'
import { Request, Response } from 'express'

export const adaptRoute = (controller: BaseController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
