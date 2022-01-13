// const promise = new Promise(function(resolve, reject) {

// });

const { promisify } = require('util');

const print = (src) => {
  console.log('i am a cb', src);
}
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

const callTasks = () => task1()
  .then(task2)
  .catch(console.error);

callTasks();