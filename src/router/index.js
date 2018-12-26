import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../sections/Chat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/conversation/:id',
      name: 'Chat',
      component: Chat
    }
  ]
})
