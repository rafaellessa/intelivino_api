export type AccountConfigurationProps = {
  id: string
  accountId: string
  bannerMarketUrl: string
  headerColor: string
}

export class AccountConfiguration {
  id: string
  accountId: string
  bannerMarketUrl: string
  headerColor: string
  constructor({
    id,
    accountId,
    bannerMarketUrl,
    headerColor,
  }: AccountConfigurationProps) {
    this.id = id
    this.accountId = accountId
    this.bannerMarketUrl = bannerMarketUrl
    this.headerColor = headerColor
  }
}
