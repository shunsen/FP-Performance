const { Maybe, Container } = require('./common2')
const _ = require('lodash')
const fp = require('lodash/fp')

// 实现一个函数 ex3,使用 safeProp 和 fp.first 找到 user 的名字的首字母

let safeProp = fp.curry(function(x,o){
    return Maybe.of(o[x])
})

let user = {
    id:2,
    name:"Albert"
}

let ex3 = function(user){
    return safeProp('name')(user).map(o=>fp.first(o))
}
console.log(ex3(user));
