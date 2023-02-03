<template>
  <tm-app v-model:show-menu="showf" ref="app">
    <template v-slot:menu="{ sys }">
      <tm-sheet
        :margin="[0, 0]"
        :padding="[0, 0]"
        color="indigo"
        linearDeep="accent"
        linear="bottom"
        unit="px"
        :height="sys.height"
      >
        <view class="uno-w-full uno-h-full uno-position-absolute uno-left-0 uno-top-0">
          <view :style="{ height: sysinfo.sysinfo.statusBarHeight + 'px' }"></view>
          <view class="flex flex-row flex-row-center-between py-24 px-16">
            <tm-text label="Uniapp Starter"></tm-text>
            <tm-icon @click="showf = false" color="white" :font-size="32" name="tmicon-times"></tm-icon>
          </view>
          <template v-for="(item, index) in componentGroups" :key="index">
            <tm-cell
              :url="`/pages-tmui/${item.group.key}/index`"
              color="primary"
              transprent
              :margin="[10, 0]"
              :title="item.group.title"
            />
          </template>
        </view>
      </tm-sheet>
    </template>

    <tm-navbar title="Uniapp Starter" :shadow="0" hide-home>
      <template v-slot:left>
        <view class="flex flex-center flex-row">
          <tm-icon
            @click="showf = true"
            :color="store.tmStore.dark ? 'primary' : ''"
            _class="px-24"
            :font-size="32"
            name="tmicon-menu"
          ></tm-icon>
          <navigator url="/pages-tmui/theme/index" class="px-12">
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

    <tm-sheet :margin="[0, 0]" :followTheme="true">
      <view class="flex-row flex-row-center-start">
        <tm-image :width="64" :height="64" src="/static/svg/favicon.svg"></tm-image>
        <view class="pl-16 flex-1" style="width: 0px">
          <tm-text _class="text-weight-b" :font-size="36" label="Uniapp Starter"></tm-text>
          <tm-text
            _class="opacity-6 uno-mt-3px"
            :font-size="24"
            label="cli 方式基于 uniapp vue next 快速开发解决方案"
          ></tm-text>
        </view>
      </view>
    </tm-sheet>

    <view class="uno-my-40px uno-center logo-color">
      <!-- #ifdef MP -->
      <tm-image src="/static/svg/favicon.svg" :width="100" :height="100" unit="px" show-menu-by-long-press />
      <!-- #endif -->
      <!-- #ifndef MP -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g data-name="图层 2">
          <g data-name="图层 1" fill="currentColor">
            <path
              filter="brightness(80%)"
              d="M512 0H136l-.05.19-56.99 214.54L168.24 304H55.25L0 512h376l.05-.19 56.99-214.54L343.76 208h112.99L512 0z"
            />
            <path d="M433.04 297.27L135.95.19 78.96 214.73l297.09 297.08 56.99-214.54z" />
          </g>
        </g>
      </svg>
      <!-- #endif -->
    </view>

    <view class="uno-center uno-flex-wrap">
      <tm-tag color="#42d392" :label="isVue3 ? 'Vue:3' : 'Vue:2'" :round="25" size="s" />
      <tm-tag color="#bd34fe" label="Vite:4" :round="25" size="s" />
      <tm-tag color="#007acd" label="TS:4.9.4" :round="25" size="s" />
      <tm-tag color="#cca438" label="pinia:2.0.28" :round="25" size="s" />
      <tm-tag color="#0062ff" :label="`tmui:3.0.89`" :round="25" size="s" />
      <tm-tag color="#2b993a" :label="`UNIAPP`" :round="25" size="s" />
      <tm-tag color="#30a15f" :label="`${platform}`" :round="25" size="s" />
      <tm-tag color="#515351" label="UnoCSS:0.46.4" :round="25" size="s" />
      <!-- <tm-tag color="#3f9eef" label="windicss:3.5.6" :round="25" size="s" /> -->
    </view>

    <tm-sheet :margin="[30, 30]" :round="3">
      <tm-text :font-size="24" _class="font-weight-b" label="选择主题"></tm-text>
      <tm-divider></tm-divider>
      <view class="flex flex-row flex-around">
        <tm-button :width="100" color="yellow" size="small" @click="setTheme('yellow')" label="黄色"></tm-button>
        <tm-button :width="100" color="blue" size="small" @click="setTheme('blue')" label="蓝色"></tm-button>
        <tm-button :width="100" color="red" size="small" @click="setTheme('red')" label="红色"></tm-button>
        <tm-button :width="160" size="small" @click="setTheme('')" label="默认"> </tm-button>
      </view>
    </tm-sheet>

    <view class="uno-center uno-gap-15px">
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
  import { computed, ref } from 'vue';
  import { useRouter } from '@/hooks/router';
  import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
  import { judgePlatform } from '@/utils/platform';
  import tmApp from '@/tmui/components/tm-app/tm-app.vue';
  import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia';
  import { componentGroups } from '@/utils/tmui-helper';

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

  const setTheme = (colorname: string) => {
    app.value?.setTheme(colorname);
  };

  const defaultColor = '#009fe8';
  const logoColor = computed(() => {
    if (store.tmStore.dark) return defaultColor;
    const theme = store.tmStore.color;
    return (theme && store.tmStore.colorList.find(i => i.name === theme)?.value) || defaultColor;
  });
</script>

<style scoped lang="scss">
  /* #ifndef MP */
  .logo-color {
    color: v-bind('logoColor');
    fill: v-bind('logoColor');
    svg {
      width: 100px;
      height: 100px;
    }
  }
  /* #endif */
</style>
