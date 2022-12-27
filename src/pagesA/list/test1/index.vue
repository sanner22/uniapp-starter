<script lang="ts" setup>
  import { useRouter } from '@/hooks/router';

  const router = useRouter();
  const jumpTest2 = () => {
    router.push('/pagesA/list/test2/index?id=256');
  };
</script>
<template>
  <view class="_u_center"> Test1 </view>
  <view class="_u_center">
    <u-button type="primary" @click="jumpTest2">Test2 → </u-button>
  </view>
</template>
<style scoped></style>
