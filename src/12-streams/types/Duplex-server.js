/**
 * The net.createServer function accepts a listener function which is called every time a client connects to the server.
 * The listener function is passed a Duplex stream instance which we called socket.
 * Every second, socket.write('beat') is called, this is the first place the writable side of the stream is used.
 * The stream is also listened to for data events and an end event,
 * in these cases we are interacting with the readable side of the Duplex stream.
 * Inside the data event listener we also write to the stream by sending back the incoming data after transforming it to upper case.
 * The end event is useful for cleaning up any resources or on-going operations after a client disconnects. In our case we use it to clear the one second interval.
 */
'use strict'

const net = require('net')
net.createServer((socket) => {
  const interval = setInterval(() => {
    socket.write('beat')
  }, 1000)
  socket.on('data', (data) => {
    socket.write(data.toString().toUpperCase())
  })
  socket.on('end', () => clearInterval(interval))
}).listen(3000)