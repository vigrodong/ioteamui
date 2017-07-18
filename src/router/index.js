import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Show from '@/components/show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/edit',
      name: 'show',
      component: Show
    }
  ]
})
