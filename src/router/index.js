import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/cabin',
    name: 'Cabin',
    component: () => import('../views/Cabin.vue')
  },
  {
    path: '/modular',
    name: 'Modular',
    component: () => import('../views/Modular.vue')
  },
  {
    path: '/pavilion',
    name: 'Pavilion',
    component: () => import('../views/Pavilion.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
