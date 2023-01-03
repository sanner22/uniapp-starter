<template>
  <view>
    <u-list @scrolltolower="scrolltolower">
      <u-list-item v-for="(item, index) in indexList" :key="index">
        <u-cell :title="`列表长度-${index + 1}`">
          <template #icon>
            <u-avatar
              shape="square"
              size="35"
              :src="item.url"
              customStyle="margin: -3px 5px -3px 0"
            />
          </template>
        </u-cell>
      </u-list-item>
    </u-list>
  </view>
</template>

<script setup lang="ts">
  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';

  const indexList = ref<{ url: string }[]>([]);
  const urls = [
    'https://cdn.uviewui.com/uview/album/1.jpg',
    'https://cdn.uviewui.com/uview/album/2.jpg',
    'https://cdn.uviewui.com/uview/album/3.jpg',
    'https://cdn.uviewui.com/uview/album/4.jpg',
    'https://cdn.uviewui.com/uview/album/5.jpg',
    'https://cdn.uviewui.com/uview/album/6.jpg',
    'https://cdn.uviewui.com/uview/album/7.jpg',
    'https://cdn.uviewui.com/uview/album/8.jpg',
    'https://cdn.uviewui.com/uview/album/9.jpg',
    'https://cdn.uviewui.com/uview/album/10.jpg',
  ];

  const loadmore = () => {
    for (let i = 0; i < 30; i++) {
      indexList.value.push({
        url: urls[uni.$u.random(0, urls.length - 1)],
      });
    }
  };

  const scrolltolower = () => {
    loadmore();
  };

  onLoad(_e => {
    loadmore();
  });
</script>
