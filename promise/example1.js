// function asyncFun(a,b,cd){
//     setTimeout(function(){
//         cd(a + b)
//     },200)
// }
// //这种函数会造成深度很多层，并且会造成逻辑断点
// asyncFun(1,2,function(result){
//     if (result > 2){
//         asyncFun(result,2,function(result){
//             if(result > 4){
//                 asyncFun(result,2,function(result){
//                     console.log('ok')
//                 })
//             }
//         })
//     }
// })

//promise从逻辑的清晰度上通过then这种方式一步一步的进行运算
//相对于回调函数的深度的方式更加优雅、直观、逻辑清晰
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

asyncFun(1,'a')
    .then(function (result) {
        if (result > 2) {
            return asyncFun(result,2)   //Promise返回的结果在用.then的时候也会被包装成一个Promise
        }
    },function (err) {
        console.log('first - ')
    })
    .then(function (result) {
        if (result > 4) {
            console.log('ok')
        }
    })
    .catch(function (error)
    {
        console.log('second - ' , error)
    })




