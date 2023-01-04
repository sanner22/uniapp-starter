<template>
  <view class="_u_px-15px">
    <u-text type="info" margin="10px 0" text="基本案例" />
    <u-link
      href="https://uviewui.com/"
      text="打开uView UI文档"
      @click="click"
    />

    <u-text type="info" margin="10px 0" text="显示下划线" />
    <u-link
      href="https://uviewui.com/"
      :underLine="true"
      text="Go to uView doc"
    />

    <u-text type="info" margin="10px 0" text="自定义颜色" />
    <u-link
      href="https://uviewui.com/"
      lineColor="#19be6b"
      color="#19be6b"
      text="打开uView UI文档"
    />

    <u-text type="info" margin="10px 0" text="自定义链接内容" />
    <u-link href="https://uniapp.dcloud.io/" text="打开uni-app文档" />
  </view>
</template>

<script setup lang="ts">
  const click = () => {
    console.log('click');
  };
</script>
