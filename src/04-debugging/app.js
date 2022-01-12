// node --inspect app.js
// node --inspect-brk app.js
function f (n = 5) {
  if (n === 0) {
    throw Error()
  }
  debugger
  f(n - 1)
}

f()
