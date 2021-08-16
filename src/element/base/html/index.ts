export type content = string | null
export type attr = Record<string, string>

/** 元素内容，应尽量少参与 parse */
export default class Element {
  /** 标签名 */
  tagname: string
  /** 文字节点内容 */
  private __content: content
  /** 元素属性 */
  protected attr: attr
  constructor(tagname: string, content?: content, attr?: attr) {
    this.tagname = tagname
    if(content)
      this.setContent(content)
    this.attr = attr || {}
  }

  protected getContent(): content {
    return this.__content
  }
  protected setContent(content: string) {
    this.__content = content
  }

  /** 获取 html 的内容部分 */
  toHTMLBody(): string {
    return this.getContent()
  }

  /** 获取 html */
  toHTML(): string {
    let attrStr = ''
    for(let attrKey in this.attr)
      attrStr += ` ${attrKey}=${this.attr[attrKey]}`
    return `<${this.tagname} ${attrStr}>${this.toHTMLBody()}</${this.tagname}>`
  }
}