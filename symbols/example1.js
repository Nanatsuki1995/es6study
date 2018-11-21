'use strict';
// let name = Symbol('name')
// let name2 = Symbol('name')

// console.log(name.toString())
// console.log(String(name2))  //String() 字符串的构造函数

let getName = Symbol('name')

let obj = {
    [getName](){    //getName 是Symbol的值
        return 'zeng jian'
    }
}

console.log(obj[getName]())