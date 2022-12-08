
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
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
  activities_id: 'activities_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.AccountConfigurationScalarFieldEnum = makeEnum({
  id: 'id',
  account_id: 'account_id',
  banner_market_url: 'banner_market_url',
  header_color: 'header_color'
});

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  cpf_cnpj: 'cpf_cnpj',
  market_name: 'market_name',
  email: 'email',
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
  street: 'street',
  number: 'number',
  district: 'district',
  country: 'country',
  state: 'state',
  complement: 'complement',
  zipcode: 'zipcode',
  plan_id: 'plan_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  domain: 'domain',
  isActive: 'isActive'
});

exports.Prisma.AccountUserScalarFieldEnum = makeEnum({
  account_id: 'account_id',
  user_id: 'user_id',
  role_id: 'role_id'
});

exports.Prisma.ActivitiesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at'
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
  updated_at: 'updated_at'
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
  updated_at: 'updated_at'
});

exports.Prisma.CountryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  value: 'value',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CouponScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  dicount_type: 'dicount_type',
  discount_value: 'discount_value',
  couponUse_type: 'couponUse_type',
  inital_date: 'inital_date',
  expiration_date: 'expiration_date',
  min_value: 'min_value',
  max_value: 'max_value',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.DeviceNotificationScalarFieldEnum = makeEnum({
  device_id: 'device_id',
  notification_id: 'notification_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.DeviceScalarFieldEnum = makeEnum({
  id: 'id',
  device_physical_id: 'device_physical_id',
  platform: 'platform',
  version: 'version',
  token_notification: 'token_notification',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.DeviceUserScalarFieldEnum = makeEnum({
  device_id: 'device_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
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
  updated_at: 'updated_at'
});

exports.Prisma.GrapeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updatedAt: 'updatedAt'
});

exports.Prisma.InvoiceScalarFieldEnum = makeEnum({
  id: 'id',
  order_id: 'order_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.LabelCampaignScalarFieldEnum = makeEnum({
  label_id: 'label_id',
  campaign_id: 'campaign_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.LabelGrapeScalarFieldEnum = makeEnum({
  label_id: 'label_id',
  grape_id: 'grape_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
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
  updated_at: 'updated_at'
});

exports.Prisma.LabelTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.NotificationsScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  message: 'message',
  created_at: 'created_at',
  updated_at: 'updated_at',
  type: 'type'
});

exports.Prisma.OrderLabelScalarFieldEnum = makeEnum({
  order_id: 'order_id',
  label_id: 'label_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  quantity: 'quantity'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  account_id: 'account_id',
  total: 'total',
  coupon_id: 'coupon_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.PaymentCycleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.PermisionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
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
  updated_at: 'updated_at'
});

exports.Prisma.PushNotificationScalarFieldEnum = makeEnum({
  id: 'id',
  notification_id: 'notification_id',
  title: 'title',
  subject: 'subject',
  send: 'send',
  device_id: 'device_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.RegionScalarFieldEnum = makeEnum({
  id: 'id',
  state_id: 'state_id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.RolePermissionScalarFieldEnum = makeEnum({
  role_id: 'role_id',
  permission_id: 'permission_id'
});

exports.Prisma.RoleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
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
  updated_at: 'updated_at'
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
  updated_at: 'updated_at'
});

exports.Prisma.StockHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  label_id: 'label_id',
  reason: 'reason',
  quantity: 'quantity',
  date: 'date',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.StockLabelScalarFieldEnum = makeEnum({
  label_id: 'label_id',
  account_id: 'account_id',
  min_quantity: 'min_quantity',
  max_quantity: 'max_quantity'
});

exports.Prisma.SubRegionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  region_id: 'region_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.SubscriptionScalarFieldEnum = makeEnum({
  id: 'id',
  plan_id: 'plan_id',
  account_id: 'account_id',
  due: 'due',
  price: 'price',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  whatsapp: 'whatsapp',
  phone: 'phone',
  cpf_cnpj: 'cpf_cnpj',
  street: 'street',
  number: 'number',
  district: 'district',
  country: 'country',
  state: 'state',
  complement: 'complement',
  city: 'city',
  zipcode: 'zipcode',
  photo: 'photo',
  gender: 'gender',
  birthdate: 'birthdate',
  google_id: 'google_id',
  apple_id: 'apple_id',
  facebook_id: 'facebook_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  lastLogin: 'lastLogin'
});

exports.Prisma.WineTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at'
});
exports.CouponDiscountType = makeEnum({
  PERCENTAGE: 'PERCENTAGE',
  VALUE: 'VALUE'
});

exports.CouponUseType = makeEnum({
  UNLIMITED: 'UNLIMITED',
  UNIQUE_BY_USER: 'UNIQUE_BY_USER',
  UNIQUE: 'UNIQUE'
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
  AccountConfiguration: 'AccountConfiguration',
  AccountActivities: 'AccountActivities',
  Activities: 'Activities',
  User: 'User',
  AccountUser: 'AccountUser',
  Permision: 'Permision',
  RolePermission: 'RolePermission',
  Role: 'Role',
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
  OrderLabel: 'OrderLabel',
  Invoice: 'Invoice',
  Device: 'Device',
  DeviceUser: 'DeviceUser',
  Notifications: 'Notifications',
  EmailNotification: 'EmailNotification',
  SmsNotification: 'SmsNotification',
  PushNotification: 'PushNotification',
  DeviceNotification: 'DeviceNotification',
  Plan: 'Plan',
  PaymentCycle: 'PaymentCycle',
  Subscription: 'Subscription',
  StockLabel: 'StockLabel',
  StockHistory: 'StockHistory'
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
