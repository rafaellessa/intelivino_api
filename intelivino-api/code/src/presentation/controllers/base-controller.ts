export interface BaseController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}
