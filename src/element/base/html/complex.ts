import Element from './index'
import { inlineParsers } from '../parser/inline'

export default
class ComplexElement extends Element {
  protected setContent(content: string) {
    content = this.escape(content)
    for(let parser of inlineParsers)
      content = parser.parse(content)
    super.setContent(content)
  }

  private escape(content: string): string {
    content = replaceAll(content, '&', '&amp;')
    content = replaceAll(content, ' ', '&nbsp;')
    content = replaceAll(content, '<', '&lt;')
    content = replaceAll(content, '>', '&gt;')
    content = replaceAll(content, "'", '&apos;')
    content = replaceAll(content, '"', '&quot;')
    return content
  }
}

function replaceAll(target: string, sub: string, replacer: string): string {
  while(true) {
    var tmp = target.replace(sub, replacer)
    if(tmp == target)
      return tmp
    else
      target = tmp
  }
}