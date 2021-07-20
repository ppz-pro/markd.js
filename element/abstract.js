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
  
  lastChildren() {
    return this.content[this.content.length - 1]
  }

  push(tar) {
    if(this.content instanceof Array)
      this.content.push(tar)
    else
      this.content += tar
  }

  debug() {
    console.log(this.tagname)
  }

  pushLine(tar) {
    this.content += '\n' + tar
  }

  toHTML() {
    this.debug()
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