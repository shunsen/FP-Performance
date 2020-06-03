const { Maybe, Container } = require('./common2')
const _ = require('lodash')
const fp = require('lodash/fp')

// 使用 Maybe 重写 ex4,不要有 if 语句
let ex4 = function (n) {
  if (n) {
    return parseInt(n);
  }
};
// 重写后
let _ex4 = function(n){
    return Maybe.of(n).map(parseInt)._value
}

console.log(ex4('1a'));
console.log(_ex4('1a'));
