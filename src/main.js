
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import about from './components/about.vue'
import home from './components/home.vue'
import message from './components/message.vue'
import messageDetail from './components/messagedetail.vue'
import news from './components/news.vue'
//声明使用
Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {path: '/', component: about},
    {path: '/about', component: about},
    {
      path: '/home',
      component: home,
      children: [
        { path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message,
          children: [
            {
              path: 'mdetail/:id',
              component: messageDetail
            }
          ]

        }
      ]

    }
  ]
})

//创建vm
new Vue({
  el: '#app',
  //组件映射 标签
  render: h => h(App),
  router
})
