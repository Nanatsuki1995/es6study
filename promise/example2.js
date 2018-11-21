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

user.validatePassword()
    .then(function (result) {
        return user.validatePassword()
    })
    .then(function (result) {
        console.log('validate success')
    })
    .catch(function (err) {
        console.log('validate error')
    })
// user.send()
//     .then(function (success) {
//     console.log('success')
//     }).catch(function (err) {
//     console.log(err)
//     })