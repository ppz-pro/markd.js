const fs = require('fs')

module.exports = class {
  constructor(tagname = 'div', content = []) {
    this.tagname = tagname
    this.content = content
  }

  take(tagname) {
    if(this.content instanceof Array)
      for(let i in this.content) {
        const el = this.content[i]
        if(el.tagname == tagname)
          return this.content.splice(i, 1)
        else {
          const son = el.take(Class)
          if(son) return son
        }
      }
  }

  push(tar) {
    if(this.content instanceof Array) {
      console.log(tar.tagname)
      this.content.push(tar)
    } else {
      this.content += tar
    }
  }

  pushLine(tar) {
    this.content += '\n' + tar
  }

  toHTML() {
    return `<${this.tagname}>${
      this.content instanceof Array
        ? this.content.map( el => el.toHTML() ).join('')
        : this.content
    }</${this.tagname}>`
  }

  toFile(path) {
    const str = this.toHTML()
    const output = fs.createWriteStream(path)
    output.write(str)
  }

  static born(tagname) {
    return class extends this {
      constructor(content) {
        super(tagname, content)
      }
    }
  }
}