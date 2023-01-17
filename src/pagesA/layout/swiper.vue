<template>
  <view class="uno-px-15px">
    <u-text type="info" margin="10px 0" text="基础功能" />
    <u-swiper :list="list1" @change="change" @click="click"></u-swiper>

    <u-text type="info" margin="10px 0" text="带标题" />
    <u-swiper
      :list="list2"
      keyName="image"
      showTitle
      :autoplay="false"
      circular
    ></u-swiper>

    <u-text type="info" margin="10px 0" text="带指示器" />
    <u-swiper :list="list3" indicator indicatorMode="line" circular></u-swiper>

    <u-text type="info" margin="10px 0" text="加载中" />
    <u-swiper :list="list3" loading></u-swiper>

    <!-- #ifndef APP-NVUE || MP-TOUTIAO -->
    <u-text type="info" margin="10px 0" text="卡片式" />
    <u-swiper
      :list="list3"
      previousMargin="30"
      nextMargin="30"
      circular
      :autoplay="false"
      radius="5"
      bgColor="#ffffff"
    ></u-swiper>
    <!-- #endif -->

    <u-text type="info" margin="10px 0" text="嵌入视频" />
    <u-swiper :list="list4" keyName="url" :autoplay="false"></u-swiper>

    <u-text type="info" margin="10px 0" text="自定义指示器" />
    <u-swiper
      :list="list5"
      @change="(e: any) => (current = e.current)"
      :autoplay="false"
    >
      <template #indicator>
        <view class="indicator">
          <view
            class="indicator__dot"
            v-for="(item, index) in list5"
            :key="index"
            :class="[index === current && 'indicator__dot--active']"
          >
          </view>
        </view>
      </template>
    </u-swiper>
    <u-gap bgColor="transparent" height="15"></u-gap>
    <u-swiper
      :list="list6"
      @change="(e: any) => (currentNum = e.current)"
      :autoplay="false"
      indicatorStyle="right: 20px"
    >
      <template #indicator>
        <view class="indicator-num">
          <text class="indicator-num__text">
            {{ currentNum + 1 }}/{{ list6.length }}
          </text>
        </view>
      </template>
    </u-swiper>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const list1 = [
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
  ];
  const list2 = [
    {
      image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
      title: '昨夜星辰昨夜风，画楼西畔桂堂东',
      type: 'image',
    },
    {
      image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
      title: '身无彩凤双飞翼，心有灵犀一点通',
    },
    {
      image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
      title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
    },
  ];
  const list3 = [
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
  ];
  const list4 = [
    {
      url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
      title: '昨夜星辰昨夜风，画楼西畔桂堂东',
      poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    },
    {
      url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
      title: '身无彩凤双飞翼，心有灵犀一点通',
    },
    {
      url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
      title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
    },
  ];
  const list5 = [
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
  ];
  const list6 = [
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
  ];
  const current = ref(0);
  const currentNum = ref(0);

  const change = (e: any) => {
    console.log('change', e);
  };
  const click = (e: any) => {
    console.log('click', e);
  };
</script>

<style lang="scss" scoped>
  .indicator {
    @include flex(row);
    justify-content: center;

    &__dot {
      height: 6px;
      width: 6px;
      border-radius: 100px;
      background-color: rgba(255, 255, 255, 0.35);
      margin: 0 5px;
      transition: background-color 0.3s;

      &--active {
        background-color: #ffffff;
      }
    }
  }

  .indicator-num {
    padding: 2px 0;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: 100px;
    width: 35px;
    @include flex;
    justify-content: center;

    &__text {
      color: #ffffff;
      font-size: 12px;
    }
  }
</style>
