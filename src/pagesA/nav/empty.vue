<template>
  <view class="uno-h-screen uno-center">
    <u-empty :mode="mode" :icon="getIcon">
      <view class="uno-mt-40px">
        <u-button
          size="small"
          type="primary"
          :style="{ marginTop: 10 + 'px' }"
          text="选择 empty 模式"
          @click="showPicker = true"
        >
        </u-button>
      </view>
    </u-empty>
  </view>

  <u-picker
    :show="showPicker"
    :columns="[list]"
    keyName="label"
    closeOnClickOverlay
    @close="showPicker = false"
    @cancel="showPicker = false"
    @confirm="confirmMode"
  />
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';

  const baseUrl = 'http://cdn.uviewui.com/uview/empty/';
  const imgList = {
    car: baseUrl + 'car.png',
    address: baseUrl + 'address.png',
    comment: baseUrl + 'comment.png',
    coupon: baseUrl + 'coupon.png',
    data: baseUrl + 'data.png',
    history: baseUrl + 'history.png',
    list: baseUrl + 'list.png',
    message: baseUrl + 'message.png',
    news: baseUrl + 'news.png',
    order: baseUrl + 'order.png',
    page: baseUrl + 'page.png',
    permission: baseUrl + 'permission.png',
    search: baseUrl + 'search.png',
    wifi: baseUrl + 'wifi.png',
  };
  const list = [
    {
      mode: 'car',
      label: '购物车为空',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/car.png',
    },
    {
      mode: 'data',
      label: '数据为空',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/data.png',
    },
    {
      mode: 'comment',
      label: '评论为空',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/comment.png',
    },
    {
      mode: 'coupon',
      label: '没有优惠券',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/coupon.png',
    },
    {
      mode: 'history',
      label: '无历史记录',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/history.png',
    },
    {
      mode: 'list',
      label: '列表为空',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/list.png',
    },
    {
      mode: 'message',
      label: '消息列表为空',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/message.png',
    },
    {
      mode: 'news',
      label: '无新闻列表',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/news.png',
    },
    {
      mode: 'order',
      label: '订单为空',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/order.png',
    },
    {
      mode: 'page',
      label: '页面不存在',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/page.png',
    },
    {
      mode: 'permission',
      label: '无权限',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/permission.png',
    },
    {
      mode: 'search',
      label: '没有搜索结果',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/search.png',
    },
    {
      mode: 'wifi',
      label: '没有WiFi',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/wifi.png',
    },
  ];

  const mode = ref('car');
  const showPicker = ref(false);

  const getIcon = computed(() => {
    const index = Object.keys(imgList).findIndex(m => m === mode.value);
    return Object.values(imgList)[index];
  });

  const confirmMode = (e: any) => {
    // console.log({ ...e });
    mode.value = e.value[0].mode;
    showPicker.value = false;
  };
</script>

<style lang="scss" scoped></style>
