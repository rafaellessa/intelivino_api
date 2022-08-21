import { CouponProps } from '../entities/coupon'
import { faker } from '@faker-js/faker'

export const createCouponMock = (): CouponProps => {
  return {
    code: faker.datatype.string(),
    expirationDate: new Date(),
    percentage: faker.datatype.number(),
  }
}
