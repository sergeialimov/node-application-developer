const assert = require('assert');

const store = require('./store');

const { writeFileSync } = require('fs')


describe('store', () => {
  it('should run store with correct buffer', async () => {
    const value = Buffer.from('test');
    const res = await store(value);
    const { id } = res;

    assert.strictEqual(id.length, 4);
  });

  it('should run store with incorrect buffer', async () => {
    try {
      const value = 123;
      const fn = await store(value);
      console.log('fn', fn)
      // assert.throws(fn)
      // assert.strictEqual(fn, 'input must be a buffer')
      process.exit(1)
    } catch (err) {
      console.error(err);
    }
  });
});