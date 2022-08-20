import { faker } from '@faker-js/faker'
import { CampaignProps } from '../entities/campaign'

export const createCampaignMock = (
  startDate: Date,
  expirationDate: Date
): CampaignProps => {
  return {
    accountId: faker.datatype.number(),
    expirationDate,
    percentageDiscount: 10,
    startDate,
  }
}
