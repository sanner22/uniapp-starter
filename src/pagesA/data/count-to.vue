<template>
  <view class="_u_px-15px">
    <u-text text="基础功能" type="info" margin="10px 0" />
    <view>
      <u-count-to :endVal="value" @end="end"></u-count-to>
    </view>

    <u-text text="倒计数" type="info" margin="10px 0" />
    <view>
      <u-count-to :startVal="startVal1"></u-count-to>
    </view>

    <u-text text="显示小数位" type="info" margin="10px 0" />
    <view>
      <u-count-to
        :startVal="startVal2"
        :endVal="endVal"
        :decimals="decimals"
      ></u-count-to>
    </view>

    <u-text text="千分位分隔符" type="info" margin="10px 0" />
    <view>
      <u-count-to
        :startVal="startVal3"
        :endVal="endVal2"
        separator=","
        :decimals="decimals"
      ></u-count-to>
    </view>

    <u-text text="自定义控制" type="info" margin="10px 0" />
    <view>
      <u-count-to
        ref="countTo1"
        :endVal="endVal3"
        :autoplay="autoplay"
      ></u-count-to>
    </view>
    <u-grid
      border
      align="center"
      customStyle="margin-top: 20px;margin-bottom: 20"
    >
      <u-grid-item @click="start">
        <view class="u-grid-slot">
          <view class="u-grid-slot__circle">
            <text class="u-grid-slot__circle__text">开始</text>
          </view>
        </view>
      </u-grid-item>
      <u-grid-item @click="paused">
        <view class="u-grid-slot">
          <view class="u-grid-slot__circle">
            <text class="u-grid-slot__circle__text">暂停</text>
          </view>
        </view>
      </u-grid-item>
      <u-grid-item @click="resume">
        <view class="u-grid-slot">
          <view class="u-grid-slot__circle">
            <text class="u-grid-slot__circle__text">继续</text>
          </view>
        </view>
      </u-grid-item>
    </u-grid>

    <u-text text="自定义" type="info" margin="10px 0" />
    <view>
      <u-count-to
        :endVal="value"
        color="#909399"
        :fontSize="fontSize"
        :bold="true"
      ></u-count-to>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const value = ref(3000);
  const startVal1 = ref(300);
  const startVal2 = ref(100.0);
  const endVal = ref(10.55);
  const decimals = ref(2);
  const startVal3 = ref(2000);
  const endVal2 = ref(1542);
  const endVal3 = ref(3000);
  const autoplay = ref(false);
  const fontSize = ref(40);

  const countTo1 = ref(null);
  const start = () => {
    (countTo1 as any).start();
  };
  const paused = () => {
    (countTo1 as any).stop();
  };
  const resume = () => {
    (countTo1 as any).resume();
  };
  const end = () => {
    console.log('end');
  };
</script>

<style lang="scss" scoped>
  .u-grid-slot {
    border-radius: 100px;
    border-color: #dbfbdb;
    border-width: 2px;
    @include flex;

    &__circle {
      width: 50px;
      height: 50px;
      background-color: #dbfbdb;
      border-radius: 100px;
      justify-content: center;
      align-items: center;
      margin: 2px;

      &__text {
        color: rgb(25, 190, 107);
        font-size: 13px;
      }
    }
  }
</style>
