import Parser from '../base/parser/simple'
import Element from './html'
import PElement from '../p/html'

export default
class HParser extends Parser<Element> {
  protected regExp = /^> (.+)/

  protected parse(result: RegExpExecArray) {
    const bq = new Element()
    bq.push(new PElement(result[1]))
    return this.parseMore(bq)
  }

  protected parseMore(bq: Element): Element {
    const next = this.readline.next()
    
    if(next == undefined)
      return bq

    const nextResult = this.regExp.exec(next)
    if(nextResult)
      return this.parseMore(bq)
    else
      return bq
  }
}