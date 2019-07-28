import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/bootNav'
    },
      {
          path: '/index',
          name: 'index',
          //懒加载
          component:() => import('./views/index.vue')
      },
      {
          path: '/login',
          name: 'Login',
          component: Login
      },
      {path:'/register',name:'register',
          component: () => import('./views/Register.vue')},

      {path:'/bootNav',name:'bootNav' ,component:()=>import('./views/BootNav.vue'),
        children:[
          {path:'index',name: 'index',component:()=>import('./views/index.vue')},
            {path:'list',name: 'list',component:()=>import('./views/List.vue')},
            {path:'search',name: 'search',component:()=>import('./views/Search.vue')},
            {path:'mine',name: 'mine',component:()=>import('./views/Mine.vue'),
                meta:{
                    requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
                }},
            {path:'cart',name: 'cart',component:()=>import('./views/Cart.vue'),
                meta:{
                    requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
                }}
      ]
      }
  ]
})
