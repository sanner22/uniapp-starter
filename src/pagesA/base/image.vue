<script lang="ts" setup></script>

<template>
  <view class="uno-px-15px">
    <u-text text="基本案例" type="info" margin="10px 0"></u-text>
    <u-image
      src="https://cdn.uviewui.com/uview/album/1.jpg"
      mode="aspectFill"
      width="80"
      height="80"
    />

    <u-text text="自定义形状" type="info" margin="10px 0"></u-text>
    <u-image
      src="https://cdn.uviewui.com/uview/album/1.jpg"
      mode="aspectFill"
      width="80"
      height="80"
      shape="circle"
    />

    <u-text text="自定义圆角" type="info" margin="10px 0"></u-text>
    <u-image
      src="https://cdn.uviewui.com/uview/album/1.jpg"
      mode="aspectFill"
      width="80"
      height="80"
      radius="8"
    />

    <u-text text="图片模式（aspectFit）" type="info" margin="10px 0"></u-text>
    <u-image
      src="https://cdn.uviewui.com/uview/album/1.jpg"
      mode="aspectFit"
      width="80"
      height="80"
    />

    <u-text text="自定义图片加载插槽" type="info" margin="10px 0"></u-text>
    <u-image src="https://" mode="aspectFill" width="80" height="80">
      <template #error>
        <u-image
          src="https://cdn.uviewui.com/uview/album/1.jpg"
          mode="aspectFill"
          width="80"
          height="80"
        />
      </template>
    </u-image>
  </view>
</template>

<style lang="scss" scoped></style>
