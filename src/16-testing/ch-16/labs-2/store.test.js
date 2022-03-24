const store = require('./store')

describe('store', () => {
  it('should fail with incorrect buffer', (done) => {
    const value = 123;
    const cb = (err, obj) => {
      expect(err).toStrictEqual(Error('input must be a buffer'));
      done();
    };

    store(value, cb);
  });

  it('should not fail with correct buffer', (done) => {
    const value = Buffer.from('testBuffer');

    const cb = (err, res) => {
      expect(err).toStrictEqual(null);
      expect(typeof(res)).toBe('object');
      expect(typeof(res.id)).toBe('string');
      expect(res.id.length).toStrictEqual(4);
      done();
    };

    store(value, cb);
  });
});
