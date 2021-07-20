const fs = require('fs')
const createFromString = require('./string')

module.exports = function(path) {
  return new Promise( (res, rej) => {
    fs.readFile(path, (err, buf) => {
      if(err)
        rej(err)
      else
        res(createFromString(buf.toString()))
    })
  })
}