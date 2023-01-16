<template>
  <view class="_u_px-15px">
    <u-text text="基础使用" margin="10px 0" />
    <u-text type="content" text="滚动页面,即可看到下方的按钮会吸顶。"></u-text>
    <u-gap height="30" />

    <!-- #ifdef APP-NVUE -->
    <u-text
      type="warning"
      text="目前由于nvue的bug,设置sticky的top值无效。"
    ></u-text>
    <!-- #endif -->

    <u-sticky>
      <u-button text="吸顶按钮" type="success"></u-button>
    </u-sticky>

    <u-gap bgColor="#fff" height="1500px"></u-gap>
    <view class="_u_flex-row _u_pb-15px _u_w-full">
      <u-divider text="已到底部" custom-style="flex:1" />
    </view>
  </view>
</template>

<script setup lang="ts"></script>
