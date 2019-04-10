// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


/**
 * 完整引入elementui，所有的组件都可以使用
 */
import ElementUI from "element-ui"; //引入组件库
import 'element-ui/lib/theme-chalk/index.css'; //引入组件库的css文件

//声明使用组件库
Vue.use(ElementUI);






new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
