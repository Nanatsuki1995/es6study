'use strict'

let arr = ['a','b','c']

var iterator = arr[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// for (let item of arr)
//     console.log(item)