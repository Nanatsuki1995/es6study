
var obj = {name:'leo',group:'javascript',_type:'student'}
//对对象属性的操作拦截
var proxy = new Proxy(obj,{
    //访问
    get:function(target,key){
        if (key[0] !== '_') {
            return Reflect.get(target,key)
            //return target[key]    //同上一样的
        }
    },
    //设置
    set:function(target,key,value){
        if (key[0] !== '_') {
            Reflect.set(target,key,value)//Reflect可以设置原始对象的默认值
            //target[key] = value //相同写法
        }
    },
    //删除
    deleteProperty:function(target,key){
        if (key[0] !== '_') {
            Reflect.deleteProperty(target,key)
            //delete target[key]  //相同写法
        }
    }
})

console.log(proxy._type,obj._type)
delete proxy._type
console.log(obj._type)

//delete proxy.group
//console.log(obj.group)

// delete proxy.name
// console.log(obj.name)

//console.log(proxy.name)
// proxy.name = 'zengjian'
// console.log(proxy.name)
// console.log(obj.name)
