export type CouponProps = {
  code: string
  percentage: number
  expirationDate: Date
}

export default class Coupon {
  code: string
  percentage: number
  expirationDate: Date
  constructor({ code, percentage, expirationDate }: CouponProps) {
    this.code = code
    this.percentage = percentage
    this.expirationDate = expirationDate
  }

  isExpired(today: Date) {
    return today.getTime() > this.expirationDate.getTime()
  }
}
