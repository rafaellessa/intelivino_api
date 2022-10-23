import { OrderCode } from './order-code'
import { describe, it, expect } from 'vitest'

describe('OrderCode', () => {
  it('Should...', () => {
    const orderCode = new OrderCode(new Date('2021-03-01T10:00:00'), 1)
    expect(orderCode.value).toBe('202100000001')
  })
})
