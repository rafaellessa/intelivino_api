import Address, { AddressProps } from './address'
import Cpf from './cpf'

export type PersonProps = {
  id: number
  name: string
  email: string
  cpf: string
  phone: string
  whatsapp?: string
  address: AddressProps
}
export default abstract class Person {
  id: number
  name: string
  email: string
  cpf: Cpf
  phone: string
  whatsapp?: string
  address: Address
  constructor({ id, name, email, cpf, phone, whatsapp, address }: PersonProps) {
    this.id = id
    this.name = name
    this.email = email
    this.cpf = new Cpf(cpf)
    this.phone = phone
    this.whatsapp = whatsapp
    this.address = new Address({ ...address })
  }
}
