'use strict'

class UserGroup{

    constructor(users){
        /*
            users:{'ken':'514948303','zengjian':'111111111'}
        */


        //json {name:xxx}
        this.users = users
    }

    [Symbol.iterator](){
        let self = this
        let i = 0
        const names = Object.keys(this.users)
        const length = names.length

        //iterator
        //return iterator这个对象
        return {
            next:function () {
                let name = names[i++]
                let qq = self.users[name]
                return {value: {name,qq} ,done:i > length}
            }
        }
    }
}

let group = new UserGroup({'ken':'514948303','zengjian':'111111111'})

let i = 0
for(let user of group){
    // if (i===0) {
    //     i++
    //     continue
    // }
    console.log(user)
    break
}

// let iterator = group[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())