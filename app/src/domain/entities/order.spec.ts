import { createLabelMock } from '../mocks/label'
import { createOrderMock } from '../mocks/order'
import Coupon from './coupon'
import Label from './label'
import Order from './order'
import { faker } from '@faker-js/faker'
describe('Order', () => {
  it('Should create a new order', () => {
    const orderMocked = createOrderMock()
    const order = new Order(orderMocked)
    expect(order.cpf.value).toBe(orderMocked.cpf)
  })

  it('Should not create a new order if pass incorrect CPF', () => {
    expect(() => new Order({ cpf: '111111111111111', sequence: 1 })).toThrow(
      'Invalid CPF'
    )
  })

  it('Should create a new order and add items', () => {
    const orderMocked = createOrderMock()
    const order = new Order(orderMocked)
    order.addItem(new Label({ ...createLabelMock() }), 1)
    order.addItem(new Label({ ...createLabelMock() }), 2)
    expect(order.cpf.value).toBe(orderMocked.cpf)
    expect(order.orderItems).toHaveLength(2)
  })

  it('Should not create a new order when item out of stock', () => {
    const orderMocked = createOrderMock()
    const order = new Order(orderMocked)
    const mockedLabel = createLabelMock()
    mockedLabel.stock = false
    expect(() => order.addItem(new Label(mockedLabel), 1)).toThrow(
      'Item out of stock'
    )
  })

  it('Should create a new order and add items and calculate total', () => {
    const orderMocked = createOrderMock()
    const order = new Order(orderMocked)
    const label1 = createLabelMock()
    const label2 = createLabelMock()
    label1.price = 50
    label2.price = 100
    order.addItem(new Label({ ...label1 }), 1)
    order.addItem(new Label({ ...label2 }), 2)
    expect(order.cpf.value).toBe(orderMocked.cpf)
    expect(order.orderItems).toHaveLength(2)
    expect(order.getTotal()).toBe(250)
  })

  it('Should create a new order with coupon and add items and calculate total', () => {
    const order = new Order(createOrderMock())
    const label1 = createLabelMock()
    const label2 = createLabelMock()
    label1.price = 50
    label2.price = 100
    order.addItem(new Label({ ...label1 }), 1)
    order.addItem(new Label({ ...label2 }), 2)
    order.addCoupon(
      new Coupon({
        code: 'VALE20',
        percentage: 20,
        expirationDate: faker.date.future(),
      })
    )
    expect(order.orderItems).toHaveLength(2)
    expect(order.getTotal()).toBe(200)
  })
})
