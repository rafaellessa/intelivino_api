export type OrderCouponProps = {
  code: string
  discountValue: number
  discountType: 'percentage' | 'value'
}

export class OrderCoupon {
  code: string
  discountValue: number
  discountType: 'percentage' | 'value'
  constructor({ code, discountType, discountValue }: OrderCouponProps) {
    this.code = code
    this.discountType = discountType
    this.discountValue = discountValue
  }

  calculateDiscount(total: number) {
    if (this.discountType === 'percentage') {
      return (total * this.discountValue) / 100
    }
    return this.discountValue
  }
}
