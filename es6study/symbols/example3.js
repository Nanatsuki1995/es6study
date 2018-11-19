'use strict'
let name = Symbol('name')

let obj = {
    age:22,
    [name]:'leo'
}

//console.log(Object.keys(obj))

// for(let k in obj){
//     console.log(k)
// }

//console.log(Object.getOwnPropertyNames(obj))

//console.log(Object.getOwnPropertySymbols(obj)) //这种方式可以得到对象中的Symbol属性

let key = Object.getOwnPropertySymbols(obj)[0]
console.log(obj[key])