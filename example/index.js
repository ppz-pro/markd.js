import Path from 'path'
import FS from 'fs'

import Readline from '@ppzp/ppz/readline/cached-file.js'
import DocParser from '@ppzp/ppz/parser.js'

;(async function() {
  const input = Path.join(__dirname, '../readme-input.md')
  const output = Path.join(__dirname, '../readme.html')

  const readline = new Readline(input)
  await readline.readPromise

  const parser = new DocParser(readline)
  FS.writeFileSync(output, parser.parse().toHTML())
})()