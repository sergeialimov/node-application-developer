/**
 drain
 *
 If a call to stream.write(chunk) returns false, the 'drain' event will be emitted when it is appropriate to resume writing data to the stream
 
 Write data to the supplied writable stream one million times
 Be attentive to back-pressure
 * */

function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 10 **6
  write()
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback)
      } else {
        // See if we should continue, or wait
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once
      writer.once('drain', write)
    }
  }
}