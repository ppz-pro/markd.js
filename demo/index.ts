import { join } from 'path'
import { promises as fs } from 'fs'
import Readline from '../src/readline/cached-file'
import DocParser from '../src/parser'

;(async function() {
  console.log('started')
  const inputPath = join(__dirname, './test.md')
  const readline = new Readline(inputPath)
  await readline.readPromise
  console.log('文件读取成功')

  const outputPath = join(__dirname, './test.html')
  const root = new DocParser(readline).parse()
  fs.writeFile(outputPath, root.toHTML())
  console.log('finished')
})()