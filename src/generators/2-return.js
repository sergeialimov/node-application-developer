function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next();          // { value: 1, done: false }
g.return('test');  // { value: 'test', done: true }
g.next();          // { value: undefined, done: true }
