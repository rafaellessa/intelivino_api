import { HttpRequest, HttpResponse } from './ports/http'

export interface BaseController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}
