/*
 * @Author: zengjian 
 * @Date: 2018-11-28 19:57:27 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-11-28 20:22:26
 */
'use strict'
// var arr = [1,2,3]
// // var a = arr[0]
// // var b = arr[1]
// // var c = arr[2]

//解构赋值
// var [a,b,c] = arr
// console.log(a,b,c)

//多维数组的解构赋值
// let arr = [22,[5,8],11]
// let [a,[b,c],d] = arr   //结构要一致
// console.log(a,b,c,d)

//变量的交换
// let x = 11;
// let y = 22;

// [y,x] = [x,y]
// console.log(x,y)

//不完全解析
// let arr = [22,[5,8],11]
// let [a,[,c],d] = arr
// console.log(a,c,d)

//不能被数组解析的值
// let [x,y] = NaN; //undefined,null,{}

//Set解析赋值
// let [x,y] = new Set([22,33])
// console.log(x,y)

//所有实现了Iterator的数据结构都能被数组解析
// class Group{
//     constructor(){

//     }
//     next(){
//         return {value:'ken',done:false}
//     }
//     [Symbol.iterator](){
//         return this
//     }
// }
// let group = new Group()
// let [x,y] = group
// console.log(x,y)

//...运算符 转换成数组
var [x,w,...y] = [1,2,3,4,5,6]    //...y只能放在最后面
console.log(x,y,w)