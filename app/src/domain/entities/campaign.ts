import Label from './label'

export type CampaignProps = {
  accountId: number
  percentageDiscount: number
  startDate: Date
  expirationDate: Date
}

export default class Campaign {
  labels: Label[]
  accountId: number
  percentageDiscount: number
  startDate: Date
  expirationDate: Date
  constructor({
    accountId,
    percentageDiscount,
    startDate,
    expirationDate,
  }: CampaignProps) {
    this.labels = []
    this.accountId = accountId
    this.percentageDiscount = percentageDiscount
    this.startDate = startDate
    this.expirationDate = expirationDate
    if (this.isExpired()) throw new Error('Period campaign is invalid')
  }

  isExpired() {
    return this.startDate.getTime() > this.expirationDate.getTime()
  }

  addLabel(label: Label) {
    this.labels.push(label)
  }

  getLabelsWithDiscount(): Label[] {
    const parsedLabels: Label[] = []
    for (const label of this.labels) {
      parsedLabels.push(new Label({ ...label, price: this.getDiscount(label) }))
    }
    return parsedLabels
  }

  getDiscount(label: Label): number {
    return label.price - (label.price * this.percentageDiscount) / 100
  }
}
