import { CouponProps } from '../entities/coupon'
import { faker } from '@faker-js/faker'

export const createCouponMock = (): CouponProps => {
  return {
    code: faker.datatype.string(),
    expirationDate: faker.date.future(),
    dicountType: 'percentage',
    discountValue: faker.datatype.number(),
    couponUseType: 'unlimited',
  }
}
