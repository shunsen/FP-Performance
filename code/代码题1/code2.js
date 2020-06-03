
const { cars } = require('./common1')
const _ = require('lodash')
const fp = require('lodash/fp')

// 使用 fp.flowRight(),fp.prop()和 fp.first()获取第一个 car 的 name;

let isFirstInStock = function (cars) {
    return fp.flowRight(fp.prop('name'),fp.first)(cars)
}


console.log(isFirstInStock(cars));