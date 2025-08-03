// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DrinkStatusPage from '@/pages/DrinkStatusPage.vue'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: DrinkStatusPage,
  //   meta: { requiresAuth: true }
  // }
  {
    path: '/drink-status',
    name: 'DrinkStatus',
    component: DrinkStatusPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = Boolean(localStorage.getItem('authToken'))
  if (to.meta.requiresAuth && !isAuth) {
    // 1) 단순히 접근 차단만 하고 싶다면
    // return next(false)

    // 2) 아니면 “로그인이 필요합니다” 모달 플래그를 쓸 수 있도록
    // DrinkStatusPage 컴포넌트에 쿼리 파라미터를 전달
    return next({ name: 'Home', query: { loginRequired: '1' } })
  }
  next()
})

export default router
