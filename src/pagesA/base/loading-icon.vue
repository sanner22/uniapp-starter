<template>
  <view class="uno-px-15px">
    <u-text text="基本案列" type="info" margin="10px 0"></u-text>
    <view class="uno-flex">
      <u-loading-icon></u-loading-icon>
    </view>

    <u-text text="半圆loading" type="info" margin="10px 0"></u-text>
    <view class="uno-flex">
      <u-loading-icon mode="semicircle"></u-loading-icon>
    </view>

    <u-text text="圆形loading" type="info" margin="10px 0"></u-text>
    <view class="uno-flex">
      <u-loading-icon mode="circle"></u-loading-icon>
    </view>

    <u-text text="自定义动画" type="info" margin="10px 0"></u-text>
    <view class="uno-flex">
      <u-loading-icon mode="circle" timingFunction="linear"></u-loading-icon>
    </view>

    <u-text text="自定义颜色" type="info" margin="10px 0"></u-text>
    <view class="uno-flex">
      <u-loading-icon color="#19be6b"></u-loading-icon>
    </view>

    <u-text text="自定义文字" type="info" margin="10px 0"></u-text>
    <view class="uno-flex">
      <u-loading-icon :vertical="true" text="加载中"></u-loading-icon>
    </view>
  </view>
</template>
