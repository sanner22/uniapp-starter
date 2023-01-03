<template>
  <view>
    <u-text text="基本案例" type="info" margin="10px 0 10px 10px" />
    <view>
      <u-grid :border="false" @click="click" align="center">
        <u-grid-item
          v-for="(baseListItem, baseListIndex) in baseList"
          @click="click('test')"
          :key="baseListIndex"
        >
          <u-icon
            :customStyle="{ paddingTop: 20 + 'rpx' }"
            :name="baseListItem.name"
            :size="22"
          ></u-icon>
          <text class="grid-text">{{ baseListItem.title }}</text>
        </u-grid-item>
      </u-grid>
    </view>

    <u-text text="显示边框" type="info" margin="10px 0 10px 10px" />
    <view>
      <u-grid :border="true">
        <u-grid-item
          v-for="(listItem, listIndex) in list"
          :key="listIndex"
          customStyle="padding-top: 10px; padding-bottom: 10px"
        >
          <u-icon
            :customStyle="{ paddingTop: 20 + 'rpx' }"
            :name="listItem.name"
            :size="22"
          ></u-icon>
          <text class="grid-text">{{ listItem.title }}</text>
        </u-grid-item>
      </u-grid>
    </view>

    <u-text
      text="绑定点击事件&自定义列数"
      type="info"
      margin="10px 0 10px 10px"
    />
    <view>
      <u-grid :border="false" col="4">
        <u-grid-item
          v-for="(listItem, listIndex) in list"
          :key="listIndex"
          customStyle="padding-top: 10px; padding-bottom: 10px"
        >
          <u-icon
            :customStyle="{ paddingTop: 20 + 'rpx' }"
            :name="listItem.name"
            :size="22"
          ></u-icon>
          <text class="grid-text">{{ listItem.title }}</text>
        </u-grid-item>
      </u-grid>
    </view>

    <u-text text="可滑动" type="info" margin="10px 0 10px 10px" />
    <view>
      <swiper :indicator-dots="true" class="swiper">
        <swiper-item>
          <u-grid :border="true">
            <u-grid-item
              v-for="(item, index) in swiperList"
              :index="index"
              :key="index"
            >
              <u-icon
                :customStyle="{ paddingTop: 20 + 'rpx' }"
                :name="item"
                :size="22"
              ></u-icon>
              <text class="grid-text">{{ '宫格' + (index + 1) }}</text>
            </u-grid-item>
          </u-grid>
        </swiper-item>
        <swiper-item>
          <u-grid :border="true">
            <u-grid-item
              v-for="(item, index) in swiperList"
              :index="index + 9"
              :key="index"
            >
              <u-icon
                :customStyle="{ paddingTop: 20 + 'rpx' }"
                :name="item"
                :size="22"
              ></u-icon>
              <text class="grid-text">{{ '宫格' + (index + 1) }}</text>
            </u-grid-item>
          </u-grid>
        </swiper-item>
        <swiper-item>
          <u-grid :border="true">
            <u-grid-item
              v-for="(item, index) in swiperList"
              :index="index + 18"
              :key="index"
            >
              <u-icon
                :customStyle="{ paddingTop: 20 + 'rpx' }"
                :name="item"
                :size="22"
              ></u-icon>
              <text class="grid-text">{{ '宫格' + (index + 1) }}</text>
            </u-grid-item>
          </u-grid>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { Toast } from '@/utils/uniapi/prompt';

  const baseList = [
    {
      name: 'photo',
      title: '图片',
    },
    {
      name: 'lock',
      title: '锁头',
    },
    // {
    // 	name: 'star',
    // 	title: '星星'
    // },
  ];
  const list = [
    {
      name: 'photo',
      title: '图片',
    },
    {
      name: 'lock',
      title: '锁头',
    },
    {
      name: 'star',
      title: '星星',
    },
    {
      name: 'hourglass',
      title: '沙漏',
    },
    {
      name: 'home',
      title: '首页',
    },
    {
      name: 'volume',
      title: '音量',
    },
  ];
  const swiperList = [
    'integral',
    'kefu-ermai',
    'coupon',
    'gift',
    'scan',
    'pause-circle',
    'wifi',
    'email',
    'list',
  ];
  const click = (name: string | number | undefined) => {
    console.log(name);
    Toast(`点击了第${name}个`);
  };
</script>

<style lang="scss" scoped>
  .swiper {
    height: 220px;
  }

  .grid-text {
    font-size: 14px;
    color: #909399;
    padding: 10rpx 0 20rpx 0rpx;
    /* #ifndef APP-PLUS */
    box-sizing: border-box;
    /* #endif */
  }
</style>
