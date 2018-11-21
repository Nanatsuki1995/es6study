// Array.from//类似数组的数据结构转为数组
// Array.of//通过多个参数生成数组

// [].copyWithin(target,start,end) //通过自身数据，在指定位置 替换 数据

// [].find / [].findIndex

// [].fill

// var arr = Array.from({   //可以把具有长度属性的对象转换为数组
//     '0':'qq 514948303',
//     '1':'ken',
//     'length':2
// },function (item,index) {
//     return item + '---' + index
// })

// console.log(arr)

var set = new Set(['me','bood','ken'])
console.log(Array.from(set))    //可以把set对象转换为数组
