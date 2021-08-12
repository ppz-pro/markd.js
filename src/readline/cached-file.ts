import Abstract from './cached-abstract'
import { readFile } from 'fs'

export default class CachedFileReadline extends Abstract {
  readonly readPromise: Promise<void>
  
  constructor(path: string) {
    super()
    this.readPromise = new Promise( (res, rej) => {
      readFile(path, (err, buf) => {
        if(err) return rej(err)
        this.arr = this.split(buf.toString())
        res()
      })
    })
  }
}