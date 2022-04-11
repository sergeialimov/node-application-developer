// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any

// Promise.any() takes an iterable of Promise objects.

/**
 * It returns a single promise that resolves as soon as any of the promises in the iterable
 * fulfills, with the value of the fulfilled promise.
 */

/**
 * If no promises in the iterable fulfill (if all of the given promises are rejected),
 * then the returned promise is rejected with an AggregateError, a new subclass of Error
 * that groups together individual errors.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'two');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'tree');
});

Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value);
  // #1 and #2 are resolved, #3 rejected
  // #2 resolved faster
  // Result is: two (#2)
});