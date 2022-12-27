<script lang="ts" setup>
  import BasicButton from '@/components/BasicButton/index.vue';
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import { useRouter } from '@/hooks/router';

  const router = useRouter();
  const jumpList1 = () => {
    router.push('/pagesA/list/test1/index?key=words&page=1&limit=15');
  };
</script>

<template>
  <app-provider>
    <view class="container"> 页面构建中... </view>
    <view class="_u_center">
      <basic-button @click="jumpList1">List1 → </basic-button>
    </view>
  </app-provider>
</template>

<style lang="scss" scoped>
  .container {
    padding: 128rpx 0;
    text-align: center;
  }
</style>
