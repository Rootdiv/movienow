<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<template>
  <header class="header">
    <h1 class="header__title">#movienow</h1>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
  .header {
    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.28);
    background-color: rgba(250, 40, 40, 0.98);
    align-content: center;
    width: 100%;
    height: 100px;
    margin: 0 0 40px;

    &__title {
      font-size: 48px;
      letter-spacing: 0.21em;
      text-transform: uppercase;
      text-align: center;
      color: #000;
    }
  }
</style>
