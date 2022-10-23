import Plan from './plan'
export type SubscriptionProps = {
  accountId: string
  plan: Plan
  due: Date
}

export default class Subscription {
  accountId: string
  plan: Plan
  dateAcquisition: Date
  price: number
  isActive: boolean
  due: Date
  constructor({ accountId, plan, due }: SubscriptionProps) {
    this.accountId = accountId
    this.plan = plan
    this.dateAcquisition = new Date()
    this.price = plan.price
    this.due = due
    this.isActive = this.isActiveSubscription(new Date())
  }

  isActiveSubscription(date: Date) {
    return date.getTime() < this.due.getTime()
  }
}
