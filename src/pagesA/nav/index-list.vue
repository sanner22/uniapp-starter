<template>
  <u-index-list :indexList="indexList">
    <template #header>
      <view class="list">
        <view class="list__item">
          <u-avatar
            shape="square"
            size="35"
            icon="man-add-fill"
            fontSize="26"
            randomBgColor
          />
          <text class="list__item__user-name">新的朋友</text>
        </view>
        <u-line></u-line>
        <view class="list__item">
          <u-avatar
            shape="square"
            size="35"
            icon="tags-fill"
            fontSize="26"
            randomBgColor
          />
          <text class="list__item__user-name">标签</text>
        </view>
        <u-line></u-line>
        <view class="list__item">
          <u-avatar
            shape="square"
            size="35"
            icon="chrome-circle-fill"
            fontSize="26"
            randomBgColor
          />
          <text class="list__item__user-name">朋友圈</text>
        </view>
        <u-line></u-line>
        <view class="list__item">
          <u-avatar
            shape="square"
            size="35"
            icon="qq-fill"
            fontSize="26"
            randomBgColor
          />
          <text class="list__item__user-name">QQ</text>
        </view>
        <u-line></u-line>
      </view>
    </template>

    <template :key="index" v-for="(item, index) in itemArr">
      <!-- #ifdef APP-NVUE -->
      <u-index-anchor :text="indexList[index]"></u-index-anchor>
      <!-- #endif -->
      <u-index-item>
        <!-- #ifndef APP-NVUE -->
        <u-index-anchor :text="indexList[index]"></u-index-anchor>
        <!-- #endif -->
        <view class="list" v-for="(item1, index1) in item" :key="index1">
          <view class="list__item">
            <image class="list__item__avatar" :src="item1.url"></image>
            <text class="list__item__user-name">{{ item1.name }}</text>
          </view>
          <u-line></u-line>
        </view>
      </u-index-item>
    </template>

    <template #footer>
      <view class="u-safe-area-inset--bottom">
        <text class="list__footer">共305位好友</text>
      </view>
    </template>
  </u-index-list>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';

  const getIndexList = () => {
    const indexList = [];
    const charCodeOfA = 'A'.charCodeAt(0);
    indexList.push('↑');
    indexList.push('☆');
    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i));
    }
    indexList.push('#');
    return indexList;
  };

  const indexList = getIndexList();
  const urls = ref([
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
  ]);
  const names = ref([
    '勇往无敌',
    '疯狂的迪飙',
    '磊爱可',
    '梦幻梦幻梦',
    '枫中飘瓢',
    '飞翔天使',
    '曾经第一',
    '追风幻影族长',
    '麦小姐',
    '胡格罗雅',
    'Red磊磊',
    '乐乐立立',
    '青龙爆风',
    '跑跑卡叮车',
    '山里狼',
    'supersonic超',
  ]);

  const itemArr = computed(() => {
    return indexList.map(_item => {
      const arr = [];
      for (let i = 0; i < 10; i++) {
        arr.push({
          name: names.value[uni.$u.random(0, names.value.length - 1)],
          url: urls.value[uni.$u.random(0, urls.value.length - 1)],
        });
      }
      return arr;
    });
  });
</script>

<style lang="scss" scoped>
  .list {
    &__item {
      @include flex;
      padding: 6px 12px;
      align-items: center;

      &__avatar {
        height: 35px;
        width: 35px;
        border-radius: 3px;
      }

      &__user-name {
        font-size: 16px;
        margin-left: 10px;
        color: $u-main-color;
      }
    }

    &__footer {
      color: $u-tips-color;
      font-size: 14px;
      text-align: center;
      margin: 15px 0;
    }
  }
</style>
