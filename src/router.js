import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthPage from './pages/AuthPage';
import SchedulePage from './pages/SchedulePage';
import LessonPage from './pages/LessonPage';

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
    {
      path: '/lesson',
      name: 'lessonPage',
      component: LessonPage,
    },
  ],
});

export default router;
