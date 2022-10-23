import { describe, it, expect } from 'vitest'
import { User } from '.'
import { createUserMock } from '../mocks/user'
describe('entities', () => {
  it('Should create user', () => {
    const mockedUser = createUserMock()
    const user = new User(mockedUser)
    expect(user.name).toBe(mockedUser.name)
  })
})
