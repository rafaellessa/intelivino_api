import GetTokenInfo from '../../usecases/auth/get-token-info/get-token-info'
import Authentication from '../../presentation/middleware/authentication'
import { Middleware } from '../../presentation/middleware/ports/middleware'
import AxiosAdapter from '../adapters/axios-adapter'
import { makeTokenManager } from './token-manager'
import DayjsAdapter from '../../infra/utils/dayjs-adapter'
import CryptoAdapter from '../adapters/crypto-adapter'

export const makeAuthMiddleware = (): Middleware => {
  const baseUrl = process.env.GRUVI_ENDPOINT || ''
  const httpClient = new AxiosAdapter(baseUrl)
  const getTokenInfo = new GetTokenInfo(httpClient)
  const tokenManager = makeTokenManager()
  const dateUtils = new DayjsAdapter()
  const encryptor = new CryptoAdapter(dateUtils)
  return new Authentication(tokenManager, getTokenInfo, dateUtils, encryptor)
}
