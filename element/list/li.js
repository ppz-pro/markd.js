const El = require('../abstract')

module.exports = class extends El {
  constructor(content, level) {
    super('li')
    this.content = content
    this.level = level
  }

  report() {
    console.log(this.tagname, this.level)
  }

  setSon(ul) {
    this.son = ul
  }
  
  debug() {
    let pre = ''
    for(let i=0; i<this.level-1; i++)
      pre += '  '
    console.log(pre + '  ' + this.tagname)
  }

  toHTML() {
    this.debug()
    return `<li><span>${this.content}</span>${
      this.son
      ? this.son.toHTML()
      : ''
    }</li>`
  }
}