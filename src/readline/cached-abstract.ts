import Abstract from './abstract'

export default abstract class CachedAbstractReadline extends Abstract {
  protected arr: string[]

  split(str: string) {
    return str.split('\n')
  }

  get head() {
    return this.arr[0]
  }

  next() {
    this.last = this.arr.shift()
    return this.head
  }

  /** 上一行，用于 unshift */
  protected last: string
  unshift(line?: string) {
    if(!line) {
      if(this.last) {
        line = this.last
        this.last = null
      } else {
        throw Error('未传入 line，last 为空')
      }
    }
    this.arr.unshift(line)
  }
}