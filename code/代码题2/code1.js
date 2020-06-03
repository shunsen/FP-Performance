const { Maybe, Container } = require('./common2')
const _ = require('lodash')
const fp = require('lodash/fp')


// 使用 fp.add(x,y)和 fp.map(f,x)创建一个能让 functor 里的值增加的函数 ex1

let maybe = Maybe.of([5, 6, 1])
/**
 * 
 * @param {要增加值的函子} maybe 
 * @param {要增加的值} n 
 */
let ex1 = function (maybe, n) {
    
    return maybe.map(function (arr) {
        
        return fp.map(function (item) {
            
            let res = fp.add(item, n)
            
            return res
        }, arr)
        
    })
}

let res3 = ex1(maybe,2);
console.log(res3);