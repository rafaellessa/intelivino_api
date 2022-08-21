export type ItemProps = {
  id: number
  name: string
  description: string
  price: number
  promotionalPrice?: number
  photo?: string
}
export default abstract class Item {
  id: number
  name: string
  description: string
  price: number
  promotionalPrice?: number
  photo?: string
  constructor({
    id,
    name,
    description,
    price,
    promotionalPrice,
    photo,
  }: ItemProps) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.promotionalPrice = promotionalPrice
    this.photo = photo
  }
}
