export abstract class Failure extends Error {
  constructor(message: string) {
    super(message)
  }
}
