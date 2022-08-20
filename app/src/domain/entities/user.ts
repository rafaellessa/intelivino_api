import Person, { PersonProps } from './person'
export default class User extends Person {
  constructor(user: PersonProps) {
    super({ ...user })
  }
}
