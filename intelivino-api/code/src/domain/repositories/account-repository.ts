import { Either } from '@/shared/either'
import { Account } from '../entities/account'
import { Failure } from '../errors'

export interface AccountCreateDto {
  name: string
  marketName: string
  cpfCnpj: string
  phone?: string
  whatsapp?: string
  email: string
  logo: string
  personType: 'F' | 'J'
  site?: string
  socialReasons?: string
  facebookUrl?: string
  instagramUrl?: string
  banner?: string
  gender: 'M' | 'F' | 'ND'
  planId?: string
  domain: string
  street: string
  number: string
  district: string
  city: string
  country: string
  state: string
  complement?: string
  zipcode: string
  configuration?: {
    bannerMarketUrl?: string
    headerColor?: string
  }
}

export interface AccountUpdateDto {
  name?: string
  marketName?: string
  cpfCnpj?: string
  phone?: string
  whatsapp?: string
  logo?: string
  personType?: 'F' | 'J'
  site?: string
  socialReasons?: string
  facebookUrl?: string
  instagramUrl?: string
  banner?: string
  gender?: 'M' | 'F' | 'ND'
  planId?: string
  domain?: string
  configuration?: {
    bannerMarketUrl?: string
    headerColor?: string
  }
}
export interface AccountRepository {
  create(data: AccountCreateDto): Promise<Either<Failure, Account>>
  get(accountId: string): Promise<Either<Failure, Account>>
}
