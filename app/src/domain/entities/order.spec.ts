import Order from './order'
import CpfGenerator from '../utils/cpf-generator'
import Label from './label'
import { createLabelMock } from '../mocks/label'
import Coupon from './coupon'
describe('Order', () => {
  it('Should create a new order', () => {
    const cpf = new CpfGenerator().generate()
    const order = new Order({ cpf, sequence: 1 })
    expect(order.cpf.value).toBe(cpf)
  })

  it('Should not create a new order if pass incorrect CPF', () => {
    expect(() => new Order({ cpf: '111111111111111', sequence: 1 })).toThrow(
      'Invalid CPF'
    )
  })

  it('Should create a new order and add items', () => {
    const cpf = new CpfGenerator().generate()
    const order = new Order({ cpf, sequence: 1 })
    order.addItem(new Label({ ...createLabelMock() }), 1)
    order.addItem(new Label({ ...createLabelMock() }), 2)
    expect(order.cpf.value).toBe(cpf)
    expect(order.orderItems).toHaveLength(2)
  })

  it('Should create a new order and add items and calculate total', () => {
    const cpf = new CpfGenerator().generate()
    const order = new Order({ cpf, sequence: 1 })
    const label1 = createLabelMock()
    const label2 = createLabelMock()
    label1.price = 50
    label2.price = 100
    order.addItem(new Label({ ...label1 }), 1)
    order.addItem(new Label({ ...label2 }), 2)
    expect(order.cpf.value).toBe(cpf)
    expect(order.orderItems).toHaveLength(2)
    expect(order.getTotal()).toBe(250)
  })

  it('Should create a new order with coupon and add items and calculate total', () => {
    const cpf = new CpfGenerator().generate()
    const order = new Order({ cpf, sequence: 1 })
    const label1 = createLabelMock()
    const label2 = createLabelMock()
    label1.price = 50
    label2.price = 100
    order.addItem(new Label({ ...label1 }), 1)
    order.addItem(new Label({ ...label2 }), 2)
    order.addCoupon(
      new Coupon({ code: 'VALE20', percentage: 20, expirationDate: new Date() })
    )
    expect(order.cpf.value).toBe(cpf)
    expect(order.orderItems).toHaveLength(2)
    expect(order.getTotal()).toBe(200)
  })
})
