function asyncFun(a,b){

    return new Promise(function(resolve,reject){

        if(typeof a !== 'number' || typeof b !== 'number'){
            reject (new Error('no number'))     //问题：Promise并没有捕获异常
        }

        setTimeout(function(){
            resolve(a + b)
        },200)
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

var promise = Promise.all([asyncFun(1,2),asyncFun(2,3),asyncFun(1,22)])
promise.then(function (result) {
    console.log(result)
})