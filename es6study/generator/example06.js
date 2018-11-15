'use strict';

function asyncF(name){
    return new Promise(function (resolve){
     setTimeout(function (){   //setTimeout 延迟执行 这里是为了模拟异步场景
        resolve('my name is ' + name)
        })   
    });
}

function  sum(a,b){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(a + b)
        })
    })
}

function * fn(name){

    /*if (yield asyncF('leo')){

    }*/

    if ((yield sum(3,5)) > 6){
        console.log(yield asyncF(name))
    }else{
        console.log('error')
    }

    /*for(let i =0;i<10;i++){
        console.log(yield asyncF('leo'+i))
    }*/

}

let  gf = fn('zengjian')

function exec(gf,value){
    let result = gf.next(value);  //会得到一个promise
    if(!result.done){   //!false=true
        if(result.value instanceof Promise){   //true
            result.value.then(function(v){
                exec(gf,v)
            })
        }else{
            exec(gf,result.value)
        }
    }
}
exec(gf);

// console.log(gf.next(),1234)
// console.log(gf.next(),1234)
// console.log(gf.next(),1234)
// console.log(gf.next(),1234)




// let a=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('aaa')
//     })
// })

// a.then(function(c){
//     console.log(c,222222)
// })


// console.log(1)

// setTimeout(()=>{console.log(2)},0)

// console.log(3)