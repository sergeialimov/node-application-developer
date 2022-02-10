// error is optional
// writable.destroy([error])


/**
 * Destroy the MediaStream. Optionally emit an 'error' event, and emit a 'close' event (unless emitClose is set to false).
 * After this call, the writable stream has ended and subsequent calls to write() or end() will result in an ERR_STREAM_DESTROED error. This is a destructive and immediate way to destroy a stream.
 * Previous call to write() may not have drained, and may trigger en ERR_STREAM_DESTROYED error. Use end() instead of destroy() if data shoul flush before close, or wait for the 'drain' event before destroying the stream
 * 
 * Once destroy() has been called any further calls will be a no-op and no further errors except from _destroy() may be emitted as 'error'
 * Implementors should not override this method, but instead implement writable.destroy()
 */

const { Writable } = require('stream')

const myStream = new Writable()

const fooErr = new Error('foo error')


// way 1
// myStream.destroy(fooErr)
// myStream.on('error', (fooErr) => console.error(fooErr.message)) // foo error


// way 2
myStream.destroy()
myStream.write('foo', (error) => console.error(error.code)) // ERR_STREAM_DESTROYED