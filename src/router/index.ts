import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../view/home/index.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../view/login/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: false,
  // 切换页面，回到顶部
  scrollBehavior: () => ({ left: 0, top: 0 })
})



export default router