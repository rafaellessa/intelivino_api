import Person, { PersonProps } from './person'

export type UserProps = PersonProps & {
  password: string
  photo?: string
  gender: 'F' | 'M' | 'ND'
  birthdate: string
  googleId: string
  appleId: string
  facebookId: string
  lastLogin: Date
}

export class User extends Person {
  password: string
  photo?: string
  gender: 'F' | 'M' | 'ND'
  birthdate: string
  googleId: string
  appleId: string
  facebookId: string
  lastLogin: Date
  constructor({
    id,
    name,
    email,
    password,
    whatsapp,
    address,
    photo,
    cpf,
    phone,
    gender,
    birthdate,
    googleId,
    appleId,
    facebookId,
    lastLogin,
  }: UserProps) {
    super({ id, address, cpf, email, name, phone, whatsapp })
    this.name = name
    this.password = password
    this.whatsapp = whatsapp
    this.address = address
    this.photo = photo
    this.gender = gender
    this.birthdate = birthdate
    this.googleId = googleId
    this.appleId = appleId
    this.facebookId = facebookId
    this.lastLogin = lastLogin
  }
}
