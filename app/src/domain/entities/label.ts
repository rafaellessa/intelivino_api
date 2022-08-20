export type LabelProps = {
  name: string
  price: number
  promotionalPrice?: number
  photo?: string
}
export default class Label {
  name: string
  price: number
  promotionalPrice?: number
  photo?: string
  grapes: string[]
  constructor({ name, price, promotionalPrice, photo }: LabelProps) {
    this.name = name
    this.price = price
    this.promotionalPrice = promotionalPrice
    this.photo = photo
    this.grapes = []
  }

  addGrapes(grape: string) {
    this.grapes.push(grape)
  }
}
