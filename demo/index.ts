import { join } from 'path'
import { promises as fs } from 'fs'
import Readline from '../src/readline/cached-file'
import parse from '../src/parse'

;(async function() {
  console.log('started')
  const inputPath = join(__dirname, './test.md')
  const readline = new Readline(inputPath)
  await readline.readPromise
  console.log('文件读取成功')

  const outputPath = join(__dirname, './test.html')
  const root = parse(readline)
  fs.writeFile(outputPath, root.toHTML())
  console.log('finished')
})()