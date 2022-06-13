// window.onload 方法会等待页面加载完毕后被调用
window.onload = () => {
  new Vue({
    data: {
      title: 'ToDoList'
    }
  }).$mount('#app')
}