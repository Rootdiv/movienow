<script setup lang="ts">
  import FilmItem from '@/components/FilmItem.vue';
  import PreLoader from '@/components/PreLoader.vue';
  import { useStore } from '@/store';
  import { computed } from 'vue';

  const store = useStore();
  const status = computed(() => store.state.movies.status);
  const movies = computed(() => store.state.movies.items);
  store.dispatch('movies/fetchMovies');
</script>

<template>
  <main class="main">
    <div class="container">
      <h2 class="main__title">Фильмы</h2>
      <hr class="main__line" />
      <PreLoader v-if="status === 'loading'" />
      <ul v-else class="main__films">
        <li class="main__films-item" v-for="film in movies" :key="film.id">
          <FilmItem :film="film" />
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .main {
    &__title {
      font-weight: 500;
      font-size: 32px;
      margin-bottom: 16px;
    }

    &__line {
      border: 1px solid #c4c4c4;
      margin: 0 0 40px;
    }

    &__films {
      &-item {
        position: relative;
        top: 0;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 24px;

        &:hover {
          top: -8px;
          box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.35);
          transition: all 0.36s ease-in-out;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
