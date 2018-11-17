
'use strict'

class User{

    constructor(name,password){
        this.name = name
        this.password = password
    }

    validateName(cb){
        let name = this.name
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                if (name === 'leo') {
                    resolve('seccess')
                }else{
                    reject('error')
                }    
            })
            
        })
    }

    validatePassword(cb){
        let password = this.password
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                if (password === '123') {
                    resolve('seccess')
                }else{
                    reject('error')
                }    
            })
            
        })
    }
}
/*
const user = new User('leo1','1235')

user.validateName()
    .then(function (result) {
        throw new Error('first error')//这里没有被执行
        return user.validatePassword()
    },function (err) {
        console.log('second error')
    })//第二个参数也是用来处理错误的，处理validateName中的错误
    .catch(function (err) {
        console.log(err)
    })

//这里是由于 'leo1' != 'leo' 使Promise调用了reject从而执行了打印'second error'
*/
const user = new User('leo','1235')

user.validateName()
    .then(function (result) {   //.then的参数中第一个代表resolve，第二个代表reject
        throw new Error('first error')
    },function (err) {
        console.log('second error')
    })
    .catch(function (err) {
        console.log(err)
        return user.validatePassword()
    })
    // .then(function (result) {
    //     console.log(result)
    // },function (err) {
    //     console.log('validate password error!')
    // })
    .then(function (result) {
        console.log(result)
    },function (err) {
        console.log('validate password error1!')//会优先使用这种方式捕获异常
        throw new Error('xx')
    })
    .catch(function (err) {
        console.log('validate password error2!')
    })
    //.then如果自身没有处理异常的话  会进入catch中进行处理
    //.then自身有处理异常，catch会处理then中的异常
