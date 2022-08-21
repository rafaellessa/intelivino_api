import Person, { PersonProps } from './person'
import Role from './role'
export default class AccountUser extends Person {
  roles: Role[]
  constructor(accountUser: PersonProps) {
    super({ ...accountUser })
    this.roles = []
  }

  addRoles(role: Role) {
    this.roles.push(role)
  }
}
