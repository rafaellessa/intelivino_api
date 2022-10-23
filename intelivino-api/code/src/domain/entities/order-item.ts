export type OrderItemProps = {
  itemId: string
  price: number
  quantity: number
}

export class OrderItem {
  itemId: string
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
