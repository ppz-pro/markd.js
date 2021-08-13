import Parser from '../base/parser/simple'
import Element from './html'

export default
class HParser extends Parser<Element> {
  protected regExp = /^> (.+)/
  protected parse(result: RegExpExecArray) {
    this.readline.next()
    return new Element(result[1])
  }
}