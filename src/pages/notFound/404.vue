<script lang="ts" setup>
  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';
  import { useRouter } from '@/hooks/router';
  import { HOME_PAGE } from '@/enums/routerEnum';

  const go = ref<string>('');
  const router = useRouter();
  const redirect = ref<string>('');

  onLoad(query => {
    go.value = query?.go || '';
    redirect.value = query?.redirect || HOME_PAGE;
  });

  /**
   * 返回首页
   */
  const backHome = () => {
    router.pushTab(redirect.value);
  };
</script>

<template>
  <view
    class="uno-w-screen uno-h-screen uno-flex uno-flex-col uno-items-center uno-justify-center"
  >
    <u-empty mode="page" :text="`${go} 页面找不到了~`" class="uno-mb-30px" />
    <u-button
      type="primary"
      icon="home-fill"
      size="small"
      class="uno-mb-30px"
      @click="backHome"
    >
      返回首页
    </u-button>
  </view>
</template>

<style lang="scss" scoped></style>
