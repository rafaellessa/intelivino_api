import { describe, it, expect } from 'vitest'
import { Cpf } from '../entities'
import { CpfGenerator } from './cpf-generator'
describe('CpfGenerator', () => {
  it('Should generate one valid CPF', () => {
    const cpfGenerator = new CpfGenerator()
    const cpf = cpfGenerator.generate()
    const isValidCpf = new Cpf(cpf)
    expect(isValidCpf.value).toBeTruthy()
  })
})
