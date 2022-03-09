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
  path:'/test',
  component: () => import('@/views/Test'),
},

  
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
  // 志愿者管理平台
  {
    path: '/volunteerManage',
    name: 'VolunteerManage',
    component: () => import('@/views/volunteerManage/VolunteerManage'),
    redirect: 'volunteerManage/declare',
    children: [
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
  // 商户管理平台
  {
    path: '/merchantManage',
    name: 'MerchantManage',
    component: () => import('@/views/merchantManage/MerchantManage'),
    redirect: '/merchantManage/aaa',
    children: [
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
  // 超级管理员
  {
    path: '/superManage',
    name: 'SuperManage',
    component: () => import('@/views/superManage/SuperManage'),
    redirect: '/superManage/pending',
    children: [
      {
        path: 'pending',
        name: 'Pending',
        component: () => import('@/views/superManage/childComps/Pending'),
      },
      {
        path: 'povertyListManage',
        name: 'PovertyListManage',
        component: () => import('@/views/superManage/childComps/PovertyListManage'),
      }
    ]
  },


// 注册页面
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


// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  let arr = {
    消费者: "/aaa",
    消费者: "/aaa",
    志愿者: "volunteer",
    技术提供员: "/ccc",
    超级管理员: "super",
  };
  // 如果去管理页面必须判断是否已经登录了，这里没有设置token之类的，时间不足
  // 这里用vuex记录了  
  //管理页面则为true
  if (to.fullPath.indexOf("Manage") != -1) {
    let user = localStorage.getItem("user");
    console.log("去了管理页面查看是否有角色");
    if (user !== null) {
      user = JSON.parse(user)
      // 当前的角色要与去往的角色管理页面匹配,例如volunteerManage中是否有volunteer
      if (to.fullPath.indexOf(arr[user.role]) != -1) {
        console.log("角色匹配");
        return next()
      } else {
        console.log("角色不匹配");
        return next("/login")
      }
    }else{
      console.log("无角色登录");
        return next("/login")
    }
  } else {
    // 不去管理页面
    console.log("不去管理界面");
    return next()
  }
})

export default router
