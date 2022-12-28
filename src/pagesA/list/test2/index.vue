<script lang="ts" setup>
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import { useRouter } from '@/hooks/router';

  const router = useRouter();
  const jumpDetail = () => {
    router.push('/pagesB/detail/index?page=1&limit=20');
  };
</script>

<template>
  <u-navbar title="test2" bg-color="#f6f6f6" placeholder auto-back></u-navbar>

  <app-provider>
    <view> Test2 </view>
    <u-button type="primary" @click="jumpDetail">Detail → </u-button>
  </app-provider>
</template>

<style lang="scss" scoped></style>
