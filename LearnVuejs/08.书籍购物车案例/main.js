const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "算法导论",
        date: '2020-4-19',
        price: 88.00,
        count: 1
      },
      {
        id: 2,
        name: "小灰算法",
        date: '2020-4-19',
        price: 88.00,
        count: 1
      },
      {
        id: 3,
        name: "数据结构",
        date: '2020-4-19',
        price: 76.00,
        count: 1
      },
      {
        id: 4,
        name: "Python",
        date: '2020-4-19',
        price: 108.00,
        count: 1
      },
    ],

  },
  methods: {
    getFinalPrice(price) {
      return '￥' + price.toFixed(2)
    },
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }

  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {

      //1.普通的for循环
      // let totalPrice = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      //2.for(let i in books)
      // let totalPrice = 0
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      //   console.log(i);
      // }
      // return totalPrice

      // 3.for(let )  直接遍历拿到item
      // let totalPrice = 0
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice

      // 高级用法：reduce
      return this.books.reduce(function (pre, book) {
        return pre + book.price * book.count
      }, 0)
    }
  }
})

/*高阶函数：filter/map/reduce*/


const nums = [10, 20, 40, 444, 111, 888, 990, 63, 98]

/*1.filter中的回调函数，必须是一个bool值:true-加入新数组,false--不加入*/
let newNums = nums.filter(function (n) {
  return n <= 100
})
console.log(newNums);

/*2.map函数的使用*/
let newNums2 = newNums.map(function (m) {
  return m * 2
})
console.log(newNums2);

/*3.reduce的使用;reduce：对数组中的所有内容进行汇总*/
let total = newNums2.reduce(function (preValue, n) {
  return preValue + n
}, 0)
console.log(total);

/*高级版*/
let total2 = nums.filter(function (n) {
  return n > 100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue, n) {
  return preValue + n
}, 0)
console.log(total2);

/*高阶版(箭头函数)*/
let total3 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n, 0)

console.log(total3);

//旧方法
// /*1.取出来所有小于100的数*/
// let newNums = []
// for (let n of nums) {
//   if (n < 100) {
//     newNums.push(n)
//   }
// }
//
// /*2.所有小于100的数全部*2*/
// let new2Nums = []
// for (let n of newNums) {
//   new2Nums.push(n)
// }
//
// /*3.将所有new2Num里面的数字全部相加*/
// let total = 0
// for (let n of new2Nums) {
//   total += n
// }




