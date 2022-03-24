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
    await expect(store(123))
      .rejects
      .toStrictEqual(Error('input must be a buffer'))
    await expect(store({}))
      .rejects
      .toStrictEqual(Error('input must be a buffer'))
      await expect(store(null))
      .rejects
      .toStrictEqual(Error('input must be a buffer'))

  });
});