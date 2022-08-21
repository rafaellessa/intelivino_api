import Person, { PersonProps } from './person'
export default class AccountUser extends Person {
  constructor(accountUser: PersonProps) {
    super({ ...accountUser })
  }
}
