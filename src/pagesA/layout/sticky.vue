<template>
  <view class="u-page">
    <text class="u-demo-block__title">基础使用</text>
    <u-text type="content" text="滚动页面,即可看到下方的按钮会吸顶。"></u-text>
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
    <u-text align="center" text="已到底部"></u-text>
  </view>
</template>

<script setup lang="ts"></script>
