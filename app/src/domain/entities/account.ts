import Person, { PersonProps } from './person'
export type AccountProps = PersonProps & {
  logo: string
}
export default class Account extends Person {
  logo: string
  constructor({
    id,
    address,
    cpf,
    email,
    logo,
    name,
    phone,
    whatsapp,
  }: AccountProps) {
    super({ id, address, cpf, email, name, phone, whatsapp })
    this.logo = logo
  }
}
