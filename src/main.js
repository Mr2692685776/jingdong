import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import setAxios from './setAxios'

setAxios();
Vue.config.productionTip = false
Vue.prototype.$axios=axios

//看to是够需要权限，否有token,如果没有token，跳转到登录页面
router.beforeEach((to,from,next)=>{
    //设置token
   store.commit('setToken',window.localStorage.getItem("token"))
    // 是否需要权限
    if (to.meta.requireAuth) {
      if(store.state.token){
        next()
      }else {
        next({
            path:'/login',
            query:{redirect:to.fullPath}
        })
      }
    }else {
      next()
    }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
