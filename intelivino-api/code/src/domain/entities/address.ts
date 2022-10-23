export type AddressProps = {
  street: string
  number: string
  district: string
  country: string
  city: string
  state: string
  zipcode: string
  additionalInformation?: string | null
}
export class Address {
  street: string
  number: string
  district: string
  country: string
  city: string
  state: string
  zipcode: string
  additionalInformation?: string | null
  constructor({
    street,
    number,
    district,
    country,
    city,
    state,
    zipcode,
    additionalInformation,
  }: AddressProps) {
    this.street = street
    this.additionalInformation = additionalInformation
    this.city = city
    this.number = number
    this.district = district
    this.country = country
    this.state = state
    this.zipcode = zipcode
  }
}
