const { execFile } = require('child_process')
const controller = new AbortController()
const { signal } = controller
const child = execFile('node', ['--version'], { signal }, (error) => {
  console.log(error) // an AbortError
})
controller.abort()