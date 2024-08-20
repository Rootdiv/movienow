<template>
  <div class="preloader">
    <img src="@/assets/loader.svg" alt="Загрузка..." class="preloader__img" />
  </div>
</template>

<style lang="scss" scoped>
  @keyframes rotation {
    to {
      transform: rotate(360deg);
    }
  }

  .preloader {
    position: absolute;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;

    &__img {
      transform: rotate(0);
      animation: rotation 1.2s infinite linear;
    }
  }
</style>
