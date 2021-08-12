import Parser from '../base/parser'
import { ListElement, LiElement } from './html'
import { LiRegExp, space2, space4, tab } from './li-reg-exp'

export default
class ListParser extends Parser<ListElement> {
  /** 当前所在的 ListElement */
  private rootElement: ListElement
  /** 当前使用的正则表达式 */
  private liRegExp: LiRegExp

  check() {
    const head = this.readline.head
    const result = /^\+ (.+)/.exec(head)
    if(!result) return

    this.rootElement = new ListElement(1)
    this.rootElement.push(new LiElement(result[1], 1))
    const next = this.readline.next() // 解析确定成功，消一行

    // 通过下一行确定使用哪种缩进
    if(next != undefined) {
      if(next[0] == '\t')
        this.liRegExp = tab
      else if(next.indexOf('    ') == 0)
        this.liRegExp = space4
      else
        this.liRegExp = space2
    }

    return this.parse()
  }

  parse(): ListElement {
    const line = this.readline.head
    const result = this.liRegExp.regExp.exec(line)
    if(!result)
      return this.rootElement

    const levelStrLength = line.indexOf(result[2]) - 2
    const level = levelStrLength / this.liRegExp.preLength + 1 // 当前元素等级确定
    // --- 如果跨级，则废弃 --- //
    // 找到上一个被插元素元素（即最下，最后）
    let lastLowestLi = this.rootElement.lastChild()
    while(lastLowestLi.child.lastChild())
      lastLowestLi = lastLowestLi.child.lastChild()
    // 比较 level：最后一个元素 和 当前元素
    if(level - lastLowestLi.level > 1)
      return this.rootElement
    // --- 未跨级，是正经元素 --- //
    
    this.rootElement.push(new LiElement(result[2], level))
    const next = this.readline.next() // 确定插入，消除一行
    return next
      ? this.parse()
      : this.rootElement
  }
}