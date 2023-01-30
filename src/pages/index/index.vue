<template>
  <!-- 自定义导航栏 -->
  <u-navbar title="首页" bg-color="#f6f6f6" placeholder>
    <template #left>
      <view class="mp-weixin-menu">
        <u-icon
          name="arrow-left"
          size="18"
          color="black"
          @click="backMenuClick"
        />
        <u-line
          direction="column"
          :hairline="false"
          length="16"
          margin="0 8px"
        />
        <u-icon name="home" size="20" color="black" @click="homeMenuClick" />
      </view>
    </template>
  </u-navbar>

  <app-provider>
    <view class="uno-my-60px uno-center">
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

    <view class="uno-center uno-flex-wrap uno-gap-5px uno-mt-40px">
      <u-tag
        bg-color="#42d392"
        border-color="#42d392"
        :text="isVue3 ? 'Vue:3' : 'Vue:2'"
        shape="circle"
        size="mini"
      />
      <u-tag
        bg-color="#bd34fe"
        border-color="#bd34fe"
        text="Vite:4"
        shape="circle"
        size="mini"
      />
      <u-tag
        bg-color="#007acd"
        border-color="#007acd"
        text="TS:4.9.4"
        shape="circle"
        size="mini"
      />
      <u-tag
        bg-color="#cca438"
        border-color="#cca438"
        text="pinia:2.0.28"
        shape="circle"
        size="mini"
      />
      <u-tag
        type="primary"
        :text="`uView-plus:${uViewVersion}`"
        shape="circle"
        size="mini"
      />
      <u-tag
        bg-color="#0062ff"
        border-color="#0062ff"
        :text="`tmui:3.0.89`"
        shape="circle"
        size="mini"
      />
      <u-tag
        bg-color="#2b993a"
        border-color="#2b993a"
        :text="`UNIAPP`"
        shape="circle"
        size="mini"
      />
      <u-tag
        bg-color="#30a15f"
        border-color="#30a15f"
        :text="`${platform}`"
        shape="circle"
        size="mini"
      />
      <u-tag
        bg-color="#666666"
        border-color="#666666"
        text="UnoCSS:0.48.4"
        shape="circle"
        size="mini"
      />
    </view>

    <view class="uno-center uno-gap-15px uno-mt-40px">
      <view>
        <u-button
          type="primary"
          size="small"
          color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
          @click="handleGetStarted"
          text="快速开始 🚀"
        />
      </view>
      <view>
        <u-button
          type="primary"
          size="small"
          color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
          @click="handleGoDemo"
          text="demo ✨"
        />
      </view>
      <view>
        <tm-button
          size="small"
          color="primary"
          @click="handleGoDemo"
          :width="180"
        >
          tmui button
        </tm-button>
      </view>
    </view>
  </app-provider>
</template>

<script setup lang="ts">
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import { useRouter } from '@/hooks/router';
  import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
  import { judgePlatform } from '@/utils/platform';
  import { Toast } from '@/utils/uniapi/prompt';

  const platform = CURRENT_PLATFORM;
  const isVue3 = judgePlatform(PLATFORMS.VUE3);
  const uViewVersion = uni.$u.config.v;

  const router = useRouter();

  const backMenuClick = () => {
    Toast('点击了 back 菜单');
  };

  const homeMenuClick = () => {
    Toast('点击了 home 菜单');
  };

  const handleGetStarted = () => {
    router.pushTab('/pages/components/index');
    // router.push('/pages/log/index?id=4345&title=log');
  };
  const handleGoDemo = () => {
    router.pushTab('/pages/demo/index');
  };
</script>

<style lang="scss" scoped></style>
