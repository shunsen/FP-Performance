const { cars } = require('./common1')
const _ = require('lodash')
const fp = require('lodash/fp')

// 使用函数组合fp.flowRight重新实现下面这个函数
// let isLastInStock = function(cars){
//     // 获取最后一条数据
//     let last_car = fp.last(cars)
//     console.log(last_car);

//     // 获取最后一条数据的in_stock属性值
//     return fp.prop('in_stock',last_car )
// }


// 改造后
let isLastInStock = function (cars) {
    return fp.flowRight(fp.prop('in_stock'),fp.last)(cars)
}


console.log(isLastInStock(cars));