// 1.使用common.js的模块化规范
const {add, mul} = require('./js/mathutil')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6模块化规范
import {name, age} from "./js/info";

console.log(name, age);

// 3.依赖css文件
require('./css/normal.css')
// 4.依赖less文件
require('./css/special.less')
document.writeln('我是夏小凡')

// 5.使用Vue进行开发
import Vue from "vue"
// import App from "./vue/app"
import App from "./vue/App.vue";

new Vue({
  el: '#app',
  // 会替换index里面的body里面的内容
  // template: `
  //   <div>
  //     <h2>{{name}}</h2>
  //     <button>按钮</button>
  //     <h2>{{message}}</h2>
  //   </div>
  // `,
  // data: {
  //   name: 'xiaofxia',
  //   message: 'Hello WebPack'
  // },
  // methods: {
  //   btnClick() {
  //   }
  // }

  template: '<App></App>',
  components: {
    App
  }
})
