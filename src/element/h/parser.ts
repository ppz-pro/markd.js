import Parser from '../base/parser/simple'
import Html, { level } from './html'

export default
class HParser extends Parser<Html> {
  protected regExp = /^(#{1,5}) (.+)/
  protected parse(result: RegExpExecArray): Html {
    const sharpNum = result[1].length
    if(sharpNum > 5) return
    this.readline.next()
    return new Html(<level>sharpNum, result[2])
  }
}