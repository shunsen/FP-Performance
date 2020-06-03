const { Maybe, Container } = require('./common2')
const _ = require('lodash')
const fp = require('lodash/fp')

// 实现一个函数 ex2,能够使用 fp.first 获取列表的第一个元素

let xs = Container.of(['do','ray','me','so','la','ti','do'])
let ex2 = function(functor){
    return functor.map(function(value){
        return fp.first(value)
    })
}
let res = ex2(xs);
console.log(res._value);
