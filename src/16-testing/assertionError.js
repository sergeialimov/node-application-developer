// const { AssertionError } = require('assert')
const assert = require('assert')

const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  message: 'nooo',
  operator: 'strictEqual'
})

console.log(message)

try {
  assert.strictEqual(2, 3)
} catch (err) {
  console.log('-- err', err);
}