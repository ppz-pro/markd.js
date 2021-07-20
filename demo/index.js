const Path = require('path')
const createReadline = require('../readline/file')
const parse = require('../parse')

;(async function() {
  const inputPath = Path.join(__dirname, './test.md')
  const readline = await createReadline(inputPath)
  const outputPath = Path.join(__dirname, './test.html')
  const root = parse(readline)
  root.toFile(outputPath)
})()