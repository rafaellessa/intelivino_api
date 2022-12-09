export default class CnpjGenerator {
  generate() {
    const n1 = this.generateRandomNumber()
    const n2 = this.generateRandomNumber()
    const n3 = this.generateRandomNumber()
    const n4 = this.generateRandomNumber()
    const n5 = this.generateRandomNumber()
    const n6 = this.generateRandomNumber()
    const n7 = this.generateRandomNumber()
    const n8 = this.generateRandomNumber()
    const n9 = 0
    const n10 = 0
    const n11 = 0
    const n12 = 1
    let d1 =
      n12 * 2 +
      n11 * 3 +
      n10 * 4 +
      n9 * 5 +
      Number(n8) * 6 +
      Number(n7) * 7 +
      Number(n6) * 8 +
      Number(n5) * 9 +
      Number(n4) * 2 +
      Number(n3) * 3 +
      Number(n2) * 4 +
      Number(n1) * 5
    d1 = 11 - this.mod(d1, 11)
    if (d1 >= 10) d1 = 0
    let d2 =
      d1 * 2 +
      n12 * 3 +
      n11 * 4 +
      n10 * 5 +
      n9 * 6 +
      Number(n8) * 7 +
      Number(n7) * 8 +
      Number(n6) * 9 +
      Number(n5) * 2 +
      Number(n4) * 3 +
      Number(n3) * 4 +
      Number(n2) * 5 +
      Number(n1) * 6
    d2 = 11 - this.mod(d2, 11)
    if (d2 >= 10) d2 = 0
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`
  }

  generateRandomNumber(): string {
    const random = Math.floor(Math.random() * 9)
    return ('' + random).padStart(1, '0')
  }

  mod(number1: number, number2: number) {
    return Math.round(number1 - Math.floor(number1 / number2) * number2)
  }
}
