import TokenManager from '../../usecases/authentication/ports/token-manager'
import JwtAdapter from '../adapters/jwt-adapter'

export const makeTokenManager = (): TokenManager => {
  return new JwtAdapter()
}
