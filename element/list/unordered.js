const El = require('../abstract')
const Li = require('./li')

class Class extends El {
  constructor(children, level) {
    super('ul', children)
    this.level = level
  }

  debug() {
    let pre = ''
    for(let i=0; i<this.level-1; i++)
      pre += '  '
    console.log(pre + this.tagname)
  }
  
  readline(readline) {
    let line
    while(line = readline()) {
      const li = parseLi(line)
      if(li) {
        if(this.level < li.level) {
          const ul = new Class([li], li.level)
          this.lastChildren().setSon(ul)
          ul.readline(readline)
        } else if(this.level == li.level) {
          this.push(li)
        } else {
          readline.push(line)
          break
        }
      } else {
        readline.push(line)
        break
      }
    }
  }
}
exports.Class = Class

const reg = /(\+ )+(.+)/
function parseLi(line) {
  const result = reg.exec(line)
  if(!result) return
  return new Li(result[2], line.slice(0, line.indexOf(result[2])).length / 2)
}

exports.parse = function(line) {
  const li = parseLi(line)
  if(li)
    return new Class([li], li.level)
}