import { Either } from '@/shared/either'
import { User } from '../entities/user'
import { Failure } from '../errors'

export type CreateUserDto = {
  name: string
  email: string
  password: string
  whatsapp?: string
  phone?: string
  cpfCnpj?: string
  street: string
  number: string
  district: string
  city: string
  country: string
  state: string
  complement?: string
  zipCode: string
  photo?: string
  gender: 'F' | 'M' | 'ND'
  birthdate?: string
  googleId?: string
  appleId?: string
  facebookId?: string
  lastLogin: string
  device?: {
    devicePhysicalId: string
    platform: 'android' | 'ios'
    version: string
    tokenNotification?: string
  }
}

export type UpdateUserDto = {
  email?: string
  password?: string
  whatsapp?: string
  cpfCnpj?: string
  street?: string
  number?: string
  district?: string
  country?: string
  state?: string
  complement?: string
  zipCode?: string
  photo?: string
  gender?: 'F' | 'M' | 'ND'
  birthdate?: string
  googleId?: string
  appleId?: string
  facebookId?: string
  lastLogin?: string
}
export interface UserRepository {
  create(data: CreateUserDto): Promise<Either<Failure, User>>
  get(userId: string): Promise<Either<Failure, User>>
}
