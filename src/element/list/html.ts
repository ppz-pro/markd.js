import AbstractChildren from '../base/html/children'
import Abstract from '../base/html/complex'

export
class ListElement extends AbstractChildren {
  protected readonly children: LiElement[]
  lastChild() {
    return this.children[this.children.length - 1]
  }

  readonly level
  constructor(level: number) {
    super('ul')
    this.level = level
  }

  push(el: LiElement) {
    const lastChild = this.lastChild()
    if(el.level == this.level)
      super.push(el)
    else if(el.level > this.level && lastChild)
      lastChild.push(el)
    else
      // 1. el.level < this.level 如 1 插 2
      // 2. 没有 lastChild 如 3 插 1（越级，应在 parse 函数内返回）
      throw Error(`向 level${this.level} push level${el.level}？`)
  }

  toHTML() {
    return this.children.length == 0
      ? ''
      : super.toHTML()
  }
}

export
class LiElement extends Abstract {
  readonly level
  readonly child: ListElement
  constructor(content: string, level: number) {
    super('li', content)
    this.level = level
    this.child = new ListElement(level + 1)
  }

  push(child: LiElement) {
    this.child.push(child)
  }

  toHTMLBody() {
    return `<span>${this.getContent()}</span>${this.child.toHTML()}`
  }
}