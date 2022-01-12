function Wolf (name) {
  // this = undefined by default. It can be assigned while calling of the function
  this.name = name
}

// By default .prototype is {}
// wolf.prototype = { howl: function }
Wolf.prototype.howl = function () {
  console.log(this.name + ': awooo')
}

function Dog (name) {
  // from start this is undefined
  Wolf.call(this, name + ' the dog')
}

// proto = { howl: function }
// proto contains constructor and properties
// `new` creates new object using constuctor and properties
// Returns Wolf {}
function inherit (proto) {
  function ChainLink () {
  }
  ChainLink.prototype = proto
  return new ChainLink() // Wolf {}
}

Dog.prototype = inherit(Wolf.prototype) // wolf.prototype = { howl: function }
Dog.prototype = Wolf.prototype

Dog.prototype.woof = function () {
  console.log(this.name + ': woof')
}

const rufus = new Dog('Rufus')

rufus.woof() //
rufus.howl() //

console.log('1', Object.getPrototypeOf(Dog.prototype)) // wolf?
console.log('2', Dog.prototype)
console.log('3', Object.getPrototypeOf(rufus)) // Dog
