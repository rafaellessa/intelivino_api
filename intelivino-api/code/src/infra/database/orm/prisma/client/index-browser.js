
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.2.1
 * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
 */
Prisma.prismaVersion = {
  client: "4.2.1",
  engine: "2920a97877e12e055c1333079b8d19cee7f33826"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountActivitiesScalarFieldEnum = makeEnum({
  account_id: 'account_id',
  activitie_id: 'activitie_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  cpf_cnpj: 'cpf_cnpj',
  phone: 'phone',
  whatsapp: 'whatsapp',
  logo: 'logo',
  person_type: 'person_type',
  site: 'site',
  social_reason: 'social_reason',
  facebook_url: 'facebook_url',
  instagram_url: 'instagram_url',
  banner: 'banner',
  gender: 'gender',
  plan_id: 'plan_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.AccountUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  street: 'street',
  number: 'number',
  district: 'district',
  country: 'country',
  state: 'state',
  additional_information: 'additional_information',
  zipcode: 'zipcode',
  photo: 'photo',
  gender: 'gender',
  birthdate: 'birthdate',
  created_at: 'created_at',
  updated_at: 'updated_at',
  lastLogin: 'lastLogin',
  uuid: 'uuid'
});

exports.Prisma.ActivitiesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.CampaignScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  percentage_discount: 'percentage_discount',
  start_date: 'start_date',
  expiration_date: 'expiration_date',
  type_id: 'type_id',
  account_id: 'account_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.CampaignTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug'
});

exports.Prisma.CityScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  state_id: 'state_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.CountryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.CouponScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  percentage: 'percentage',
  expiration_date: 'expiration_date',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.DeviceNotificationScalarFieldEnum = makeEnum({
  device_id: 'device_id',
  notification_id: 'notification_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.DevicePeopleScalarFieldEnum = makeEnum({
  device_id: 'device_id',
  people_id: 'people_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.DeviceScalarFieldEnum = makeEnum({
  id: 'id',
  device_physical_id: 'device_physical_id',
  platform: 'platform',
  version: 'version',
  token_notification: 'token_notification',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.DeviceUserScalarFieldEnum = makeEnum({
  device_id: 'device_id',
  user_account_id: 'user_account_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.EmailNotificationScalarFieldEnum = makeEnum({
  id: 'id',
  notification_id: 'notification_id',
  to: 'to',
  from: 'from',
  from_name: 'from_name',
  cc: 'cc',
  bcc: 'bcc',
  type: 'type',
  subject: 'subject',
  body: 'body',
  url_callback: 'url_callback',
  opened: 'opened',
  clicked: 'clicked',
  failed: 'failed',
  error_description: 'error_description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.GrapeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updatedAt: 'updatedAt',
  uuid: 'uuid'
});

exports.Prisma.InvoiceScalarFieldEnum = makeEnum({
  id: 'id',
  order_id: 'order_id',
  people_id: 'people_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.LabelCampaignScalarFieldEnum = makeEnum({
  label_id: 'label_id',
  campaign_id: 'campaign_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.LabelGrapeScalarFieldEnum = makeEnum({
  label_id: 'label_id',
  grape_id: 'grape_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.LabelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  type_id: 'type_id',
  country_id: 'country_id',
  region_id: 'region_id',
  harvest: 'harvest',
  wine_type_id: 'wine_type_id',
  alcohol_percentage: 'alcohol_percentage',
  price: 'price',
  promotional_price: 'promotional_price',
  is_active: 'is_active',
  stock: 'stock',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.LabelTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.NotificationsScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  message: 'message',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid',
  type: 'type'
});

exports.Prisma.OrderLabelScalarFieldEnum = makeEnum({
  order_id: 'order_id',
  label_id: 'label_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid',
  quantity: 'quantity'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  account_id: 'account_id',
  people_id: 'people_id',
  total: 'total',
  coupon_id: 'coupon_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.PaymentCycleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.PeopleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  whatsapp: 'whatsapp',
  cpf_cnpj: 'cpf_cnpj',
  street: 'street',
  number: 'number',
  district: 'district',
  country: 'country',
  state: 'state',
  additional_information: 'additional_information',
  zipcode: 'zipcode',
  photo: 'photo',
  gender: 'gender',
  birthdate: 'birthdate',
  created_at: 'created_at',
  updated_at: 'updated_at',
  lastLogin: 'lastLogin',
  uuid: 'uuid'
});

exports.Prisma.PlanScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  slug: 'slug',
  price: 'price',
  max_users: 'max_users',
  max_labels: 'max_labels',
  payment_cycle_id: 'payment_cycle_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.PushNotificationScalarFieldEnum = makeEnum({
  id: 'id',
  notification_id: 'notification_id',
  title: 'title',
  subject: 'subject',
  send: 'send',
  device_id: 'device_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.RegionScalarFieldEnum = makeEnum({
  id: 'id',
  state_id: 'state_id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.SmsNotificationScalarFieldEnum = makeEnum({
  id: 'id',
  notification_id: 'notification_id',
  device_id: 'device_id',
  to: 'to',
  subject: 'subject',
  body: 'body',
  send: 'send',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StateScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  country_id: 'country_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.SubRegionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  region_id: 'region_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.SubscriptionScalarFieldEnum = makeEnum({
  id: 'id',
  plan_id: 'plan_id',
  account_id: 'account_id',
  due: 'due',
  price: 'price',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.WineTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid'
});
exports.EmailTypeNotification = makeEnum({
  html: 'html',
  text: 'text'
});

exports.GenderType = makeEnum({
  F: 'F',
  M: 'M',
  ND: 'ND'
});

exports.PersonType = makeEnum({
  F: 'F',
  J: 'J'
});

exports.PlatformType = makeEnum({
  android: 'android',
  ios: 'ios'
});

exports.TypeNotification = makeEnum({
  email: 'email',
  sms: 'sms',
  push: 'push'
});

exports.Prisma.ModelName = makeEnum({
  Account: 'Account',
  AccountActivities: 'AccountActivities',
  Activities: 'Activities',
  AccountUser: 'AccountUser',
  Campaign: 'Campaign',
  CampaignType: 'CampaignType',
  Coupon: 'Coupon',
  Label: 'Label',
  LabelCampaign: 'LabelCampaign',
  LabelGrape: 'LabelGrape',
  Grape: 'Grape',
  LabelType: 'LabelType',
  Country: 'Country',
  State: 'State',
  City: 'City',
  Region: 'Region',
  SubRegion: 'SubRegion',
  WineType: 'WineType',
  Order: 'Order',
  People: 'People',
  OrderLabel: 'OrderLabel',
  Invoice: 'Invoice',
  Device: 'Device',
  DevicePeople: 'DevicePeople',
  DeviceUser: 'DeviceUser',
  Notifications: 'Notifications',
  EmailNotification: 'EmailNotification',
  SmsNotification: 'SmsNotification',
  PushNotification: 'PushNotification',
  DeviceNotification: 'DeviceNotification',
  Plan: 'Plan',
  PaymentCycle: 'PaymentCycle',
  Subscription: 'Subscription'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
