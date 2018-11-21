'use strict'

function * fn(){
    let qq
    try{
        qq = yield ff;//yield默认情况下返回undefined值，不会抛出异常
    }catch(e){
        console.log('qq have error!')
    }
    
    console.log(qq);
}

let g = fn()

g.next();
g.next('qq 123456');
//g.throw('error!')