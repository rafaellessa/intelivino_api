import { describe, expect, it } from 'vitest'
import CnpjGenerator from './cnpj-generator'
describe('CnpjGenerator', () => {
  it('Should generate cnpj', () => {
    const cnpj = new CnpjGenerator().generate()
    expect(cnpj).toBeTruthy()
  })
})
