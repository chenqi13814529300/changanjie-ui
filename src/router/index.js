import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentRegister from '@/views/register/StudentRegister'
import CustomerRegister from '@/views/register/CustomerRegister'

Vue.use(VueRouter)

const routes = [
  {
    path: '/studentRegister',
    name: 'StudentRegister',
    component: StudentRegister
  },

  {
    path: '/customerRegister',
    name: 'CustomerRegister',
    component: CustomerRegister
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
