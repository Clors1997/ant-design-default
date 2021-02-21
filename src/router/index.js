import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登陆'
    },
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/User/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/User/Register.vue')
  },
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "home" */ '../layouts/HomeLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        showInMenu: true,
        meta: {
          title: 'Home',
          icon: 'home'
        },
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: '/list',
        name: 'list',
        showInMenu: true,
        meta: {
          title: 'List',
          icon: 'unordered-list'
        },
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/iPad.vue')
      },
      {
        path: '/iphone',
        name: 'iphone',
        showInMenu: true,
        meta: {
          title: 'iPone',
          icon: 'home'
        },
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/iPhone.vue')
      },
      {
        path: '/mac',
        name: 'mac',
        showInMenu: true,
        meta: {
          title: 'Mac',
          icon: 'home'
        },
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/Mac.vue')
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // if (to.path !== '/login') {
  //   if (!localStorage.token) {
  //     return next('/admin/login')
  //   } else if (store.getters.getStorage('token') != localStorage.token) {
  //     store.commit('setStorage', { key: 'token', value: localStorage.token })
  //     //重新获取info
  //   }
  // }
  next()
})

export default router
