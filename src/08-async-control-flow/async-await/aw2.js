const { readFile } = require('fs').promises

const files = Array.from(Array(3)).fill(__filename)

const print = (contents) => {
  console.log(contents.toString())
}

const run = async function (files) {
  const readers = files.map((file) => readFile(file))
  const data = await Promise.all(readers)
  print(Buffer.concat(data))
}

run(files).catch(console.error)
