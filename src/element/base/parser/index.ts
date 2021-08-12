import BaseElement from '../html'
import Readline from '../../../readline/abstract'

export default abstract class AbstractElementParser<Element extends BaseElement> {
  protected readline
  constructor(readline: Readline) {
    this.readline = readline
  }
  /**
   * 读取 readline 的内容
   * 检查内容符合“哪个元素”
   * + 如果有元素符合：交给内部的 parse 函数处理，并返回 parse 的结果
   * + 没有元素符合：返回 void
   */
  abstract check(): Element | void
  
  /** check 的后续处理，返回解析的元素 */
  protected abstract parse(...args: any[]): Element

}