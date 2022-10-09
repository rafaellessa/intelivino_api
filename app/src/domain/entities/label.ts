import Item, { ItemProps } from './item'
export type LabelProps = ItemProps & {
  type: string
}
export default class Label extends Item {
  grapes: string[]
  type: string
  constructor({
    id,
    name,
    description,
    price,
    promotionalPrice,
    photo,
    comercialType,
    type,
    stock,
  }: LabelProps) {
    super({
      id,
      name,
      description,
      price,
      promotionalPrice,
      photo,
      comercialType,
      stock,
    })
    this.type = type
    this.grapes = []
  }

  addGrapes(grape: string) {
    this.grapes.push(grape)
  }
}
