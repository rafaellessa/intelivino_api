import { HttpRequestType, HttpResponseType } from '@/infra/protocols/http'
import AxiosAdapter from './axios-adapter'

interface SutType<R> {
  request: HttpRequestType
  response: HttpResponseType<R>
}

function makeSut<P, R>(params: P, body: R): SutType<R> {
  return {
    request: {
      url: 'any_url',
      params,
    },
    response: {
      status: 200,
      body,
    },
  }
}
interface ExampleParamsRequest {
  anyParams: number
}
interface ExampleBodyResponse {
  anyParams: number
  anyString: string
}
describe('AxiosAdapter', () => {
  it('Should call any url and return equal props is passed', async () => {
    const { request, response } = makeSut<
      ExampleParamsRequest,
      ExampleBodyResponse
    >(
      {
        anyParams: 1,
      },
      { anyParams: 1, anyString: 'any_string' }
    )
    const httpClient = new AxiosAdapter()
    jest.spyOn(httpClient.api, 'get').mockReturnValue(
      Promise.resolve({
        ...response,
      })
    )
    const httpResponse = await httpClient.api.get<any, any>('any_url', request)
    expect(httpResponse.status).toBe(200)
    expect(httpResponse.body).toEqual({ anyParams: 1, anyString: 'any_string' })
  })

  it('Should call any url and return equal props is passed', async () => {
    const { request, response } = makeSut<
      ExampleParamsRequest,
      ExampleBodyResponse
    >(
      {
        anyParams: 1,
      },
      { anyParams: 1, anyString: 'any_string' }
    )
    const httpClient = new AxiosAdapter('')
    jest.spyOn(httpClient.api, 'post').mockReturnValue(
      Promise.resolve({
        ...response,
      })
    )
    const httpResponse = await httpClient.api.post<any, any>('any_url', request)
    expect(httpResponse.status).toBe(200)
    expect(httpResponse.body).toEqual({ anyParams: 1, anyString: 'any_string' })
  })
})
