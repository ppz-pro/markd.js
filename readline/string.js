module.exports = function(tar) {
  tar = tar.split('\n')
  const readline = function() {
    return tar.shift()
  }
  readline.push = function(line) {
    tar.unshift(line)
  }
  return readline
}