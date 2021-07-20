const El = require('./abstract')

const reg = /^(#+) (.+)/
exports.parse = function(line) {
  const result = reg.exec(line)
  if(!result) return

  const sharpNum = result[1].length
  if(sharpNum > 5) return
  
  return new El('h' + sharpNum, result[2])
}