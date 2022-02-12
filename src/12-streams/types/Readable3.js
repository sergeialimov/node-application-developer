'use strict'

const { Readable } = require('stream')

const readable = Readable.from(['some', 'data', 'end'])

readable.on('data', (data) => {
  console.log('data', data)
});

readable.on('end', () => {
  console.log('Finished reading')
})
