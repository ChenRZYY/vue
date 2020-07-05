export default {
  template: `
    <div>
      <h2>{{name}}</h2>
      <button>按钮</button>
      <h2>{{message}}</h2>
    </div>
  `,
  data() {
    return {
      name: 'xiaofxia',
      message: 'Hello WebPack 李四'
    }
  },
  methods: {
    btnClick() {
    }
  }
}
