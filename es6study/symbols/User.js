'use strict';

let getName = Symbol('getName')

module.exports = class User{
    [getName](){
        return 'zengjian'
    }

    print(){
        console.log(this[getName]())
    }
}