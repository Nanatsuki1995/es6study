/*
 * @Author: zengjian 
 * @Date: 2018-11-26 19:09:08 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-11-26 19:17:52
 */
var buffer = new ArrayBuffer(10)
var arr = new Uint8Array(buffer)//0~255 Int8Array() -128~127
arr[0] = -129
console.log(arr)
var arr2 = new Uint16Array(buffer)
console.log(arr2.length)