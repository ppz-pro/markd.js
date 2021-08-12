import Base, { content } from './'

export default class ElementWithChildren extends Base {
  /** 子元素 */
  protected children: Base[]
  
  constructor(tagname: string, content?: content, children?: Base[]) {
    super(tagname, content)
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