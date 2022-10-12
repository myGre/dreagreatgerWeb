import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../view/home/index.vue"),
    meta: { 'nav': 'home' }
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import("../view/tag/index.vue"),
    meta: { 'nav': 'tag' }
  },
  {
    path: '/inforCard',
    name: 'inforCard',
    component: () => import("../view/inforCard/index.vue"),
    meta: { 'nav': 'inforCard' }
  },
  {
    path: '/messageBoard',
    name: 'messageBoard',
    component: () => import("../view/messageBoard/index.vue"),
    meta: { 'nav': 'messageBoard' }
  },
  {
    path: '/link',
    name: 'link',
    component: () => import("../view/link/index.vue"),
    meta: { 'nav': 'link' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../view/about/index.vue"),
    meta: { 'nav': 'about' }
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