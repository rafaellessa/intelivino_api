import { AddressProps, Address } from './address'
import { Cpf } from './cpf'
import { Email } from './email'

export type PersonProps = {
  id: string
  name: string
  email: string
  cpf?: string
  phone?: string
  whatsapp?: string
  address: AddressProps
}
export abstract class Person {
  id: string
  name: string
  email: Email
  cpf?: Cpf | null
  phone?: string
  whatsapp?: string
  address: Address
  constructor({ id, name, email, cpf, phone, whatsapp, address }: PersonProps) {
    this.id = id
    this.name = name
    this.email = new Email(email)
    if (cpf) {
      this.cpf = new Cpf(cpf)
    }
    this.phone = phone
    this.whatsapp = whatsapp
    this.address = new Address({ ...address })
  }
}
