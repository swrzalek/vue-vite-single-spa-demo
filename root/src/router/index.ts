import { createRouter, createWebHistory } from 'vue-router'
import AppDirectoryView from "@/views/AppDirectoryView.vue";
import AppLayout from "@/views/AppLayout.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
       path: '/', redirect: '/login',
    },
    {
      path: '/app-directory',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'appDirectory',
          component: AppDirectoryView
        }
      ]
    },
    {
      // This route is an SPA app
      path: '/app/:pathMatch(.*)*',
      component: AppLayout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});
export default router
