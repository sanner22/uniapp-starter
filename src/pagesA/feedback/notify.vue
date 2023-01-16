<template>
  <view>
    <u-cell-group>
      <u-cell
        @click="openNotify(item.notifyData)"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        :icon="item.iconUrl"
        is-link
      />
    </u-cell-group>
    <u-notify ref="uNotify1"></u-notify>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  interface IComponent {
    show: Function;
  }

  const list = [
    {
      notifyData: {
        message: 'notify顶部提示',
        type: 'primary',
        color: '#ffffff',
        bgColor: '',
        fontSize: 15,
        duration: 3000,
      },
      title: '主要通知',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/notify/main.png',
    },
    {
      notifyData: {
        message: 'notify顶部提示',
        type: 'success',
        color: '#ffffff',
        bgColor: '',
        fontSize: 15,
        duration: 3000,
        safeAreaInsetTop: false,
      },
      title: '成功通知',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/notify/success.png',
    },
    {
      notifyData: {
        message: 'notify顶部提示',
        type: 'error',
        color: '#ffffff',
        bgColor: '',
        fontSize: 14,
        duration: 3000,
        safeAreaInsetTop: false,
      },
      title: '危险通知',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/notify/error.png',
    },
    {
      notifyData: {
        message: 'notify顶部提示',
        type: 'warning',
        color: '#ffffff',
        bgColor: '',
        fontSize: 15,
        duration: 3000,
        safeAreaInsetTop: false,
      },
      title: '警告通知',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/notify/warning.png',
    },
    {
      notifyData: {
        message: 'notify顶部提示',
        color: '#fff',
        bgColor: '#000',
        fontSize: 15,
        duration: 3000,
        safeAreaInsetTop: false,
      },
      title: '自定义样式',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/notify/customStyle.png',
    },
    {
      notifyData: {
        message: 'notify顶部提示',
        type: 'primary',
        color: '#ffffff',
        bgColor: '',
        fontSize: 15,
        duration: 6000,
        safeAreaInsetTop: false,
      },
      title: '自定义时间',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/notify/customTime.png',
    },
    {
      notifyData: {
        message: 'notify顶部提示',
        color: '#fff',
        bgColor: '',
        fontSize: 15,
        duration: 3000,
        safeAreaInsetTop: true,
      },
      title: '插入状态栏高度',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/notify/height.png',
    },
  ];

  const uNotify1 = ref<IComponent>({} as IComponent);
  const openNotify = (params: any) => {
    uNotify1.value.show({
      ...params,
    });
    // 也可以通过主题形式调用，如：
    // uNotify1.value.primary('Primary主题')
  };
</script>
