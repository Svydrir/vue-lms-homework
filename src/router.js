import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthPage from './pages/AuthPage';
import SchedulePage from './pages/SchedulePage';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      name: 'authPage',
      component: AuthPage,
    },
    {
      path: '/schedule',
      name: 'schedulePage',
      component: SchedulePage,
    },
  ],
});

export default router;
