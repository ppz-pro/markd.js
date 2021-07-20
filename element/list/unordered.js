const El = require('../abstract')
const Li = require('./li')

class Class extends El {
  constructor(children) {
    super('ul', children)
  }
  readline(readline) {
    let line
    while(line = readline()) {
      const li = parseLi(line)
      if(li)
        this.push(li)
      else {
        readline.push(line)
        break
      }
    }
  }
}
exports.Class = Class

const reg = /\+ (.+)/
function parseLi(line) {
  const result = reg.exec(line)
  if(!result) return
  return new Li(result[1])
}

exports.parse = function(line) {
  const li = parseLi(line)
  if(li)
    return new Class([li])
}