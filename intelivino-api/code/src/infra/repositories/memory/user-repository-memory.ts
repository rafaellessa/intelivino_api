import { Address, User } from '../../../domain/entities'
import { Failure } from '../../../domain/errors'
import { CreateUserDto, UserRepository } from '../../../domain/repositories'
import { Either, left } from '../../../shared/either'
import { faker } from '@faker-js/faker'
import { right } from '../../../shared/either'
import { EntityNotFound } from '../../errors/entity-not-found'

export class UserRepositoryMemory implements UserRepository {
  users: User[] = []
  static instance: UserRepositoryMemory
  constructor() {
    this.users = []
  }
  static getInstance(): UserRepositoryMemory {
    if (!this.instance) {
      this.instance = new UserRepositoryMemory()
    }
    return this.instance
  }
  async create(data: CreateUserDto): Promise<Either<Failure, User>> {
    const parsedUser = new User({
      id: faker.datatype.uuid(),
      name: data.name,
      email: data.email,
      password: data.password,
      address: new Address({
        city: data.city,
        country: data.country,
        street: data.street,
        district: data.district,
        number: data.number,
        state: data.state,
        zipcode: data.zipCode,
      }),
      gender: data.gender,
      lastLogin: faker.date.recent(),
      appleId: data.appleId,
      birthdate: data.birthdate,
      cpf: data.cpfCnpj,
      facebookId: data.facebookId,
      googleId: data.googleId,
      phone: data.phone,
      photo: data.photo,
      whatsapp: data.whatsapp,
    })

    this.users.push(parsedUser)
    return Promise.resolve(right(parsedUser))
  }
  async get(userId: string): Promise<Either<Failure, User>> {
    const parsedUser = await this.users.find((user) => user.id === userId)
    if (!parsedUser) {
      return left(new EntityNotFound(`User with id ${userId} not found`))
    }
    return Promise.resolve(right(parsedUser))
  }
}
