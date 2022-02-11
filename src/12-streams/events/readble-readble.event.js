/**
 * The 'readble' event is emitted when there is no data to be read from the stream or when the end of the stream has been reached. 
 * Effectively, the 'readble' event indicates that the stream has no new information.
 * If data is available, stream.read() will return that data
 */


const readble = getReadableStreamSomehow();
readable.on('readable', function() {
  // There is some data to read now.
  let data;
  
  while(data = this.read()) {
    console.log(data)
  }
})