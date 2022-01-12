function Dog (name) {
  this.name = name
  this.speak = '1'
}

const dog = new Dog('Sharik')

Dog.prototype.speak = '2'

console.log(Dog.prototype)

console.log('-- -- -- ', dog.speak)
console.log('-- -- -- dog', dog)
console.log('-- -- -- ', Object.getPrototypeOf(dog))

// function Dog(name) {
//   this.name = name;
//   this.speak = function() {
//     return 'woof';
//   };
// }

// const dog = new Dog('Pogo');

// Dog.prototype.speak = function() {
//   return 'arf';
// };

// console.log(dog.speak());
