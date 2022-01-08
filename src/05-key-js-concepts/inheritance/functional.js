const wolf = {
  howl: function() { console.log(this.name, 'awoo');}
}

const dog = Object.create(wolf, {
  woof: {
    value: function() { console.log(this.name + ': woof')}
  }
});

const rufus = Object.create(dog, {
  name: {
    value: 'rufus the dog',
  } 
});

const obj = {}
// console.log(rufus.woof());
// rufus.woof();
// dog.woof()
// rufus.howl(); 
console.log(JSON.stringify(obj, null, 4));
// console.log(obj.prototype);
// console.log(wolf.howl.prototype);
// console.log(Object.getPrototypeOf(wolf));
// console.log('-- -- -- dog', Object.prototype(dog));
// console.log('-- -- -- ', Object.getOwnPropertyDescriptor(dog, 'title'));