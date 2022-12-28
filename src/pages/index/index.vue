<script setup lang="ts">
  import { ref } from 'vue';
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import { useRouter } from '@/hooks/router';
  import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
  import { judgePlatform } from '@/utils/platform';
  import Iconify from '@/components/Iconify/index.vue';

  const title = ref('uni-app vue3 ts --Vite');

  const platform = CURRENT_PLATFORM;

  const isVue3 = judgePlatform(PLATFORMS.VUE3);

  const router = useRouter();
  const handleGetStarted = () => {
    router.pushTab('/pages/demo/index');
    // router.push('/pages/log/index?id=4345&title=log');
  };
  const handleGo404 = () => {
    router.push('/pages/notFound/404');
  };
</script>

<template>
  <!-- <navbar /> -->
  <u-navbar title="首页" placeholder>
    <template #left>
      <view
        class="_u_flex _u_items-center _u_justify-center _u_b-1 _u_b-trueGray-2 _u_b-rd-99px _u_px-8px _u_py-4px"
      >
        <u-icon name="arrow-left" size="18" color="black"></u-icon>
        <u-line
          direction="column"
          :hairline="false"
          length="16"
          margin="0 8px"
        ></u-line>
        <u-icon name="home" size="20" color="black"></u-icon>
      </view>
    </template>
  </u-navbar>
  <app-provider>
    <view class="_u_flex _u_flex-col _u_items-center _u_justify-center">
      <div class="_u_m-t-80px">
        <u-image
          src="/static/svg/favicon.svg"
          width="200"
          height="200"
          mode="aspectFit"
        />
      </div>
      <image class="logo" src="/static/svg/LOGO.svg" />
      <view class="text-area">
        <text class="">{{ title }}</text>
      </view>
      <view class="text-area">
        <text class="">是否是Vue3: {{ isVue3 }}</text>
      </view>
      <view class="text-area">
        <text class="_u_text-red">当前平台: {{ platform }}</text>
      </view>
      <u-button type="primary" @click="handleGetStarted"
        >Get Started →
      </u-button>
      <u-button type="primary" @click="handleGo404">404 → </u-button>
      <view class="_u_text-red">uno css</view>
      <iconify icon="i-ph-anchor-simple-thin" size="65" />
      <iconify icon="i-system-uicons-book-text" />
      <iconify icon="i-system-uicons-battery-full" size="65" />
      <iconify icon="i-system-uicons-box-add" :size="65" />
      <iconify icon="i-system-uicons-bell-snooze" color="red" :size="65" />

      <u-icon name="photo"></u-icon>
      <u-icon
        label="uview-plus"
        size="40"
        name="https://cdn.uviewui.com/uview/example/button.png"
      ></u-icon>

      <u-button type="primary" text="确定"></u-button>
      <u-button type="primary" :plain="true" text="镂空"></u-button>
      <u-button
        type="primary"
        :plain="true"
        :hairline="true"
        text="细边"
      ></u-button>
      <u-button type="primary" disabled text="禁用"></u-button>
      <u-button type="primary" loading loadingText="加载中"></u-button>
      <u-button type="primary" icon="map" text="图标按钮"></u-button>
      <u-button type="primary" shape="circle" text="按钮形状"></u-button>
      <u-button
        text="渐变色按钮"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
      ></u-button>
      <u-button type="primary" size="small" text="大小尺寸"></u-button>
    </view>
  </app-provider>
</template>

<style lang="scss">
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 280rpx auto 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
    margin-bottom: 60rpx;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
