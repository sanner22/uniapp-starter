<template>
  <view>
    <u-cell-group>
      <u-cell
        :title-style="{ fontWeight: 500 }"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        :icon="item.iconUrl"
        is-link
        @click="openLoadingPage(index)"
      />
    </u-cell-group>

    <u-loading-page
      :loading-text="loadingPageData.loadingText"
      :image="loadingPageData.image"
      :icon-size="loadingPageData.iconSize"
      :loading-mode="loadingPageData.loadingMode"
      :bg-color="loadingPageData.bgColor"
      :loading="loading"
      :color="loadingPageData.color"
      :loading-color="loadingPageData.loadingColor"
    />
  </view>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const loading = ref(false);
  let loadingPageData = reactive({
    // 自定义提示内容
    loadingText: '',
    // 自定义图片
    image: '',
    // 自定义加载动画模式
    loadingMode: '',
    // 自定义背景色
    bgColor: '#ffffff',

    iconSize: 0,
    color: '',
    loadingColor: '',
  });
  const list = reactive([
    {
      title: '自定义提示内容',
      iconUrl:
        'https://cdn.uviewui.com/uview/demo/loading-page/promptContent.png',
    },
    {
      title: '自定义图片',
      iconUrl:
        'https://cdn.uviewui.com/uview/demo/loading-page/customPicture.png',
    },
    {
      title: '自定义加载动画模式',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/loading-page/customMode.png',
    },
    {
      title: '自定义背景色',
      iconUrl:
        'https://cdn.uviewui.com/uview/demo/loading-page/customBgColor.png',
    },
  ]);
  const openLoadingPage = (indexNum: number) => {
    loadingPageData.loadingText = '';
    loadingPageData.image = '';
    loadingPageData.loadingMode = '';
    loadingPageData.bgColor = '#ffffff';
    loadingPageData.iconSize = 28;
    if (indexNum == 0) {
      //自定义提示内容
      loadingPageData.loadingMode = 'semicircle';
      loadingPageData.loadingText = 'Hello uView';
      loadingPageData.color = '#C8C8C8';
      loadingPageData.loadingColor = '#C8C8C8';
    } else if (indexNum == 1) {
      // 自定义图片
      loadingPageData.image = '/static/svg/favicon.svg';
      loadingPageData.loadingText = 'uView UI';
      loadingPageData.iconSize = 40;
      loadingPageData.color = '#C8C8C8';
      loadingPageData.loadingColor = '#C8C8C8';
    } else if (indexNum == 2) {
      // 自定义加载动画模式
      loadingPageData.loadingMode = 'circle';
      loadingPageData.loadingText = 'uView UI';
      loadingPageData.color = '#C8C8C8';
      loadingPageData.loadingColor = '#C8C8C8';
    } else if (indexNum == 3) {
      // 自定义背景色
      loadingPageData.loadingMode = 'spinner';
      loadingPageData.bgColor = 'rgba(0, 0, 0, 0.3)';
      loadingPageData.loadingText = 'uView UI';
      loadingPageData.color = '#eee';
      loadingPageData.loadingColor = '#ddd';
    }
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  };
</script>
