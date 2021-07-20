const El = require('./abstract')

const Class = exports.Class = El.born('h4')

const reg = /^# (.+)/
exports.parse = function(line) {
  const result = reg.exec(line)
  if(result)
    return new Class(result[1])
}