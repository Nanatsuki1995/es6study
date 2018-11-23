'use strict'
function asyncFun(a,b,time){

    return new Promise(function(resolve,reject){

        if(typeof a !== 'number' || typeof b !== 'number'){
            reject (new Error('no number'))     //问题：Promise并没有捕获异常
        }

        setTimeout(function(){
            resolve(a + b)
        },time)
    })
}

// var resultList = []
// asyncFun(1,2)
//     .then(function (result) {
//         resultList.push(result)
//         return asyncFun(2,3)
//     })
//     .then(function (result) {
//         resultList.push(result)
//     })

// var promise = Promise.all([asyncFun(1,2),asyncFun(2,3),asyncFun(1,22)])
// promise.then(function (result) {
//     console.log(result)
// })
//.all把所有结果返回为一个数组


var promise = Promise.race([asyncFun('a',2,500),asyncFun(2,3,20),asyncFun(1,22,22)])
promise.then(function (result) {
    console.log(result)
}/*,function (err) {
    console.log(err)
}*/).catch(err=>{
    console.log(err)
})
//.race返回最先执行的结果，如果内部有一个错误都不会返回resolve，而是返回reject



