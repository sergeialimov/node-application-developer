const assert = require('assert');

const uc = require('./uppercase');


// describe('uppercase', () => {
//   it('should return correct result', () => {
    const res = uc('test-str');
    const expected = 'TEST-STR';
    assert.strictEqual(res, expected);
  // });
  // it('should throw error if pass not string', () => {
  try {
    const res = uc(123)
    assert.strictEqual(res, 'bad output')
    // assert.throws()
    // assert.throws(() => {
    //   uc(123)
    // });
  } catch(err) {
    console.log(err)
    // process.exit(1);
  }
  // });
// });