import { createCouponMock } from '../mocks/coupon'
import Coupon from './coupon'

describe('entities', () => {
  it('Should create a valid coupon', () => {
    const today = new Date('2020-01-01T10:00:00')
    const couponMocked = createCouponMock()
    couponMocked.expirationDate = new Date('2020-02-01T10:00:00')
    const coupon = new Coupon(couponMocked)
    expect(coupon.isExpired(today)).toBeFalsy()
  })

  it('Should create a expirated coupon', () => {
    const today = new Date('2020-01-20T10:00:00')
    const couponMocked = createCouponMock()
    couponMocked.expirationDate = new Date('2020-01-01T10:00:00')
    const coupon = new Coupon(couponMocked)
    expect(coupon.isExpired(today)).toBeTruthy()
  })
})
