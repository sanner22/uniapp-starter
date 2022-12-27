<script lang="ts" setup>
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
      <u-button type="primary" size="small" @click="jumpList1"
        >List1 →
      </u-button>
    </view>
  </app-provider>
</template>

<style lang="scss" scoped>
  .container {
    padding: 128rpx 0;
    text-align: center;
  }
</style>
