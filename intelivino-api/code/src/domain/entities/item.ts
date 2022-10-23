export type ItemProps = {
  id: string
  name: string
  description: string
  price: number
  promotionalPrice?: number
  photo?: string
  comercialType: string
  stock: boolean
}
export default abstract class Item {
  id: string
  name: string
  description: string
  price: number
  promotionalPrice?: number
  photo?: string
  comercialType: string
  stock: boolean
  constructor({
    id,
    name,
    description,
    price,
    promotionalPrice,
    photo,
    comercialType,
    stock,
  }: ItemProps) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.promotionalPrice = promotionalPrice
    this.photo = photo
    this.comercialType = comercialType
    this.stock = stock

    if (this.promotionalPrice && this.promotionalPrice > this.price)
      throw new Error('The promotional price can not > price')
  }
}
