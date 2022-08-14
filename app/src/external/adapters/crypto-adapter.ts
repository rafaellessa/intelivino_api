import Encryptor from '../../domain/encryptors/encryptor'
import CryptoJS from 'crypto-js'
import DateUtils from '../../domain/utils/date'
export default class CryptoAdapter implements Encryptor {
  constructor(readonly dateUtils: DateUtils) {}
  validate(token: string): boolean {
    const secret = process.env.AHREAS_SECRET
    const today = this.dateUtils.create(new Date(), 'YYYY-MM-DD')
    return token === CryptoJS.SHA256(`${secret}${today}`).toString()
  }

  hash(value: string): string {
    const today = this.dateUtils.create(new Date(), 'YYYYMMDD')
    return CryptoJS.MD5(`${today}${value}`).toString()
  }
}
