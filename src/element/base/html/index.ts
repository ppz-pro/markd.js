export type content = string | null

export default class Element {
  /** 标签名 */
  tagname: string
  /** 文字节点内容 */
  content: content

  constructor(tagname: string, content: content) {
    this.tagname = tagname
    this.content = content
  }

  /** 获取 html 的内容部分 */
  toHTMLBody(): string {
    return this.content
  }

  /** 获取 html */
  toHTML(): string {
    return `<${this.tagname}>${this.toHTMLBody()}</${this.tagname}>`
  }
}