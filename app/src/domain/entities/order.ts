import OrderItem from './order-item'
import Cpf from './cpf'
import Item from './item'
import Coupon from './coupon'
import OrderCoupon from './order-coupon'
import OrderCode from './order-code'

export type OrderProps = {
  cpf: string
  sequence: number
}
export default class Order {
  cpf: Cpf
  orderItems: OrderItem[]
  code: OrderCode
  coupon?: OrderCoupon
  constructor({ cpf, sequence }: OrderProps) {
    this.cpf = new Cpf(cpf)
    this.orderItems = []
    this.code = new OrderCode(new Date(), sequence)
  }

  isItemDuplicated(item: Item) {
    return this.orderItems.some((orderItem) => orderItem.itemId === item.id)
  }

  addItem(item: Item, quantity: number) {
    if (this.isItemDuplicated(item)) throw new Error('Duplicated Item')
    this.orderItems.push(
      new OrderItem({ itemId: item.id, price: item.price, quantity })
    )
  }

  addCoupon(coupon: Coupon) {
    if (!coupon.isExpired(new Date())) {
      this.coupon = new OrderCoupon({
        code: coupon.code,
        percentage: coupon.percentage,
      })
    }
  }

  getTotal() {
    let total = this.orderItems.reduce((amount, orderItem) => {
      amount += orderItem.getTotal()
      return amount
    }, 0)
    if (this.coupon) total -= this.coupon.calculateDiscount(total)
    return total
  }
}
