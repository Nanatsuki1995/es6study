var arr = [22,33,44,55]

var value = arr.find(function (value,index,arr) {//arr.findIndex()会返回符合条件的下标
    return value > 33 //find方法只会返回一个符合条件的值
})

console.log(value)

var arr2 = [22,NaN]

//console.log(arr2.indexOf(NaN)) //-1 找不到值

console.log(arr2.findIndex(function (v) {
    return Object.is(NaN,v)
}))
