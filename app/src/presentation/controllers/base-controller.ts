export default interface BaseController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
