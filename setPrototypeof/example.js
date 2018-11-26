/*
 * @Author: zengjian 
 * @Date: 2018-11-26 19:41:46 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-11-26 19:54:53
 */

'use strict'

class User{
    constructor(){

    }
}

var p = {
    getName(){}
}

var user = new User()

console.log(user.__proto__ === User.prototype)//true

user.__proto__ = p //使user得到p的方法getName
console.log(user.getName)


Object.setPrototypeOf(user,p) //ES6的新写法 同样可以使user得到p的方法getName
var proto = Object.getPrototypeOf(user)
console.log(proto === user.__proto__)//true
