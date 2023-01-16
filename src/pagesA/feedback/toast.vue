<template>
  <view>
    <u-cell-group title-bg-color="rgb(243, 244, 246)">
      <u-cell
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        is-link
        :icon="item.iconUrl"
        @click="showToast(item)"
      >
      </u-cell>
    </u-cell-group>

    <u-toast ref="uToast1"></u-toast>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const list = [
    {
      type: 'default',
      title: '默认主题',
      message: '锦瑟无端五十弦',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/default.png',
    },
    {
      type: 'error',
      icon: false,
      title: '失败主题',
      message: '一弦一柱思华年',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
    },
    {
      type: 'success',
      title: '成功主题(带图标)',
      message: '庄生晓梦迷蝴蝶',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
    },
    {
      type: 'warning',
      position: 'top',
      title: '位置偏移上方',
      message: '望帝春心托杜鹃',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/top.png',
    },
    {
      type: 'loading',
      title: '正在加载',
      message: '正在加载',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/loading.png',
    },
    {
      type: 'default',
      title: '结束后跳转标签页',
      message: '此情可待成追忆',
      url: '/pages/componentsB/tag/tag',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/jump.png',
    },
  ];

  interface IComponent {
    show: Function;
  }

  const uToast1 = ref<IComponent>({} as IComponent);
  const showToast = (params: any) => {
    uToast1.value.show({
      ...params,
      complete() {
        params.url &&
          uni.navigateTo({
            url: params.url,
          });
      },
    });
  };
</script>
