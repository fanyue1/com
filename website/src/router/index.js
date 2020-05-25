import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import homepage from '@/components/homepage/homepage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/main/home"
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
        {
          path:'/main/home',
          name:'home',
          component:homepage
        }
      ]
    }
  ]
})
