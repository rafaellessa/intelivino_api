import Item, { ItemProps } from './item'
export type LabelProps = ItemProps
export default class Label extends Item {
  grapes: string[]
  constructor({
    id,
    name,
    description,
    price,
    promotionalPrice,
    photo,
  }: LabelProps) {
    super({ id, name, description, price, promotionalPrice, photo })
    this.grapes = []
  }

  addGrapes(grape: string) {
    this.grapes.push(grape)
  }
}
