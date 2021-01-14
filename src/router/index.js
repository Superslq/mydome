import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({

  routes: [{
    path: '/',
    component: () => import('../components/lavout'),
    children: [
      {
      path: 'student',
      component: () => import('../components/student')
      },
      {
      path: 'student/add',
      component: () => import('../components/studentinform')
      },

      {
      path: 'course',
      component: () => import('../components/course')
      }

  ]

  }]

})
