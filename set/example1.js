'use strict'

//let arr = [1,2,3,'5','5']
//let st = new Set(arr)
//console.log(st)//Set会自动取消另一个重复的值


// let st = new Set()
// st.add({name:'leo',qq:'514948303'})
// let bool = st.delete({name:'leo',qq:'514948303'})
// console.log(bool)//false,因为以上两个对象所处内存的位置不一样，不是===


// let st = new Set()

// let user = {name:'leo',qq:'514948303'}
// st.add(user)
// //st.add(user).add(user) //Set加入两个同样的值，只会有一个成功
// let bool = st.delete(user)
// console.log(bool)//true
// st.add(22)
// console.log(st.has(22),st.size)//true 判断他有没有

// st.clear()//清除全部set中的值
// console.log(st.size)


// let arr = ['qq514948303','forjs.org','forjs.org']
// let newArr = Array.from(new Set(arr))//让类数组的数据结构变为数组
// console.log(newArr)

// console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)


let st = new Set(['qq514948303','forjs.org','forjs.org','网名 leo'])

//st.add(NaN).add(NaN)//NaN为一个特例，虽然不等于自身，但是在set内部的算法内把两个NaN算作===


for (let v of st){
    console.log(v)
}
//Set可以直接使用for-of遍历

// let keysI = st.keys()
// for(let k of keysI){
//     console.log(k)
// }

// let valuesI = st.values()
// for(let v of valuesI){
//     console.log(v)
// }
//在Set中key和value的值是一样的


// let entriesI = st.entries()
// for(let o of entriesI){
//     console.log(o)
// }
// //返回一个数组对象，结果表示他的key和value是一样的



