<template>
  <tm-app ref="app">
    <view class="uno-my-60px uno-center">
      <tm-image src="/static/svg/favicon.svg" :width="240" :height="240" />
    </view>

    <view class="uno-center">
      <tm-text label="cli 方式基于 vue3/vite4/typescript 的 移动端快速开发解决方案" :font-size="20" />
    </view>

    <view class="uno-center uno-flex-wrap uno-mt-40px">
      <tm-tag color="#42d392" :label="isVue3 ? 'Vue:3' : 'Vue:2'" :round="25" size="s" />
      <tm-tag color="#bd34fe" label="Vite:4" :round="25" size="s" />
      <tm-tag color="#007acd" label="TS:4.9.4" :round="25" size="s" />
      <tm-tag color="#cca438" label="pinia:2.0.28" :round="25" size="s" />
      <tm-tag color="#0062ff" :label="`tmui:3.0.89`" :round="25" size="s" />
      <tm-tag color="#2b993a" :label="`UNIAPP`" :round="25" size="s" />
      <tm-tag color="#30a15f" :label="`${platform}`" :round="25" size="s" />
      <tm-tag color="#666666" label="UnoCSS:0.46.4" :round="25" size="s" />
      <!-- <tm-tag color="#3f9eef" label="windicss:3.5.6" :round="25" size="s" /> -->
    </view>

    <view class="uno-center uno-gap-15px uno-mt-40px">
      <tm-button size="small" color="primary" @click="handleGetStarted" :width="180">快速开始 🚀</tm-button>
      <tm-button size="small" color="purple" @click="handleGoDemo" :width="180">demo ✨</tm-button>
    </view>

    <tm-float-button
      :disabledScrollTo="false"
      position="br"
      :btn="{
        icon: 'tmicon-ios-sunny',
        linear: '',
        color: 'white',
        label: '暗黑',
      }"
      @click="toggleDark"
    ></tm-float-button>
  </tm-app>
</template>

<script setup lang="ts">
  import { useRouter } from '@/hooks/router';
  import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
  import { judgePlatform } from '@/utils/platform';
  import { ref } from 'vue';
  import tmApp from '@/tmui/components/tm-app/tm-app.vue';

  const platform = CURRENT_PLATFORM;
  const isVue3 = judgePlatform(PLATFORMS.VUE3);

  const router = useRouter();

  const handleGetStarted = () => {
    router.pushTab('/pages/components/index');
  };
  const handleGoDemo = () => {
    router.pushTab('/pages/demo/index');
  };

  const app = ref<InstanceType<typeof tmApp> | null>(null);
  // 切换暗黑模式
  const toggleDark = () => {
    // 切换暗黑模式
    app.value?.setDark();
  };
</script>

<style scoped lang="scss"></style>
