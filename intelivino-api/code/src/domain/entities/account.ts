import { AccountConfiguration } from './account-configuration'
import { AccountUser } from './account-user'
import { Campaign } from './campaign'
import { Label } from './label'
import { Person, PersonProps } from './person'
import { Subscription } from './subscription'
export type AccountProps = PersonProps & {
  logo?: string | null
  marketName: string
  site?: string | null
  socialReason?: string | null
  facebookUrl?: string | null
  instagramUrl?: string | null
  banner?: string | null
  domain: string
  externalId?: number | null
  isActive: boolean
}
export class Account extends Person {
  logo?: string | null
  subscriptions: Subscription[]
  users?: AccountUser[]
  labels?: Label[]
  accountConfiguration?: AccountConfiguration
  marketName: string
  site?: string | null
  socialReason?: string | null
  facebookUrl?: string | null
  instagramUrl?: string | null
  banner?: string | null
  campaigns: Campaign[]
  domain: string
  externalId?: number | null
  isActive: boolean
  constructor({
    id,
    address,
    cpfCnpj,
    email,
    logo,
    name,
    phone,
    whatsapp,
    marketName,
    personType,
    gender,
    site,
    socialReason,
    facebookUrl,
    instagramUrl,
    domain,
    externalId,
    isActive,
  }: AccountProps) {
    super({
      id,
      address,
      cpfCnpj,
      email,
      name,
      phone,
      whatsapp,
      personType,
      gender,
    })
    this.logo = logo
    this.subscriptions = []
    this.users = []
    this.labels = []
    this.marketName = marketName
    this.site = site
    this.socialReason = socialReason
    this.facebookUrl = facebookUrl
    this.instagramUrl = instagramUrl
    this.domain = domain
    this.campaigns = []
    this.externalId = externalId
    this.isActive = isActive
  }

  addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription)
  }

  addUsers(user: AccountUser) {
    const activeSubscription = this.getSubscriptionActive()
    if (!activeSubscription) throw new Error('None subscription active')

    if (this.getUsersTotal() === activeSubscription.plan.maxUsers)
      throw new Error('Maximum of user')
    this.users?.push(user)
  }

  addLabels(label: Label) {
    const activeSubscription = this.getSubscriptionActive()
    if (!activeSubscription) throw new Error('None subscription active')
    if (this.getLabelsTotal() === activeSubscription.plan.maxLabels)
      throw new Error('Maximum of labels')
    this.labels?.push(label)
  }

  getUsersTotal() {
    return this.users?.length || 0
  }

  getLabelsTotal() {
    return this.labels?.length || 0
  }

  getSubscriptionActive() {
    return this.subscriptions.find((sub) => sub.isActive === true)
  }

  addConfiguration(configuration: AccountConfiguration) {
    this.accountConfiguration = configuration
  }

  addCampaign(campaign: Campaign) {
    this.campaigns?.push(campaign)
  }
}
