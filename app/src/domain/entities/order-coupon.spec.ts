import Coupon from './coupon'
import OrderCoupon from './order-coupon'

describe('OrderCoupon', () => {
  it('Should create one coupon', () => {
    const coupon = new Coupon({
      code: 'VALE20',
      percentage: 20,
      expirationDate: new Date(),
    })
    const orderCoupon = new OrderCoupon({
      code: coupon.code,
      percentage: coupon.percentage,
    })
    expect(orderCoupon.calculateDiscount(1000)).toBe(200)
  })
})
