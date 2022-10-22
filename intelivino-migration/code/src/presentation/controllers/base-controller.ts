import { HttpRequest, HttpResponse } from "./ports/http";

export default interface BaseController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
