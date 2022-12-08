export type CouponProps = {
  code: string
  dicountType: 'percentage' | 'value'
  discountValue: number
  couponUseType: 'unlimited' | 'unique_by_user' | 'unique'
  initialDate?: Date
  expirationDate?: Date | null
  minValue?: number | null
  maxValue?: number | null
}

export class Coupon {
  code: string
  dicountType: 'percentage' | 'value'
  discountValue: number
  couponUseType: 'unlimited' | 'unique_by_user' | 'unique'
  initialDate?: Date
  expirationDate?: Date | null
  minValue?: number | null
  maxValue?: number | null
  constructor({
    code,
    dicountType,
    discountValue,
    couponUseType,
    initialDate,
    expirationDate,
    minValue,
    maxValue,
  }: CouponProps) {
    if (discountValue === 0) {
      throw new Error('Discount value must be greater than 0')
    }
    if (minValue && minValue <= 0) {
      throw new Error('Minimum value must be greater than 0')
    }
    if (maxValue && maxValue <= 0) {
      throw new Error('Maximum value must be greater than 0')
    }
    if (expirationDate) {
      const today = new Date().getTime()
      const parsedExipirationDate = new Date(expirationDate).getTime()
      if (parsedExipirationDate < today) {
        throw new Error('Expiration date must be after today')
      }
      this.expirationDate = new Date(parsedExipirationDate)
    }
    if (initialDate) {
      const today = new Date().getTime()
      const parsedInitialDate = new Date(initialDate).getTime()
      if (parsedInitialDate < today) {
        throw new Error('Initial date must be after today')
      }
      if (
        this.expirationDate &&
        parsedInitialDate > this.expirationDate.getTime()
      ) {
        throw new Error('Initial date must be before expiration date')
      }
      this.initialDate = new Date(parsedInitialDate)
    }
    this.code = code
    this.dicountType = dicountType
    this.discountValue = discountValue
    this.couponUseType = couponUseType
    this.minValue = minValue
    this.maxValue = maxValue
  }

  isExpired(today: Date) {
    if (this.expirationDate) {
      return today.getTime() > this.expirationDate.getTime()
    }
    return false
  }
}
