// 使用common.js的模块化规范
const {add, mul} = require('./js/mathutil')

console.log(add(20, 30));
console.log(mul(20, 30));

//使用ES6模块化规范
import {name, age} from "./js/info";

console.log(name, age);
