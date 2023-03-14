import { Failure } from '@/domain/errors'

export default class DatabaseError extends Failure {
  constructor(message: string) {
    super(message)
  }
}
