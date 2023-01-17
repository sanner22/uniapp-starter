<template>
  <view class="uno-px-15px">
    <u-text text="直角边形状" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-gap-15px">
      <u-badge :value="1500" shape="horn"></u-badge>
    </view>

    <u-text text="徽标数显示方式" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-gap-15px">
      <u-badge :value="5132" numberType="ellipsis"></u-badge>
      <u-badge :value="1011" numberType="overflow"></u-badge>
      <u-badge :value="1500" numberType="limit"></u-badge>
      <u-badge :value="45187" numberType="limit"></u-badge>
    </view>

    <u-text text="显示圆点" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-gap-15px">
      <u-badge :value="1011" numberType="overflow" isDot> </u-badge>
    </view>

    <u-text text="自定义主题" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-gap-15px">
      <u-badge :value="9" type="error"></u-badge>
      <u-badge :value="9" type="warning"></u-badge>
      <u-badge :value="9" type="success"></u-badge>
      <u-badge :value="9" type="primary"></u-badge>
    </view>

    <u-text text="反转色" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-gap-15px">
      <u-badge :value="9" type="error" inverted> </u-badge>
      <u-badge :value="1532" inverted type="warning"> </u-badge>
      <u-badge :value="12" inverted type="success"> </u-badge>
      <u-badge :value="999" inverted type="primary"> </u-badge>
    </view>
  </view>
</template>

<style lang="scss" scoped></style>
