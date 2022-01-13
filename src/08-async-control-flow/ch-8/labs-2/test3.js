const { promisify } = require('util');

const task1 = (fun) => {
  setTimeout(() => {
    console.log('yo 1')
  }, 500) 
}
const task2 = (fun) => {
  setTimeout(() => {
    console.log('yo 2')
  }, 200)
}

console.log('-- -- -- promisify(task1()', promisify(task1));
// Promise.all([
//   promisify(task1()), // 1
//   promisify(task2()), // 2
// ]).then(console.log);


// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(4), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(6), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(8), 1000))  // 3
// ]).then(console.log);