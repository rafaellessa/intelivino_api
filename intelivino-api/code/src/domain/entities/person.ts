import { AddressProps, Address } from './address'
import { Cpf } from './cpf'
import { Email } from './email'

export type PersonProps = {
  id: string
  name: string
  email: string
  cpfCnpj?: string | null
  phone?: string | null
  whatsapp?: string | null
  address: AddressProps
  personType: 'F' | 'J'
  gender: 'F' | 'M' | 'ND'
}
export abstract class Person {
  id: string
  name: string
  email: Email
  cpfCnpj?: Cpf | null
  phone?: string | null
  whatsapp?: string | null
  address: Address
  personType: 'F' | 'J'
  gender: 'F' | 'M' | 'ND'
  constructor({
    id,
    name,
    email,
    cpfCnpj,
    phone,
    whatsapp,
    address,
    personType,
    gender,
  }: PersonProps) {
    this.id = id
    this.name = name
    this.email = new Email(email)
    if (cpfCnpj && personType === 'F') {
      this.cpfCnpj = new Cpf(cpfCnpj)
    } else {
      this.cpfCnpj = null
    }
    this.phone = phone
    this.whatsapp = whatsapp
    this.address = new Address({ ...address })
    this.personType = personType
    this.gender = gender
  }
}
