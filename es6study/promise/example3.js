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

const user = new User('leo','1235')

user.validateName()
    .then(function (result) {
        return 'validate name ok'
    })
    //如果他返回的不是Promise，他内部会通过Promise.resolve转换成Promise
    //var promise = Promise.resolve('validate name ok')

    // var promise = new Promise(function (resolve,reject) {
    //     resolve('validate name ok')
    // })

    // .then(function (result) {
    //     console.log(result)
    // })
