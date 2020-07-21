import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthPage from './pages/AuthPage';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      name: 'authPage',
      component: AuthPage,
    },
  ],
});

export default router;
