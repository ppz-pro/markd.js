import Element from '../html'

abstract class InlineParser {
  protected readonly regExp: RegExp
  constructor(regExp: RegExp) {
    this.regExp = regExp
  }
  
  parse(line: string) {
    var result
    while(result = this.regExp.exec(line)) {
      const el = this.one(result)
      line = line.replace(this.regExp, el.toHTML())
    }
    
    return line
  }

  protected abstract one(result: RegExpExecArray): Element
}

abstract class InlineParserWithName extends InlineParser {
  protected readonly tagname: string
  constructor(regExp: RegExp, tagname: string) {
    super(regExp)
    this.tagname = tagname
  }
}

/** 解析“加粗”、“斜体”等 */
class SimpleInlineParser extends InlineParserWithName {
  one(result: RegExpExecArray) {
    return new Element(this.tagname, result[1])
  }
}

class BoldItalicParser extends InlineParser {
  constructor() {
    super(/\*\*\*(.+?)\*\*\*/)
  }
  one(result: RegExpExecArray) {
    const italic = new Element('i', result[1])
    return new Element('b', italic.toHTML())
  }
}

class LinkParser extends InlineParserWithName {
  constructor() {
    super(/\[(.+?)\]\((.+?)\)/, 'a')
  }
  one(result: RegExpExecArray) {
    return new Element(this.tagname, result[1], {
      href: result[2]
    })
  }
}

class ImgParser extends InlineParserWithName {
  constructor() {
    super(/!\[(.+?)\]\((.+?) "(.+?)"\)]/, 'img')
  }

  one(result: RegExpExecArray) {
    return new Element(this.tagname, result[1], {
      href: result[2]
    })
  }
}

export
const inlineParsers = [
  new LinkParser(),
  new ImgParser(),

  new BoldItalicParser(),
  new SimpleInlineParser(/\*\*(.+?)\*\*/, 'b'),
  new SimpleInlineParser(/\*(.+?)\*/, 'i'),
  new SimpleInlineParser(/__(.+?)__/, 'u'),
  new SimpleInlineParser(/~~(.+?)~~/, 'del'),
]