
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

exports.Prisma.AccountDeliveryScalarFieldEnum = makeEnum({
  account_id: 'account_id',
  delivery_id: 'delivery_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  email: 'email',
  cpf_cnpj: 'cpf_cnpj',
  market_name: 'market_name',
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
  complement: 'complement',
  district: 'district',
  city: 'city',
  state: 'state',
  zipcode: 'zipcode',
  plan_id: 'plan_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  domain: 'domain',
  isActive: 'isActive'
});

exports.Prisma.AccountUserScalarFieldEnum = makeEnum({
  id: 'id',
  account_id: 'account_id',
  user_id: 'user_id',
  role_id: 'role_id'
});

exports.Prisma.ActivitiesScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CampaignItemScalarFieldEnum = makeEnum({
  item_id: 'item_id',
  campaign_id: 'campaign_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CampaignScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  description: 'description',
  discount_value: 'discount_value',
  discount_type: 'discount_type',
  start_date: 'start_date',
  expiration_date: 'expiration_date',
  campaign_type_id: 'campaign_type_id',
  account_id: 'account_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CampaignTypeScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  slug: 'slug'
});

exports.Prisma.CityScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  slug: 'slug',
  state_id: 'state_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CountryScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  slug: 'slug',
  value: 'value',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CouponScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  external_id: 'external_id',
  account_id: 'account_id',
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

exports.Prisma.CustomerAddressScalarFieldEnum = makeEnum({
  id: 'id',
  costumer_id: 'costumer_id',
  address_name: 'address_name',
  address_zip_code: 'address_zip_code',
  address_state: 'address_state',
  address_city: 'address_city',
  address_district: 'address_district',
  address_street: 'address_street',
  address_number: 'address_number',
  address_complement: 'address_complement',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  account_id: 'account_id',
  name: 'name',
  email: 'email',
  mobile_phone: 'mobile_phone',
  phone: 'phone',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  origin_registration: 'origin_registration',
  cpf_cnpj: 'cpf_cnpj',
  note: 'note',
  converted: 'converted',
  user_id: 'user_id'
});

exports.Prisma.DeliveryScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  slug: 'slug',
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
  external_id: 'external_id',
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
  external_id: 'external_id',
  name: 'name',
  created_at: 'created_at',
  updatedAt: 'updatedAt'
});

exports.Prisma.InvoiceScalarFieldEnum = makeEnum({
  id: 'id',
  order_id: 'order_id',
  account_id: 'account_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ItemGrapeScalarFieldEnum = makeEnum({
  item_id: 'item_id',
  grape_id: 'grape_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ItemScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  description: 'description',
  type_id: 'type_id',
  country_id: 'country_id',
  region_id: 'region_id',
  winery_id: 'winery_id',
  harvest: 'harvest',
  no_harvest: 'no_harvest',
  wine_type_id: 'wine_type_id',
  alcohol_percentage: 'alcohol_percentage',
  price: 'price',
  promotional_price: 'promotional_price',
  photo: 'photo',
  account_id: 'account_id',
  is_active: 'is_active',
  control_stock: 'control_stock',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ItemTagScalarFieldEnum = makeEnum({
  item_id: 'item_id',
  tag_id: 'tag_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ItemTypeScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  description: 'description',
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

exports.Prisma.OrderItemScalarFieldEnum = makeEnum({
  order_id: 'order_id',
  item_id: 'item_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  price: 'price',
  quantity: 'quantity'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  code: 'code',
  account_id: 'account_id',
  coupon_id: 'coupon_id',
  customer_id: 'customer_id',
  customer_address_id: 'customer_address_id',
  is_read: 'is_read',
  order_status_id: 'order_status_id',
  campaign_id: 'campaign_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  userId: 'userId',
  total: 'total',
  discount: 'discount',
  discoun_type: 'discoun_type'
});

exports.Prisma.OrderStatusScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
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
  external_id: 'external_id',
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
  external_id: 'external_id',
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
  external_id: 'external_id',
  name: 'name',
  slug: 'slug',
  country_id: 'country_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.StockHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  item_id: 'item_id',
  reason: 'reason',
  operation: 'operation',
  quantity: 'quantity',
  date: 'date',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.StockItemScalarFieldEnum = makeEnum({
  item_id: 'item_id',
  account_id: 'account_id',
  quantity: 'quantity',
  min_quantity: 'min_quantity',
  max_quantity: 'max_quantity'
});

exports.Prisma.SubRegionScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
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

exports.Prisma.TagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  external_id: 'external_id',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserAddressScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  street: 'street',
  number: 'number',
  district: 'district',
  state: 'state',
  complement: 'complement',
  additional_information: 'additional_information',
  city: 'city',
  zip_code: 'zip_code',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  whatsapp: 'whatsapp',
  phone: 'phone',
  cpf_cnpj: 'cpf_cnpj',
  photo: 'photo',
  gender: 'gender',
  birthdate: 'birthdate',
  google_id: 'google_id',
  apple_id: 'apple_id',
  facebook_id: 'facebook_id',
  rd_station_id: 'rd_station_id',
  rd_station_sync: 'rd_station_sync',
  created_at: 'created_at',
  updated_at: 'updated_at',
  lastLogin: 'lastLogin'
});

exports.Prisma.WineTypeScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.WineryScalarFieldEnum = makeEnum({
  id: 'id',
  external_id: 'external_id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
});
exports.CampaignTypeDiscount = makeEnum({
  PERCENTAGE: 'PERCENTAGE',
  VALUE: 'VALUE'
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

exports.CustomerOriginRegistration = makeEnum({
  SINGLE_REGISTRATION: 'SINGLE_REGISTRATION',
  CAMPAIGN_LEAD: 'CAMPAIGN_LEAD',
  ORDER: 'ORDER'
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

exports.OrderDiscountType = makeEnum({
  PERCENTAGE: 'PERCENTAGE',
  VALUE: 'VALUE'
});

exports.PersonType = makeEnum({
  F: 'F',
  J: 'J'
});

exports.PlatformType = makeEnum({
  android: 'android',
  ios: 'ios'
});

exports.StockHistoryType = makeEnum({
  INPUT: 'INPUT',
  OUTPUT: 'OUTPUT'
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
  Delivery: 'Delivery',
  AccountDelivery: 'AccountDelivery',
  User: 'User',
  UserAddress: 'UserAddress',
  AccountUser: 'AccountUser',
  Permision: 'Permision',
  RolePermission: 'RolePermission',
  Role: 'Role',
  Campaign: 'Campaign',
  CampaignType: 'CampaignType',
  Coupon: 'Coupon',
  Item: 'Item',
  ItemType: 'ItemType',
  Tag: 'Tag',
  ItemTag: 'ItemTag',
  CampaignItem: 'CampaignItem',
  ItemGrape: 'ItemGrape',
  Grape: 'Grape',
  Country: 'Country',
  State: 'State',
  City: 'City',
  Region: 'Region',
  SubRegion: 'SubRegion',
  WineType: 'WineType',
  Order: 'Order',
  OrderStatus: 'OrderStatus',
  Customer: 'Customer',
  CustomerAddress: 'CustomerAddress',
  OrderItem: 'OrderItem',
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
  StockItem: 'StockItem',
  StockHistory: 'StockHistory',
  Winery: 'Winery'
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
