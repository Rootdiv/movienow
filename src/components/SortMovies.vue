<script setup lang="ts">
  import { ref } from 'vue';

  const sortBy = ref('');

  const emit = defineEmits(['selectSort']);

  const changedSelect = () => {
    emit('selectSort', sortBy.value);
  };
</script>

<template>
  <div class="sort">
    <label class="sort__name custom-label">
      <input
        type="radio"
        value="title"
        v-model="sortBy"
        @change="changedSelect"
        class="custom-select"
      />
      Отсортировать по названию
    </label>
    <label class="sort__year custom-label">
      <input
        type="radio"
        value="year"
        v-model="sortBy"
        @change="changedSelect"
        class="custom-select"
      />
      Отсортировать по году
    </label>
  </div>
</template>

<style lang="scss" scoped>
  .sort {
    font-weight: 400;
    font-size: 16px;
    color: #c4c4c4;
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .custom {
    &-label {
      cursor: pointer;
      position: relative;
    }

    &-select {
      appearance: none;
      outline: none;
      z-index: -1;
      width: 0;
      height: 0;
      margin-right: 28px;
      align-content: center;

      &::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
        top: -1px;
        border: 1px solid #c4c4c4;
      }

      &:checked::before {
        background-color: #ff5252;
      }

      &:focus::before {
        border: 1px solid #ff5252;
      }

      &:checked::after {
        content: '';
        position: absolute;
        left: 4px;
        top: 4px;
        width: 12px;
        height: 6px;
        border-left: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
        transform: rotate(-45deg);
      }
    }
  }
</style>
