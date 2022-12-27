<script lang="ts" setup>
  import { useRouter } from '@/hooks/router';
  import Navbar from '@/components/Navbar/index.vue';

  const router = useRouter();
  const jumpDetail = () => {
    router.push('/pagesB/detail/index?page=1&limit=20');
  };
</script>
<template>
  <view>
    <navbar />
    <view> Test2 </view>
    <u-button type="primary" @click="jumpDetail">Detail → </u-button>
  </view>
</template>
<style scoped></style>
