'use strict'; //严格模式：使用这个语句后就可以使用ES6中的语法

function * fn(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let it = fn();

//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//generator函数返回结果有两个值，一个表示函数的返回值，一个表示是否完成了返回了全部的yield

for(let v of it){
    console.log(v);
}
//for-of进行遍历的时候只会遍历done为false的值