
const { cars } = require('./common1')
const _ = require('lodash')
const fp = require('lodash/fp')

// 使用帮助函数_average 重构 averageDollarValue,使用函数组合的方式实现
let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length;
    // <-无需改动
};

// let averageDollarValue = function (cars) {
//     let dollar_values = fp.map(function (car) {
//         return car.dollar_value;
//     }, cars);
//     console.log(dollar_values);

//     return _average(dollar_values);
// };

// 重构后

let averageDollarValue = function (cars) {
    let res = fp.flowRight(_average, fp.map(car=> car.dollar_value))
    return res(cars);
}

console.log(averageDollarValue(cars));