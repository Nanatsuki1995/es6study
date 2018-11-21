'use strict'

var obj = {
    length:2,
    '0':'abc',
    '1':'ddd'
}

//在ES6中字符串也能实现Symbol.iterator遍历

obj[Symbol.iterator] = [][Symbol.iterator]

for(let i of obj){
    console.log(i)
}