/**
* Created by aresn on 16/6/20.
*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import VueComponent from '../index';
import "../src/styles/layout.less";

Vue.use(VueRouter);
Vue.use(VueComponent);

// 生成提示信息
Vue.config.productionTip = false;

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/simple-box',
      component: () => import('./components/SimpleBox.vue')
    }
  ]
});

export default new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});