export type OrderCouponProps = {
  code: string
  percentage: number
}

export class OrderCoupon {
  code: string
  percentage: number
  constructor({ code, percentage }: OrderCouponProps) {
    this.code = code
    this.percentage = percentage
  }

  calculateDiscount(total: number) {
    return (total * this.percentage) / 100
  }
}
