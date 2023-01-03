<template>
  <view class="u-page">
    <u-text type="info" margin="10px 0" text="基础功能" />
    <u-tabbar
      :value="value1"
      @change="change1"
      :fixed="false"
      :placeholder="false"
      :safeAreaInsetBottom="false"
    >
      <u-tabbar-item text="首页" icon="home" @click="click1"></u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo" @click="click1"></u-tabbar-item>
      <u-tabbar-item
        text="直播"
        icon="play-right"
        @click="click1"
      ></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account" @click="click1"></u-tabbar-item>
    </u-tabbar>

    <u-text type="info" margin="10px 0" text="显示徽标" />
    <u-tabbar
      :value="value2"
      :placeholder="false"
      @change="(name: string) => (value2 = name)"
      :fixed="false"
      :safeAreaInsetBottom="false"
    >
      <u-tabbar-item text="首页" icon="home" dot></u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo" badge="3"></u-tabbar-item>
      <u-tabbar-item text="直播" icon="play-right"></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
    </u-tabbar>

    <u-text type="info" margin="10px 0" text="匹配标签的名称" />
    <u-tabbar
      :placeholder="false"
      :value="value3"
      @change="(name: string) => (value3 = name)"
      :fixed="false"
      :safeAreaInsetBottom="false"
    >
      <u-tabbar-item text="首页" icon="home" name="home"></u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo" name="photo"></u-tabbar-item>
      <u-tabbar-item
        text="直播"
        icon="play-right"
        name="play-right"
      ></u-tabbar-item>
      <u-tabbar-item text="我的" name="account" icon="account"></u-tabbar-item>
    </u-tabbar>

    <u-text type="info" margin="10px 0" text="自定义图标/颜色" />
    <u-tabbar
      :value="value4"
      @change="(name: string) => (value4 = name)"
      :fixed="false"
      :placeholder="false"
      activeColor="#d81e06"
      :safeAreaInsetBottom="false"
    >
      <u-tabbar-item text="首页">
        <template v-slot:active-icon>
          <image
            class="u-page__item__slot-icon"
            src="https://cdn.uviewui.com/uview/common/bell-selected.png"
          ></image>
        </template>
        <template v-slot:inactive-icon>
          <image
            class="u-page__item__slot-icon"
            src="https://cdn.uviewui.com/uview/common/bell.png"
          ></image>
        </template>
      </u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo"></u-tabbar-item>
      <u-tabbar-item text="直播" icon="play-right"></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
    </u-tabbar>

    <u-text type="info" margin="10px 0" text="拦截切换事件(点击第二个标签)" />
    <u-tabbar
      :value="value5"
      :fixed="false"
      @change="change5"
      :safeAreaInsetBottom="false"
      :placeholder="false"
    >
      <u-tabbar-item text="首页" icon="home"> </u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo"></u-tabbar-item>
      <u-tabbar-item text="直播" icon="play-right"></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
    </u-tabbar>

    <u-text type="info" margin="10px 0" text="去除上边框" />
    <u-tabbar
      :value="value7"
      :placeholder="false"
      :border="false"
      @change="(name: string) => (value7 = name)"
      :fixed="false"
      :safeAreaInsetBottom="false"
    >
      <u-tabbar-item text="首页" icon="home"></u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo"></u-tabbar-item>
      <u-tabbar-item text="直播" icon="play-right"></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
    </u-tabbar>

    <u-text type="info" margin="10px 0" text="固定在底部(固定在屏幕最下方)" />
    <u-gap height="150"></u-gap>
    <u-tabbar
      :value="value6"
      @change="(name: string) => (value6 = name)"
      :fixed="true"
      :placeholder="true"
      :safeAreaInsetBottom="true"
    >
      <u-tabbar-item text="首页" icon="home"> </u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo"></u-tabbar-item>
      <u-tabbar-item text="直播" icon="play-right"></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script setup lang="ts">
  import { Toast } from '@/utils/uniapi/prompt';
  import { ref } from 'vue';

  const value1 = ref<number | string>(0);
  const value2 = ref<number | string>(1);
  const value3 = ref<number | string>('play-right');
  const value4 = ref<number | string>(0);
  const value5 = ref<number | string>(0);
  const value6 = ref<number | string>(0);
  const value7 = ref<number | string>(3);

  const change5 = (name: number | string) => {
    if (name === 1) return Toast('请您先登录');
    else value5.value = name;
  };
  const change1 = (e: any) => {
    value1.value = e;
    console.log('change1', e);
  };
  const click1 = (e: any) => {
    console.log('click1', e);
  };
</script>

<style lang="scss" scoped></style>
