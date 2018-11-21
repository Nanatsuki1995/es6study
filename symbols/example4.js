'use strict'
let name = Symbol.for('name')
let name2 = Symbol.for('name')

console.log(name === name2)

console.log(Symbol.keyFor(name))
