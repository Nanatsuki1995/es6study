'use strict'

console.log('leo'[Symbol.iterator])

for(let char of 'leo'){
    console.log(char)
}