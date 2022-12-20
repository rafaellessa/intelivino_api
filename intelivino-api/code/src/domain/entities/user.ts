import { PersonProps, Person } from './person'

export type UserProps = PersonProps & {
  password: string
  photo?: string
  gender: 'F' | 'M' | 'ND'
  birthdate?: string
  googleId?: string
  appleId?: string
  facebookId?: string
  lastLogin: Date
  rdStationId?: string
  rdStationSync?: string
}

export class User extends Person {
  password: string
  photo?: string
  gender: 'F' | 'M' | 'ND'
  birthdate?: string
  googleId?: string
  appleId?: string
  facebookId?: string
  lastLogin: Date
  rdStationId?: string
  rdStationSync?: string
  constructor({
    id,
    name,
    email,
    password,
    whatsapp,
    address,
    photo,
    cpfCnpj,
    phone,
    gender,
    birthdate,
    googleId,
    appleId,
    facebookId,
    personType,
    lastLogin,
    rdStationId,
    rdStationSync,
  }: UserProps) {
    super({
      id,
      address,
      cpfCnpj,
      email,
      gender,
      name,
      phone,
      whatsapp,
      personType,
    })
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
    this.rdStationId = rdStationId
    this.rdStationSync = rdStationSync
  }
}
