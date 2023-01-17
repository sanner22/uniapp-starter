<template>
  <view class="uno-px-15px">
    <u-text type="info" margin="10px 0" text="基础使用"></u-text>
    <view>
      <u-row customStyle="margin-bottom: 10px">
        <u-col span="6">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="6">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row customStyle="margin-bottom: 10px">
        <u-col span="4">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="4">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="4">
          <view class="demo-layout bg-purple-dark"></view>
        </u-col>
      </u-row>
      <u-row justify="space-between">
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
      </u-row>
    </view>

    <u-text type="info" margin="10px 0" text="分栏间隔"></u-text>
    <view>
      <u-row justify="space-between" gutter="10">
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
      </u-row>
    </view>

    <u-text type="info" margin="10px 0" text="混合布局"></u-text>
    <view>
      <u-row justify="space-between" gutter="10">
        <u-col span="2">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="4">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="6">
          <view class="demo-layout bg-purple-dark"></view>
        </u-col>
      </u-row>
    </view>

    <u-text type="info" margin="10px 0" text="分栏偏移"></u-text>
    <view>
      <u-row justify="space-between" customStyle="margin-bottom: 10px">
        <u-col span="3" offset="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3" offset="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3" offset="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
    </view>

    <u-text type="info" margin="10px 0" text="对齐方式"></u-text>
    <view>
      <u-row justify="space-between" customStyle="margin-bottom: 10px">
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .demo-layout {
    width: 100%;
    height: 25px;
    border-radius: 4px;
  }

  .bg-purple {
    background: #ced7e1;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }
</style>
