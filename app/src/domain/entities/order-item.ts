export type OrderItemProps = {
  itemId: number
  price: number
  quantity: number
}

export default class OrderItem {
  itemId: number
  price: number
  quantity: number
  constructor({ itemId, price, quantity }: OrderItemProps) {
    if (quantity < 0) throw new Error('Invalid quantity')
    this.itemId = itemId
    this.price = price
    this.quantity = quantity
  }

  getTotal() {
    return this.price * this.quantity
  }
}
