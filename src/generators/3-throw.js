function* gen() {
  while(true) {
    try {
      yield 42;
    } catch (err) {
      console.log('error caught');
    }
  }
}

const g = gen();
console.log(g.next())
// { value: 42, done: false }

g.throw(new Error('something went wrong'));
// error caught
