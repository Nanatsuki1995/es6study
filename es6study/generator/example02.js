'use strict';
//yield 之和赋值
function * fn(_name){
    let name = yield _name; //yield 默认始终返回 undefined
    return name;
}

let it = fn('leo');
console.log(it.next());
console.log(it.next('liang')); //只能通过next方式赋值