<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import type { Film } from '@/store/types';

  const { film } = defineProps<{ film: Film }>();
  const poster = ref('');
  // URL для постера из api больше не существует и для постера используется
  // случайная картинка из свойств film.frames или film.screenshots
  if (film.frames) {
    poster.value = film.frames[Math.floor(Math.random() * film.frames.length)];
  } else if (film.screenshots) {
    poster.value = film.screenshots[Math.floor(Math.random() * film.screenshots.length)];
  }
</script>

<template>
  <article class="film">
    <div class="film__poster">
      <p v-if="!poster" class="film__poster-none" v-html="film.title" />
      <img v-else :src="poster" :alt="film.title" class="film__poster-img" />
    </div>
    <div class="film__wrapper">
      <RouterLink :to="`/film/${film.id}`" class="film__link">
        <h3 class="film__title" v-html="film.title" />
      </RouterLink>
      <div v-show="film.collapse.duration" class="film__length">
        <p class="film__length-text">{{ film.collapse.duration?.toString() }}</p>
        <img src="@/assets/length.svg" alt="" class="film__length-image" />
      </div>
      <div class="film__information">
        <p class="film__year-genre">{{ film.year }}, {{ film.genres.join(', ') }}</p>
        <p v-show="film.directors?.length" class="film__directors">
          Режиссёр: {{ film.directors?.join(', ') }}
        </p>
        <div v-show="film.actors" class="film__actors">
          <div class="film__actors-text">Актёры:</div>
          <div class="film__actors-list">{{ film.actors?.join(', ') }}</div>
        </div>
        <p v-show="film.description" class="film__description">{{ film.description }}</p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .router-link-active {
    pointer-events: none;
  }

  .film {
    display: flex;
    background-color: #4d4747;

    &__link {
      display: block;
      width: max-content;
    }

    &__poster {
      min-width: 168px;
      width: 100%;
      max-width: 168px;
      min-height: 168px;
      background-color: #c4c4c4;
      text-align: center;
      align-content: center;
      color: #000000;
      font-weight: 400;
      font-size: 18px;

      &-none {
        padding: 0 20px;
      }

      &-img {
        width: max-content;
      }
    }

    &__wrapper {
      position: relative;
      padding: 24px;
      flex-grow: 1;
    }

    &__title {
      font-size: 36px;
      margin-bottom: 12px;
    }

    &__length {
      position: absolute;
      top: 24px;
      right: 0;
      width: 184px;
      height: 30px;
      color: #000000;
      background-color: #c4c4c4;
      align-content: center;
      clip-path: polygon(6px 0, 100% 0, 100% 100%, 0 100%);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;

      &-text {
        text-align: center;
        text-transform: uppercase;
      }

      &-image {
        margin-right: 24px;
      }
    }

    &__information {
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      color: #988f8f;
    }

    &__year-genre {
      margin-bottom: 8px;
    }

    &__directors {
      margin-bottom: 10px;
    }

    &__actors {
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin-bottom: 15px;

      &-list {
        font-weight: 400;
        font-size: 12px;
        line-height: 1.33333;
        color: #ffffff;
        text-transform: none;
        display: inline-block;
        width: 100%;
      }
    }

    &__description {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      color: #ffffff;
      text-transform: none;
    }
  }
</style>
