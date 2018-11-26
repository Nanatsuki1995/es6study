'use strict'
//var  promise = Promise.resolve('hello')

var promise = new Promise(function (resolve,reject) {
    resolve('hello')
})

// promise.then(function (result) {
//     console.log(result)
// })

promise.then(
    function () {
        return
    },function () {
        
    }).then(function (result) {
        
    })


var promise2 = Promise.reject('error')

promise2.then(null,function (err) {     //Promise 可以通过.then进行回调函数的运算
    console.log(err)
})
