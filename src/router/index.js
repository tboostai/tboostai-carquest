import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/test', name: 'test', component: () => import('../views/Test.vue') },
  { path: '/car', name: 'car', component: () => import('../views/Car.vue') },
  { path: '/details/:id', name: 'details', component: () => import('../views/Details.vue') },
  { path: '/favorites', name: 'favorites', component: () => import('../views/Favorites.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
