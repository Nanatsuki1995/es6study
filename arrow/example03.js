/*
 * @Author: zengjian 
 * @Date: 2018-11-28 19:49:28 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-11-28 19:54:41
 */
'use strict'

// var fn = n=> n*3
var fn = n=>{
    console.log(arguments[0])
    console.log(n)
}

fn(12)

//不能作为构造函数
//new fn()

var fn2 = n=> n*2   //可以表示直接返回n*2
console.log(fn2(5))

var fn2 = n=>{  //有大括号是必须加return
    return n*2
}
console.log(fn2(5))
