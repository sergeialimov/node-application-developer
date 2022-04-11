const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, 'tree')
  // setTimeout(reject, 600, 'tree') // fail
});

Promise.all([promise1, promise2, promise3]).then((value) => {
  console.log(value);
  // [ 'one', 'two', 'tree' ]
});
