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

// console.log(rufus.woof());
// rufus.woof();
// dog.woof()
// rufus.howl(); 

// console.log('-- -- -- wolf', wolf.prototype);
// console.log('-- -- -- dog', Object.prototype(dog));
console.log('-- -- -- dog', Object.getPrototypeOf(dog));
// console.log('-- -- -- ', Object.getOwnPropertyDescriptor(dog, 'title'));