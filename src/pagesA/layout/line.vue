<template>
  <view class="_u_px-15px">
    <u-text text="基本案例" type="info" margin="10px 0" />
    <view class="_u_my-10px">
      <u-line></u-line>
    </view>

    <u-text text="自定义颜色" type="info" margin="10px 0" />
    <view class="_u_my-10px">
      <u-line color="#2979ff"></u-line>
    </view>

    <u-text text="自定义长度" type="info" margin="10px 0" />
    <view class="_u_my-10px _u_flex">
      <u-line length="200"></u-line>
    </view>

    <u-text text="自定义方向" type="info" margin="10px 0" />
    <view class="_u_my-10px _u_flex">
      <u-line length="30" color="#2979ff" direction="col"></u-line>
    </view>

    <u-text text="是否显示1px粗线条" type="info" margin="10px 0" />
    <view class="_u_my-10px">
      <u-line :hairline="false"></u-line>
    </view>

    <u-text text="线条与上下左右元素的间距" type="info" margin="10px 0" />
    <view class="_u_my-10px">
      <u-line margin="20"></u-line>
    </view>

    <u-text text="是否虚线" type="info" margin="10px 0" />
    <view class="_u_my-10px">
      <u-line color="#2979ff" :dashed="true"></u-line>
    </view>
  </view>
</template>

<script setup lang="ts"></script>
