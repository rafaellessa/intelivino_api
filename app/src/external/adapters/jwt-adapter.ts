import JwtDecode from 'jwt-decode'
import Failure from '../../domain/errors/failure'
import { Either, left, right } from '../../shared/either'
import TokenManager, {
  Payload,
} from '../../usecases/authentication/ports/token-manager'
export interface JwtDecodeResponse {
  exp: number
  iat: number
  auth_time: number
  jti: string
  iss: string
  aud: string[]
  sub: string
  typ: string
  azp: string
  session_state: string
  acr: string
  realm_access: { roles: string[] }
  resource_access: {
    app: {
      roles: string[]
    }
    account: {
      roles: string[]
    }
  }
  scope: string
  sid: string
  preferred_username: string
}
export default class JwtAdapter implements TokenManager {
  async verify(token: string): Promise<Either<Failure, Payload>> {
    try {
      const decode = JwtDecode(token) as JwtDecodeResponse
      return right({
        personUuid: decode.preferred_username,
        exp: decode.exp,
        iat: decode.iat,
        iss: decode.iss,
      })
    } catch (error) {
      return left(error as Error)
    }
  }
}
