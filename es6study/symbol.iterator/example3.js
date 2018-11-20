'use strict'

var obj = {'ken':'514948303','zengjian':'111111111'}
var obj2 = {'dfdsgsd':'56156161616','jian':'5411651561'}

let iteratorFun =  function (){
    let self = this
    let i = 0
    const names = Object.keys(this)
    const length = names.length

    //iterator
    //return iterator这个对象
    return {
        next:function () {
            let name = names[i++]
            let qq = self[name]
            return {value: {name,qq} ,done:i > length}
        }
    }
}

obj[Symbol.iterator] = iteratorFun
obj2[Symbol.iterator] = iteratorFun

for (let u of obj2)console.log(u)