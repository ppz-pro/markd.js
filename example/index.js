const Path = require('path')
const FS = require('fs')

const Readline = require('@ppzp/ppz/readline/cached-file.js')
const DocParser = require('@ppzp/ppz/parser.js')

;(async function() {
  const input = Path.join(__dirname, '../readme-input.md')
  const output = Path.join(__dirname, '../readme.html')

  const readline = new Readline(input)
  await readline.readPromise

  const parser = new DocParser()
  FS.writeFileSync(output, parser.parse().toHTML())
})()