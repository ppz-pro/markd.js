import Readline from './readline/abstract'
import Element from './element/base/html/complex'
import ElementWithChildren from './element/base/html/children'

import ElParser from './element/base/parser'
import HParser from './element/h/parser'
import ListParser from './element/list/parser'
import BlockQuoteParser from './element/block-quote/parser'

import PElement from './element/p/html'

/** 解析一个文档为一个 Element */
export default
class DocParser {
  private readonly readline: Readline
  private readonly root: ElementWithChildren
  readonly elementParsers: ElParser<Element>[]

  constructor(readline: Readline, root?: ElementWithChildren) {
    this.readline = readline
    this.root = root || new ElementWithChildren('div')
    this.elementParsers = [
      new HParser(readline),
      new ListParser(readline),
      new BlockQuoteParser(readline)
    ]
  }

  /** 解析文档，返回 Root 元素 */
  parse() {
    while(this.readline.head) {
      let el
      
      for(let elParser of this.elementParsers)
        if(el = elParser.check())  break

      if(!el) {
        el = new PElement(this.readline.head)
        this.readline.next()
      }
      this.root.push(el)
    }
    
    return this.root
  }
}