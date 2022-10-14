import Vue from 'vue'
import VueRouter from 'vue-router'
// // 引入组件
import LayOut from '../views/LayOut.vue'
import FirstEcharts from '../views/main/FirstEcharts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:LayOut,
    children:[
      {
        path: '',
        name: 'FirstEcharts',
        component:FirstEcharts,
      },
      {
        path: 'SecEcharts',
        name: 'SecEcharts',
        component: () =>import("../views/main/SecEcharts.vue"),
      },
      {
        path: 'ThirdEcharts',
        name: 'ThirdEcharts',
        component: () =>import("../views/main/ThirdEcharts.vue"),
      },
      {
        path: 'FourthEcharts',
        name: 'FourthEcharts',
        component: () =>import("../views/main/FourthEcharts.vue"),
        meta: {
          isLogin: true
        }
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
