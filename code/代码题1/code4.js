
const { cars } = require('./common1')
const _ = require('lodash')
const fp = require('lodash/fp')

// 使用 flowRight 写一个 sanitizeNames()函数,返回一个下划线连接的小写字符串,把数组中的 name 转换为这种形式:
// 例如:sanitizeNames(["Hello World"])=>["hello_world"]

let sanitizeNames = function (cars) {

    function resolve(car) {
        let compose1 = fp.flowRight(fp.join('_'), fp.map(item => item.toLowerCase()), fp.split(' '), fp.prop('name'))
        car.name = compose1(car)
        return car
    }
    
    return fp.map(resolve, cars)
}

console.log(sanitizeNames(cars));