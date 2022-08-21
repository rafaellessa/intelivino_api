import { LabelProps } from '../entities/label'
import { createItemMock } from './item'

export const createLabelMock = (): LabelProps => {
  return {
    ...createItemMock(),
    type: '',
  }
}
