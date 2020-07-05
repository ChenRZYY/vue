<template>
  <div>
    <h2 class="title">{{name}}</h2>
    <button>按钮</button>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        name: 'xiaofxia',
        message: 'Hello WebPack 张三'
      }
    },
    methods: {
      btnClick() {
      }
    }
  }
</script>

<style scoped>
  .title {
    color: bisque;
  }
</style>
