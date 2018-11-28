/*
 * @Author: zengjian 
 * @Date: 2018-11-28 19:49:21 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-11-28 20:15:26
 */
'use strict'

// setTimeout(n=>{

// },1000)

//this

class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    changeName(name){
        this.name = name
    }
    changeAge(age){
        this.age = age
    }
    change(name,age){
        var self = this
        let fn = ()=>{

            (()=>{
                (()=>{
                    (()=>{
                        console.log(self === this)//true
                        this.changeName(name)
                        this.changeAge(age)
                    })()
                })()
            })()

            
        }
        // function fn() {
        //     this.changeName(name)
        //     this.changeAge(age)
        // }
        fn()
    }
}

var user = new User('zengjian',23)

user.change('ken',22)

console.log(user)