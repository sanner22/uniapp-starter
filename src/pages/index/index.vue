<script setup lang="ts">
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import { useRouter } from '@/hooks/router';
  import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
  import { judgePlatform } from '@/utils/platform';

  const platform = CURRENT_PLATFORM;
  const isVue3 = judgePlatform(PLATFORMS.VUE3);
  const uViewVersion = uni.$u.config.v;

  const router = useRouter();

  const handleGetStarted = () => {
    router.pushTab('/pages/components/index');
    // router.push('/pages/log/index?id=4345&title=log');
  };
  const handleGoDemo = () => {
    router.pushTab('/pages/demo/index');
  };
</script>

<template>
  <!-- 自定义导航栏 -->
  <u-navbar title="首页" bg-color="#f6f6f6" placeholder>
    <template #left>
      <view class="mp-weixin-menu">
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
    <view class="_u_my-60px _u_center">
      <u-image
        src="/static/svg/favicon.svg"
        width="120"
        height="120"
        mode="aspectFit"
      />
    </view>

    <view>
      <u-text
        text="cli 方式基于 vue3/vite4/ts/pinia 的 移动端 快速开发解决方案"
        size="12"
        align="center"
      />
    </view>

    <view class="_u_center _u_flex-wrap _u_gap-1 _u_mt-40px">
      <u-tag
        bg-color="#42d392"
        border-color="#42d392"
        :text="isVue3 ? 'Vue:3' : 'Vue:2'"
        shape="circle"
        size="mini"
      ></u-tag>
      <u-tag
        bg-color="#bd34fe"
        border-color="#bd34fe"
        text="Vite:4"
        shape="circle"
        size="mini"
      ></u-tag>
      <u-tag
        bg-color="#007acd"
        border-color="#007acd"
        text="TS:4.9.4"
        shape="circle"
        size="mini"
      ></u-tag>
      <u-tag
        bg-color="#cca438"
        border-color="#cca438"
        text="pinia:2.0.28"
        shape="circle"
        size="mini"
      ></u-tag>
      <u-tag
        type="primary"
        :text="`uView-plus:${uViewVersion}`"
        shape="circle"
        size="mini"
      ></u-tag>
      <u-tag
        bg-color="#2b993a"
        border-color="#2b993a"
        :text="`UNIAPP`"
        shape="circle"
        size="mini"
      ></u-tag>
      <u-tag
        bg-color="#30a15f"
        border-color="#30a15f"
        :text="`${platform}`"
        shape="circle"
        size="mini"
      ></u-tag>
      <u-tag
        bg-color="#666666"
        border-color="#666666"
        text="UnoCSS:0.46.5"
        shape="circle"
        size="mini"
      ></u-tag>
    </view>

    <view class="_u_center _u_gap-2 _u_mt-40px">
      <u-button
        type="primary"
        size="small"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
        @click="handleGetStarted"
      >
        快速开始 🚀
      </u-button>
      <u-button
        type="primary"
        size="small"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
        @click="handleGoDemo"
      >
        demo ✨
      </u-button>
    </view>
  </app-provider>
</template>

<style lang="scss" scoped></style>
