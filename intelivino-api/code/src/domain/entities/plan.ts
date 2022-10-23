export type PlanProps = {
  name: string
  price: number
  maxUsers: number
  maxLabels: number
}

export class Plan {
  name: string
  price: number
  maxUsers: number
  maxLabels: number
  constructor({ name, price, maxUsers, maxLabels }: PlanProps) {
    this.name = name
    this.price = price
    this.maxUsers = maxUsers
    this.maxLabels = maxLabels
  }
}
