import { faker } from '@faker-js/faker'
import Role from './role'
describe('Role', () => {
  it('Should create role', () => {
    const mockedRole = faker.name.jobTitle()
    const role = new Role(1, mockedRole)
    expect(role.name).toBe(mockedRole)
  })
})
