import Readline from './readline/abstract'
import Element from './element/base/html/children'

import HParser from './element/h/parser'
import ListParser from './element/list/parser'
import PElement from './element/p/html'

export default function(readline: Readline) {
  const root = new Element('div')
  const hParser = new HParser(readline)
  const listParser = new ListParser(readline)

  while(readline.head) {
    let el = hParser.check()
    || listParser.check()
    
    if(!el) {
      el = new PElement(readline.head)
      readline.next()
    }
    root.push(el)
  }
  
  return root
}