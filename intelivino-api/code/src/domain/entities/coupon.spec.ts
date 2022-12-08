import { createCouponMock } from '../mocks/coupon'

import { describe, it, expect } from 'vitest'
import { Coupon } from './coupon'
import { faker } from '@faker-js/faker'

describe('entities', () => {
  it('Should create a valid coupon', () => {
    const today = new Date('2020-01-01T10:00:00')
    const couponMocked = createCouponMock()
    couponMocked.expirationDate = faker.date.future()
    const coupon = new Coupon(couponMocked)
    expect(coupon.isExpired(today)).toBeFalsy()
  })

  it('Should create a expirated coupon', () => {
    const couponMocked = createCouponMock()
    couponMocked.expirationDate = new Date('2020-01-01T10:00:00')
    expect(() => new Coupon(couponMocked)).toThrow(
      'Expiration date must be after today'
    )
  })
})
