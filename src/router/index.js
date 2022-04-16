import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {

      path: '/',
      name: '',
      component: () => import('../pages/index.vue'),
    },
    {
      // 輸入亂碼網址時重新導向到首頁
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      top: 0,
    };
  },
  routes,
});

export default router;

