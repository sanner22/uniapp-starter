<template>
  <view class="uno-px-15px">
    <u-text text="按钮类型" type="info" margin="10px 0" />
    <view class="uno-flex uno-flex-wrap uno-gap-15px u-button-box">
      <u-button text="默认按钮" />
      <u-button type="primary" text="主要按钮" />
      <u-button type="success" text="成功按钮" />
      <u-button type="warning" text="警告按钮" />
      <u-button type="error" text="危险按钮" />
    </view>

    <u-text text="镂空按钮" type="info" margin="10px 0" />
    <view class="uno-flex uno-flex-wrap uno-gap-15px u-button-box">
      <u-button plain :hairline="false" text="默认按钮" />
      <u-button type="primary" plain :hairline="false" text="主要按钮" />
      <u-button type="success" plain :hairline="false" text="成功按钮" />
      <u-button type="warning" plain :hairline="false" text="警告按钮" />
      <u-button type="error" plain :hairline="false" text="危险按钮" />
    </view>

    <u-text text="细边按钮" type="info" margin="10px 0" />
    <view class="uno-flex uno-flex-wrap uno-gap-15px u-button-box">
      <u-button plain hairline text="默认按钮" />
      <u-button type="primary" plain hairline text="主要按钮" />
      <u-button type="success" plain hairline text="成功按钮" />
      <u-button type="warning" plain hairline text="警告按钮" />
      <u-button type="error" plain hairline text="危险按钮" />
    </view>

    <u-text text="禁用按钮" type="info" margin="10px 0" />
    <view class="uno-flex uno-flex-wrap uno-gap-15px u-button-box">
      <u-button disabled text="默认按钮" />
      <u-button type="primary" disabled text="主要按钮" />
      <u-button type="success" disabled text="成功按钮" />
      <u-button type="warning" disabled text="警告按钮" />
      <u-button type="error" disabled text="危险按钮" />
    </view>

    <u-text text="加载中" type="info" margin="10px 0" />
    <view class="uno-flex uno-flex-wrap uno-gap-15px u-button-box">
      <u-button
        type="primary"
        loading
        loading-text="加载中"
        loading-mode="spinner"
        text="主要按钮"
      />
      <u-button
        type="success"
        loading
        loading-text="加载中"
        loading-mode="circle"
        text="成功按钮"
      />
      <u-button type="warning" loading text="警告按钮" />
    </view>

    <u-text text="按钮图标&按钮形状" type="info" margin="10px 0" />
    <view class="uno-flex uno-flex-wrap uno-gap-15px u-button-box">
      <u-button icon="lock-opened-fill" plain>默认按钮</u-button>
      <u-button
        icon="lock-opened-fill"
        type="primary"
        plain
        shape="circle"
        text="主要按钮"
      />
    </view>

    <u-text text="自定义颜色" type="info" margin="10px 0" />
    <view class="uno-flex uno-flex-wrap uno-gap-15px u-button-box">
      <u-button
        text="渐变色按钮"
        size="normal"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
      />
      <u-button
        text="渐变色按钮"
        size="normal"
        color="linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))"
      />
      <u-button text="青绿色按钮" size="normal" color="rgb(10, 185, 156)" />
    </view>

    <u-text text="自定义大小" type="info" margin="10px 0" />
    <view class="uno-mb-15px">
      <u-button text="超大尺寸" size="large" type="success" />
    </view>
    <view class="uno-flex uno-flex-wrap uno-gap-15px u-button-box">
      <u-button text="普通尺寸" size="normal" type="error" />
      <u-button text="小型尺寸" size="small" type="primary" />
      <u-button text="超小尺寸" size="mini" type="warning" />
    </view>
  </view>

  <u-gap height="30" />
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .u-button-box {
    :deep(.u-button) {
      width: auto !important;
      margin: 0 !important;
    }
  }
</style>
