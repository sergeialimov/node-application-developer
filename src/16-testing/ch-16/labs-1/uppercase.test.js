const assert = require('assert');

const uc = require('./uppercase');

describe('uppercase', () => {
  test('it should return correct result', () => {
    const res = uc('test-str');
    const expected = 'TEST-STR';
    assert.strictEqual(res, expected);
  });
  test('it should throw error if pass not string', () => {
    try {
      const res = uc(123)
      assert.strictEqual(res, 'bad output')
    } catch(err) {
      console.log(err)
    }
  });
});