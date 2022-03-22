const assert = require('assert')
const { resolve } = require('path')


assert.ok(true) // false
assert.equal(true, 1) // 1, 2
assert.notEqual(1, 2) // 1, true
assert.strictEqual(1, 1) // 1, true
assert.notStrictEqual(true, 1) // 1, 2
assert.deepEqual({ a: 1 }, { a: true }) // { a: 1 }, { a: 2 }
assert.deepStrictEqual({ a: 1 }, { a: 1 }) // { a: 1 }, { a: true }
assert.notDeepEqual({ a: 1 }, { a: 2 }) // { a: 1 }, { a: true }
assert.notDeepStrictEqual({ a: 1 }, { a: true }) // { a: 1 }, { a: 1 }
assert.throws(() => {
  throw 'throw' // missing throw
})
assert.doesNotThrow(() => {}) // throw
assert.rejects(new Promise((resolve, reject) => {
  reject() // resolve()
}))
assert.doesNotReject(new Promise((resolve, reject) => {
  resolve() // reject()
}))
assert.ifError(undefined) // Throws value if value is not undefined or null
assert.match('test', /test/) // 'te-st', /test/
assert.doesNotMatch('te-st', /test/) // 'te-st', /test/
assert.fail(new Error('fail')) // what is not failed option?
// assert.
// assert.
// assert.
