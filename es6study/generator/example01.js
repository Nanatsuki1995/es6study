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
for(let v of it){
    console.log(v);
}