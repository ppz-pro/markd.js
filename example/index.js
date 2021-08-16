// @ts-check
const Path = require('path')
const FS = require('fs')
const Readline = require('@ppzp/ppz/readline/cached-file').default
const DocParser = require('@ppzp/ppz').default

;(async function() {
  const input = Path.join(__dirname, '../readme.md')
  const output = Path.join(__dirname, '../readme.html')

  const readline = new Readline(input)
  await readline.readPromise

  const parser = new DocParser(readline)
  FS.writeFileSync(output, parser.parse().toHTML())
})()