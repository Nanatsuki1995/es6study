'use strict'

var obj = {
    name:'ken',
    qq:'514948303',
    'full name':'zeng jian'
}

//let map = new Map()
// map.set(obj,'very good!')
// map.set(12,'number = 12')

// let v = map.get(obj)
// console.log(v)
// console.log(map.get(12))
// console.log(map.size)
// map.delete(12)
// console.log(map.size)
// console.log(map.has(obj))

// map.set(NaN,'what!')
// map.set(NaN,'what!2')
// console.log(map.get(NaN)) //在map中认为NaN是相等的
//map.clear()

let map = new Map([
    ['name','ken'],
    ['qq','514948303']
])

//console.log(map)
console.log(map.get('name'),map.get('qq'))

let keys = map.keys()//是一个iterator，可以for-of进行遍历
//console.log(keys)

for(let k of keys){
    console.log(k)
}

let values = map.values()

for(let v of values){
    console.log(v)
}

let entries = map.entries()

for(let o of map){
    console.log(o)
}

for(let o of entries){
    console.log(o)
}


console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)//true
console.log(Map.prototype[Symbol.iterator] === Map.prototype.values)//false
console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries)//true

var me = {
    name:'jian'
}
//map自身用于的方法进行遍历
map.forEach(function (k,v) {
    console.log(this.name,k,v)
},me)