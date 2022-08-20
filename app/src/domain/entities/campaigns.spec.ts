import { createCampaignMock } from '../mocks/campaign'
import Campaign from './campaign'
import Label from './label'
import { createLabelMock } from '../mocks/label'

describe('Campaign', () => {
  it('Should create one campaign', () => {
    const startDate = new Date('2020-01-01T10:00:00')
    const expirationDate = new Date('2020-02-01T10:00:00')
    const campaignMocked = createCampaignMock(startDate, expirationDate)
    const campaign = new Campaign(campaignMocked)
    expect(campaign.isExpired()).toBeFalsy()
  })
  it('Should create one campaign expirated', () => {
    const startDate = new Date('2020-02-01T10:00:00')
    const expirationDate = new Date('2020-01-01T10:00:00')
    const campaignMocked = createCampaignMock(startDate, expirationDate)
    expect(() => new Campaign(campaignMocked)).toThrow(
      'Period campaign is invalid'
    )
  })
  it('Should create one campaign and add labels', () => {
    const startDate = new Date('2020-01-01T10:00:00')
    const expirationDate = new Date('2020-02-01T10:00:00')
    const campaignMocked = createCampaignMock(startDate, expirationDate)
    const campaign = new Campaign(campaignMocked)
    campaign.addLabel(new Label(createLabelMock()))
    expect(campaign.isExpired()).toBeFalsy()
    expect(campaign.labels).toHaveLength(1)
  })

  it('Should create one campaign and add labels and calculate discount', () => {
    const startDate = new Date('2020-01-01T10:00:00')
    const expirationDate = new Date('2020-02-01T10:00:00')
    const campaignMocked = createCampaignMock(startDate, expirationDate)
    const campaign = new Campaign(campaignMocked)
    const labelMocked1 = createLabelMock()
    const labelMocked2 = createLabelMock()
    labelMocked1.price = 20
    labelMocked2.price = 40
    campaign.addLabel(new Label(labelMocked1))
    campaign.addLabel(new Label(labelMocked2))
    const labelsWithDiscount = campaign.getLabelsWithDiscount()
    expect(labelsWithDiscount[0].price).toBe(18)
    expect(labelsWithDiscount[1].price).toBe(36)
    expect(campaign.isExpired()).toBeFalsy()
    expect(campaign.labels).toHaveLength(2)
  })
})
