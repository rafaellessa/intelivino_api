import { createLabelMock } from '../mocks/label'
import Label from './label'
import { describe, it, expect } from 'vitest'

describe('Label', () => {
  it('Should create one label', () => {
    const labelMocked = createLabelMock()
    const label = new Label(labelMocked)
    label.addGrapes('grape_test')
    expect(label.name).toBe(labelMocked.name)
    expect(label.grapes).toHaveLength(1)
  })

  it('Should not create one label when promotional price > price', () => {
    const labelMocked = createLabelMock()
    labelMocked.price = 10
    labelMocked.promotionalPrice = 10.1
    expect(() => new Label(labelMocked)).toThrow(
      'The promotional price can not > price'
    )
  })
})
