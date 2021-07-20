const UnorderedList = require('./element/list/unordered')
const Title = require('./element/title')
const P = require('./element/p')
const El = require('./element/abstract')

module.exports = function(readline) {
  const root = new El('main')
  let line
  while(line = readline()) {
    let res
    if(res = Title.parse(line)) {
      root.push(res)
    } else if (res = UnorderedList.parse(line)) {
      root.push(res)
      res.readline(readline)
    } else {
      root.push(new P(line))
    }
  }
  return root
}