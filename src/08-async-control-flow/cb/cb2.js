const { readFile } = require('fs')

const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

const print = (err, contents) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(contents.toString())
}

readFile(bigFile, (err, contents) => {
  print(err, contents)
  readFile(mediumFile, (err, contents) => {
    print(err, contents)
    readFile(mediumFile, (err, contents) => {
      print(err, contents)
    })
    readFile(smallFile, (err, contents) => {
      print(err, contents)
    })
  })
})
