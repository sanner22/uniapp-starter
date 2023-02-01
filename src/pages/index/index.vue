<template>
  <tm-app v-model:show-menu="showf" ref="app">
    <template v-slot:menu="{ sys }">
      <tm-sheet :margin="[0, 0]" :padding="[0, 0]" color="indigo" linearDeep="accent" linear="bottom">
        <image
          class="opacity-1"
          :style="{ width: `${sys.width}px`, height: `${sys.height}px` }"
          :src="`https://picsum.photos/${sys.width}/${sys.height}?id=${Math.random()}`"
          mode="scaleToFill"
        />
        <view class="absolute l-0 t-0" :style="{ width: `${sys.width}px`, height: `${sys.height}px` }">
          <view :style="{ height: sysinfo.sysinfo.statusBarHeight + 'px' }"></view>
          <view class="flex flex-row flex-row-center-between py-24 px-16">
            <tm-text label="TMUI 3.0.89"></tm-text>
            <tm-icon @click="showf = false" color="white" :font-size="32" name="tmicon-times"></tm-icon>
          </view>
          <tm-cell url="/pages-tmui/common/index" color="primary" transprent :margin="[10, 0]" title="通用组件" />
          <tm-cell url="/pages-tmui/layout/index" color="primary" transprent :margin="[10, 0]" title="布局组件" />
          <tm-cell url="/pages-tmui/showdata/index" color="primary" transprent :margin="[10, 0]" title="展示组件" />
          <tm-cell url="/pages-tmui/form/index" color="primary" transprent :margin="[10, 0]" title="表单录入" />
          <tm-cell url="/pages-tmui/feedback/index" color="primary" transprent :margin="[10, 0]" title="反馈组件" />
          <tm-cell url="/pages-tmui/nav/index" color="primary" transprent :margin="[10, 0]" title="导航组件" />
          <tm-cell url="/pages-tmui/other/index" color="primary" transprent :margin="[10, 0]" title="其他组件" />
          <tm-cell url="/pages-tmui/business/index" color="primary" transprent :margin="[10, 0]" title="业务组件" />
        </view>
      </tm-sheet>
    </template>

    <tm-navbar title="首页" :shadow="0" hide-home>
      <template v-slot:left>
        <view class="flex flex-center flex-row">
          <tm-icon
            @click="showf = true"
            :color="store.tmStore.dark ? 'primary' : ''"
            _class="px-24"
            :font-size="32"
            name="tmicon-menu"
          ></tm-icon>
          <navigator url="settheme" class="px-12">
            <tm-icon :font-size="32" name="tmicon-cog-fill"></tm-icon>
          </navigator>
          <tm-icon
            _class="px-24"
            @click="toggleDark"
            :color="store.tmStore.dark ? 'yellow' : ''"
            :font-size="32"
            name="tmicon-ios-sunny"
          ></tm-icon>
        </view>
      </template>
    </tm-navbar>

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
  import { ref } from 'vue';
  import { useRouter } from '@/hooks/router';
  import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
  import { judgePlatform } from '@/utils/platform';
  import tmApp from '@/tmui/components/tm-app/tm-app.vue';
  import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia';

  const store = useTmpiniaStore();

  const platform = CURRENT_PLATFORM;
  const isVue3 = judgePlatform(PLATFORMS.VUE3);
  const sysinfo = uni.$tm.u.getWindow();
  const showf = ref(false);

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
