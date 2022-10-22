/* eslint-disable no-unused-vars */
export enum StatusCodeResponse {
  BAD_REQUEST = 400,
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
}
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'

export type HttpRequestType = {
  url: string
  method?: Method
  params?: any
  headers?: any
  data?: any
}

export type HttpResponseType<R> = {
  body: R
  status: StatusCodeResponse
}

export default interface HttpClient {
  request<R>(params: HttpRequestType): Promise<HttpResponseType<R>>
}
