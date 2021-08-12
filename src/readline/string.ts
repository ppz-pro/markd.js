import Abstract from './cached-abstract'

export default class StringReadline extends Abstract {
  constructor(str: string) {
    super()
    this.arr = str.split('\n')
  }
}