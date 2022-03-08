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
  path: '/changanjie',
  name: 'ChangAnJie',
  component: () => import('@/views/changanjie/ChangAnJie'),
},

{
  path: '/team',
  name: 'Team',
  component: () => import('@/views/team/Team'),
},
{
  path: '/product',
  name: 'Product',
  component: () => import('@/views/product/Product'),
},
// 管理页面
{
  path: '/volunteerManage',
  name: 'VolunteerManage',
  component: () => import('@/views/volunteerManage/VolunteerManage'),
  redirect: 'volunteerManage/declare',
  children:[
    {
      path: 'declare',
      name: 'Declare',
      component: () => import('@/views/volunteerManage/childComps/Declare'),
    },
    {
      path: 'povertyList',
      name: 'PovertyList',
      component: () => import('@/views/volunteerManage/childComps/PovertyList'),
    }
  ]
},
{
  path: '/merchantManage',
  name: 'MerchantManage',
  component: () => import('@/views/merchantManage/MerchantManage'),
  redirect: 'merchantManage/aaa',
  children:[
    {
      path: 'aaa',
      name: 'aaa',
      component: () => import('@/views/merchantManage/childComps/aaa'),
    },
    {
      path: 'bbb',
      name: 'bbb',
      component: () => import('@/views/merchantManage/childComps/bbb'),
    }
  ]
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
