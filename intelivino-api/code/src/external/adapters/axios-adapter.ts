import {
  HttpClient,
  HttpRequestType,
  HttpResponseType,
  StatusCodeResponse,
} from '../../infra/protocols/http'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

export class AxiosAdapter implements HttpClient {
  api: AxiosInstance

  constructor(readonly baseUrl?: string) {
    if (!baseUrl) {
      this.baseUrl = process.env.GRUVI_CORE_ENDPOINT
    }
    this.api = axios.create({
      baseURL: this.baseUrl,
    })
  }

  async request<R>(
    params: HttpRequestType
  ): Promise<HttpResponseType<R | any>> {
    const method = params.method || 'GET'
    let response: AxiosResponse<R>
    if (!params.url) {
      throw new Error('url is not provided')
    }
    switch (method) {
      case 'GET':
        response = await this.api.get(params.url, { ...params })
        break
      case 'POST':
        response = await this.api.post(params.url, params.data, { ...params })
        break
      case 'PATCH':
        response = await this.api.patch(params.url, params.data, { ...params })
        break
      default:
        response = await this.api.get(params.url, { ...params })
        break
    }
    return this.factoryResponse(response)
  }

  factoryResponse<R>(response: AxiosResponse<R>): HttpResponseType<R> {
    switch (response.status) {
      case 200:
        return {
          status: StatusCodeResponse.OK,
          body: response.data,
        }
      case 201:
        return {
          status: StatusCodeResponse.CREATED,
          body: response.data,
        }
      case 500: {
        return {
          status: StatusCodeResponse.SERVER_ERROR,
          body: response.data,
        }
      }
      case 401: {
        return {
          status: StatusCodeResponse.UNAUTHORIZED,
          body: response.data,
        }
      }
      default:
        return {
          status: StatusCodeResponse.BAD_REQUEST,
          body: response.data,
        }
    }
  }
}
