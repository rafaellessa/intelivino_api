import CpfGenerator from './cpf-generator'
import Cpf from '../entities/cpf'
import { describe, it, expect } from 'vitest'
describe('CpfGenerator', () => {
  it('Should generate one valid CPF', () => {
    const cpfGenerator = new CpfGenerator()
    const cpf = cpfGenerator.generate()
    const isValidCpf = new Cpf(cpf)
    expect(isValidCpf.value).toBeTruthy()
  })
})
