<script setup lang="ts">
  import FilmItem from '@/components/FilmItem.vue';
  import PreLoader from '@/components/PreLoader.vue';
  import { useStore } from '@/store';
  import { onMounted, computed } from 'vue';
  import { useRoute, RouterLink } from 'vue-router';

  const route = useRoute();
  const store = useStore();
  const status = computed(() => store.state.film.status);
  const film = computed(() => store.state.film.item);

  onMounted(() => {
    store.dispatch('film/fetchFilm', route.params.id);
  });

  defineEmits(['vnode-unmounted']);
</script>

<template>
  <main class="film-page">
    <div class="container">
      <h2 class="visually-hidden">Страница фильма</h2>
      <RouterLink to="/" class="film-page__link">Назад к списку</RouterLink>
      <hr class="film-page__line" />
      <PreLoader v-if="status === 'loading'" />
      <FilmItem v-else-if="film" :film="film" />
      <div v-else class="film-page__empty">К сожалению, по вашему запросу ничего не найдено...</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .film-page {
    &__line {
      border: 1px solid #c4c4c4;
      margin: 0 0 40px;
    }

    &__link {
      display: inline-block;
      font-weight: 400;
      font-size: 20px;
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: rgba(255, 82, 82, 0.98);
      margin-bottom: 20px;
      background-image: url('@/assets/arrow.svg');
      background-repeat: no-repeat;
      background-position: left;
      padding-left: 32px;
    }

    &__empty {
      font-weight: 500;
      font-size: 32px;
    }
  }
</style>
