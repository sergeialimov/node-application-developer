// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

/**
 * The Promise.race() method returns a promise that fulfills or rejects as soon as one of
 * the promises in an iterable fulfills or rejects, with the value or reason from that promise.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'two');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, 'tree')
  // setTimeout(reject, 400, 'tree') // That wouldn't fail as it's not first
});

Promise.race([promise1, promise2, promise3]).then((value) => {
  console.log(value);
  // Result: fail. Because of #3
});
