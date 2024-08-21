<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  defineEmits(['vnode-unmounted']);
</script>

<template>
  <main class="page">
    <div class="container">
      <h2 class="page__title">Ошибка 404</h2>
      <RouterLink to="/" class="page__link">Вернутся к списку фильмов</RouterLink>
      <hr class="page__line" />
      <div class="page__empty">Запрошенная страница не существует или была удалена</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .page {
    &__title {
      font-weight: 500;
      font-size: 25px;
      margin-bottom: 25px;
    }

    &__line {
      border: 1px solid #c4c4c4;
      margin: 0 0 40px;
    }

    &__link {
      display: inline-block;
      font-weight: 400;
      font-size: 20px;
      color: rgba(255, 82, 82, 0.98);
      margin-bottom: 20px;
      background-image: url('@/assets/arrow.svg');
      background-repeat: no-repeat;
      background-position: left;
      padding-left: 32px;

      &:hover {
        text-decoration: underline;
        text-decoration-skip-ink: none;
      }
    }

    &__empty {
      font-weight: 500;
      font-size: 22px;
    }
  }
</style>
