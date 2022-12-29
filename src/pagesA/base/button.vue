<script lang="ts" setup></script>

<template>
  <view class="_u_px-15px">
    <u-text text="按钮类型" type="info" margin="10px 0"></u-text>
    <view class="_u_flex _u_flex-wrap _u_gap-3">
      <u-button>默认按钮</u-button>
      <u-button type="primary">主要按钮</u-button>
      <u-button type="success">成功按钮</u-button>
      <u-button type="warning">警告按钮</u-button>
      <u-button type="error">危险按钮</u-button>
    </view>

    <u-text text="镂空按钮" type="info" margin="10px 0"></u-text>
    <view class="_u_flex _u_flex-wrap _u_gap-3">
      <u-button plain :hairline="false">默认按钮</u-button>
      <u-button type="primary" plain :hairline="false">主要按钮</u-button>
      <u-button type="success" plain :hairline="false">成功按钮</u-button>
      <u-button type="warning" plain :hairline="false">警告按钮</u-button>
      <u-button type="error" plain :hairline="false">危险按钮</u-button>
    </view>

    <u-text text="细边按钮" type="info" margin="10px 0"></u-text>
    <view class="_u_flex _u_flex-wrap _u_gap-3">
      <u-button plain hairline>默认按钮</u-button>
      <u-button type="primary" plain hairline>主要按钮</u-button>
      <u-button type="success" plain hairline>成功按钮</u-button>
      <u-button type="warning" plain hairline>警告按钮</u-button>
      <u-button type="error" plain hairline>危险按钮</u-button>
    </view>

    <u-text text="禁用按钮" type="info" margin="10px 0"></u-text>
    <view class="_u_flex _u_flex-wrap _u_gap-3">
      <u-button disabled>默认按钮</u-button>
      <u-button type="primary" disabled>主要按钮</u-button>
      <u-button type="success" disabled>成功按钮</u-button>
      <u-button type="warning" disabled>警告按钮</u-button>
      <u-button type="error" disabled>危险按钮</u-button>
    </view>

    <u-text text="加载中" type="info" margin="10px 0"></u-text>
    <view class="_u_flex _u_flex-wrap _u_gap-3">
      <u-button
        type="primary"
        loading
        loading-text="加载中"
        loading-mode="spinner"
        >主要按钮</u-button
      >
      <u-button
        type="success"
        loading
        loading-text="加载中"
        loading-mode="circle"
        >成功按钮</u-button
      >
      <u-button type="warning" loading>警告按钮</u-button>
    </view>

    <u-text text="按钮图标&按钮形状" type="info" margin="10px 0"></u-text>
    <view class="_u_flex _u_flex-wrap _u_gap-3">
      <u-button icon="lock-opened-fill" plain>默认按钮</u-button>
      <u-button icon="lock-opened-fill" type="primary" plain shape="circle">
        主要按钮
      </u-button>
    </view>

    <u-text text="自定义颜色" type="info" margin="10px 0"></u-text>
    <view class="_u_flex _u_flex-wrap _u_gap-3">
      <u-button
        text="渐变色按钮"
        size="normal"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
      ></u-button>
      <u-button
        text="渐变色按钮"
        size="normal"
        color="linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))"
      ></u-button>
      <u-button
        text="青绿色按钮"
        size="normal"
        color="rgb(10, 185, 156)"
      ></u-button>
    </view>

    <u-text text="自定义大小" type="info" margin="10px 0"></u-text>
    <view class="_u_mb-15px">
      <u-button text="超大尺寸" size="large" type="success"></u-button>
    </view>
    <view class="_u_flex _u_flex-wrap _u_gap-3">
      <u-button text="普通尺寸" size="normal" type="error"></u-button>
      <u-button text="小型尺寸" size="small" type="primary"></u-button>
      <u-button text="超小尺寸" size="mini" type="warning"></u-button>
    </view>
  </view>
</template>

<style lang="scss" scoped></style>
