import { describe, it, expect } from 'vitest'
import { Coupon } from './coupon'
import { OrderCoupon } from './order-coupon'
import { faker } from '@faker-js/faker'

describe('OrderCoupon', () => {
  it('Should create one coupon with percentage', () => {
    const coupon = new Coupon({
      code: 'VALE20',
      dicountType: 'percentage',
      discountValue: 20,
      couponUseType: 'unlimited',
      expirationDate: faker.date.future(),
    })
    const orderCoupon = new OrderCoupon({
      code: coupon.code,
      discountValue: coupon.discountValue,
      discountType: coupon.dicountType,
    })
    expect(orderCoupon.calculateDiscount(1000)).toBe(200)
  })

  it('Should create one coupon with sum value difference', () => {
    const coupon = new Coupon({
      code: 'VALE20',
      dicountType: 'value',
      discountValue: 20,
      couponUseType: 'unlimited',
      expirationDate: faker.date.future(),
    })
    const orderCoupon = new OrderCoupon({
      code: coupon.code,
      discountValue: coupon.discountValue,
      discountType: coupon.dicountType,
    })
    expect(orderCoupon.calculateDiscount(1000)).toBe(20)
  })
})
