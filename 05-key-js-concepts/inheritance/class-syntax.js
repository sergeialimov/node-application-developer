class Wolf {
  constructor (name) {
    this.name = name;
  }
  howl() {
    console.log(this.name + ': awooo');
  }
}

class Dog extends Wolf {
  constructor(name) {
    super(name + ' the dog');
  }
  woof () {
    console.log(this.name + ': woof');
  }
}

const rufus = new Dog('Rufus');

rufus.woof()
rufus.howl()

console.log(Object.getPrototypeOf((rufus))) // { howl, woof }
console.log(Dog.prototype) // { howl, woof }
console.log(Object.getPrototypeOf(Dog.prototype)) // { howl } 
console.log(Wolf.prototype) // { howl }