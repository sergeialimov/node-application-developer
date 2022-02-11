/**
 * Class: stream.PassThrough 
 * The stream.PassThrough class is a trivial implementation of a Transform
 * stream that simply passes the input bytes across to the output.
 * 
 * Its purpose is primarly for examples and testing, 
 * but there are some use cases where stream.PassThrough is useful as 
 * a building block for novel sorts of streams.
 * 
 */


const { PassThrough, Writable } = require('stream');
const pass = new PassThrough();
const writable = new Writable();

pass.pipe(writable);
pass.unpipe(writable);
// readableFlowing is now false.

pass.on('data', (chunk) => { console.log(chunk.toString()); });
pass.write('ok');  // Will not emit 'data'.
pass.resume();     // Must be called to make stream emit 'data'.