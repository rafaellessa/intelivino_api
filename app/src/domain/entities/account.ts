import Person, { PersonProps } from './person'
import Subscription from './subscription'
import AccountUser from './account-user'
import Label from './label'
export type AccountProps = PersonProps & {
  logo: string
}
export default class Account extends Person {
  logo: string
  subscriptions: Subscription[]
  users?: AccountUser[]
  labels?: Label[]
  constructor({
    id,
    address,
    cpf,
    email,
    logo,
    name,
    phone,
    whatsapp,
  }: AccountProps) {
    super({ id, address, cpf, email, name, phone, whatsapp })
    this.logo = logo
    this.subscriptions = []
    this.users = []
    this.labels = []
  }

  addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription)
  }

  addUsers(user: AccountUser) {
    const activeSubscription = this.getSubscriptionActive()
    if (!activeSubscription) throw new Error('None subscription active')

    if (this.getUsersTotal() === activeSubscription.plan.maxUsers)
      throw new Error('Maximum of user')
    this.users?.push(user)
  }

  addLabels(label: Label) {
    const activeSubscription = this.getSubscriptionActive()
    if (!activeSubscription) throw new Error('None subscription active')
    if (this.getLabelsTotal() === activeSubscription.plan.maxLabels)
      throw new Error('Maximum of labels')
    this.labels?.push(label)
  }

  getUsersTotal() {
    return this.users?.length || 0
  }

  getLabelsTotal() {
    return this.labels?.length || 0
  }

  getSubscriptionActive() {
    return this.subscriptions.find((sub) => sub.isActive === true)
  }
}
