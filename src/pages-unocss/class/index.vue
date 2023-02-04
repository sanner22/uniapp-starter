<script setup lang="ts">
  import { computed, ref } from 'vue';

  const flag = ref(false);
  const onChange = () => {
    flag.value = !flag.value;
  };

  const c1 = computed(() => {
    return { 'uno-bg-blue-600:80': flag.value, 'uno-text-green-600/80': !flag.value };
  });

  const c2 = computed(() => {
    return [
      flag.value ? 'uno-bg-blue-600:80' : 'uno-bg-red-600:80',
      !flag.value ? 'uno-text-yellow-600/80' : 'uno-text-green-600/80',
    ];
  });
</script>

<template>
  <tm-app>
    <view class="uno-p-2">
      <button class="uno-w-300rpx uno-p-2 uno-bg-green-200 uno-text-center uno-mb-15px" @click="onChange">
        change flag
      </button>

      <view class="uno-mb-3 uno-text-xs" :class="{ 'uno-bg-blue-600:80': flag, 'uno-text-green-600/80': !flag }">
        {{ c1 }}
      </view>
      <view class="uno-mb-3 uno-text-xs" :class="c1">
        {{ c1 }}
      </view>

      <view class="uno-mb-3 uno-text-xs" :class="[!flag ? 'uno-text-yellow-600/80' : 'uno-text-green-600/80']">
        {{ c2 }}
      </view>
      <view class="uno-mb-3 uno-text-xs" :class="[!flag ? 'uno-bg-blue-600:80' : 'uno-bg-red-600:80']">
        {{ c2 }}
      </view>
      <view
        class="uno-mb-3 uno-text-xs"
        :class="[
          !flag ? 'uno-bg-blue-600:80' : 'uno-bg-red-600:80',
          !flag ? 'uno-text-yellow-600/80' : 'uno-text-green-600/80',
        ]"
      >
        {{ c2 }}
      </view>
    </view>
  </tm-app>
</template>

<style lang="scss" scoped></style>
