const { Transform } = require('stream')

class MyTransform extends Transform {
  constructor(options) {
    super(options)
    // ...
  }
}


// or 
const myTransform2 = new Transform({
  transform(chunk, encoding, callback) {
    // ...
  }
})