// 'use strict'
// const assert = require('assert')
// // const assert = require('assert')

// // TODO: 
// // implement a way to create a prototype chain
// // of leopard -> lynx -> cat
// // leopard prototype must have ONLY a hiss method
// // lynx prototype must have ONLY a purr method
// // cat prototype must have ONLY a meow method

//  const leopard = function (name) {
//   return {
//     hiss: function(name) {
//       console.log(`${name}: hsss`)
//     }
//   }
// }

// const lynx = function (name) {
//   return Object.create(leopard, {
//     purr: `${name}: prrr`,
//   })
// }

// const cat = function (name) {
//   return Object.create(lynx, {
//     meow: `${name}: meow`,
//   })
// }

// const felix = new cat('Felix the cat'); //TODO replace null with instantiation of a cat
// felix.meow() // prints Felix the cat: meow
// felix.purr() // prints Felix the cat: prrr
// felix.hiss() // prints Felix the cat: hsss

// // prototype checks, do not remove
// const felixProto = Object.getPrototypeOf(felix)
// const felixProtoProto = Object.getPrototypeOf(felixProto)
// const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)

// assert(Object.getOwnPropertyNames(felixProto).length, 1)
// assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
// assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
// assert(typeof felixProto.meow, 'function')
// assert(typeof felixProtoProto.purr, 'function')
// assert(typeof felixProtoProtoProto.hiss, 'function')
// console.log('prototype checks passed!')


'use strict'
const assert = require('assert')

assert(1===1, 'yeahhh')