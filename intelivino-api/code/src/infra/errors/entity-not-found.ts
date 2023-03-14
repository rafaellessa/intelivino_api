import { Failure } from '../../domain/errors/failure'

export class EntityNotFound extends Failure {
  constructor(message: string) {
    super(message)
  }
}
