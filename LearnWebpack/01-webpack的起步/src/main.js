// 使用common.js的模块化规范
const {add, mul} = require('./mathutil')

console.log(add(20, 30));
console.log(mul(20, 30));

//使用ES6模块化规范
import {name, age} from "./info";

console.log(name, age);
