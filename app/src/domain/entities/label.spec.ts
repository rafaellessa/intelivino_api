import { createLabelMock } from '../mocks/label'
import Label from './label'

describe('Label', () => {
  it('Should create one label', () => {
    const labelMocked = createLabelMock()
    const label = new Label(labelMocked)
    label.addGrapes('grape_test')
    expect(label.name).toBe(labelMocked.name)
    expect(label.grapes).toHaveLength(1)
  })
})
