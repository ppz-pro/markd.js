import { content, attr } from './index'
import Base from './complex'

export default
class ElementWithChildren extends Base {
  /** 子元素 */
  protected children: Base[]
  
  constructor(tagname: string, content?: content, children?: Base[], attr?: attr) {
    super(tagname, content, attr)
    this.children = children || []
  }

  /** 追加子元素 */
  push(el: Base) {
    this.children.push(el)
  }

  toHTMLBody() {
    return this.children.map( el => el.toHTML() ).join('')
  }
}