export default class CpfGenerator {
  generate() {
    const num1 = this.generateRandomNumber()
    const num2 = this.generateRandomNumber()
    const num3 = this.generateRandomNumber()
    const digit1 = this.calculateDigits(num1, num2, num3)
    const digit2 = this.calculateDigits(num1, num2, num3, String(digit1))
    return `${num1}${num2}${num3}${digit1}${digit2}`
  }

  calculateDigits(n1: string, n2: string, n3: string, n4?: string) {
    const numbers = n1.split('').concat(n2.split(''), n3.split(''))
    if (n4 !== undefined) {
      numbers[9] = n4
    }
    let firstDigit = 0
    for (let i = n4 !== undefined ? 11 : 10, j = 0; i >= 2; i--, j++) {
      firstDigit += parseInt(numbers[j]) * i
    }
    const secondDigit = firstDigit % 11
    return secondDigit < 2 ? 0 : 11 - secondDigit
  }

  generateRandomNumber(): string {
    const random = Math.floor(Math.random() * 999)
    return ('' + random).padStart(3, '0')
  }
}
