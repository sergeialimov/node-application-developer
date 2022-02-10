// #1
const myStream = getWritableStreamSomehow();
myStream.write('some data');
myStream.write('some more data');
myStream.end('done writing data');



// #2
const { PassThrough, Writable } = require('stream')

const pass = new PassThrough()
const writable = new Writable()

pass.pipe(writable)
pass.unpipe(writable)
// readableFlowing is false now

pass.on('data', (chunk) => { console.log(chunk.toString()); });
pass.write('ok')
pass.resume()



