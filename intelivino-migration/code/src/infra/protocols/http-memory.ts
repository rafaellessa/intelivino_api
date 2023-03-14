import HttpClient, { HttpRequestType, HttpResponseType } from './http'

export class HttpMemory implements HttpClient {
  request<R>(params: HttpRequestType): Promise<HttpResponseType<R>> {
    return Promise.resolve({
      status: 200,
      body: {} as R,
    })
  }
}
