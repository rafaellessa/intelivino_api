export class OrderCode {
  value: string
  constructor(date: Date, sequence: number) {
    this.value = this.generateCode(date, sequence)
  }

  private generateCode(date: Date, sequence: number) {
    const year = date.getFullYear()
    const code = new String(sequence).padStart(8, '0')
    return `${year}${code}`
  }
}
