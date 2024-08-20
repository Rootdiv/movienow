import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FilmView from '@/views/FilmView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // Если :id не передан, возвращаем на главную
      path: '/film',
      redirect: '/',
    },
    {
      // Путь будет найден, только если :id состоит из цифр
      path: '/film/:id(\\d+)',
      component: FilmView,
    },
    {
      // Путь для ошибки 404
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
});

export default router;
