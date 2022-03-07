import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentRegister from '@/views/register/StudentRegister'
import CustomerRegister from '@/views/register/CustomerRegister'
import VolunteerRegister from '@/views/register/VolunteerRegister'
import MerchantRegister from '@/views/register/MerchantRegister'
import TechnicistRegister from '@/views/register/TechnicistRegister'

import Login from '@/views/login/Login'




Vue.use(VueRouter)

const routes = [
{
  path: '/',
  name: 'Home',
  component: () => import('@/views/home/Home'),
},

{
  path: '/map',
  name: 'Map',
  component: () => import('@/components/common/Map'),
},






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
  {
    path: '/volunteerRegister',
    name: 'VolunteerRegister',
    component: VolunteerRegister
  },
  {
    path: '/merchantRegister',
    name: 'MerchantRegister',
    component: MerchantRegister
  },
  
  {
    path: '/technicistRegister',
    name: 'TechnicistRegister',
    component: TechnicistRegister
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
