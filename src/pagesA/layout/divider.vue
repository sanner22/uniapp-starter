<template>
  <view class="_u_px-15px">
    <u-text type="info" margin="10px 0" text="基本案例" />
    <view>
      <u-divider text="分割线" />
    </view>

    <u-text type="info" margin="10px 0" text="是否虚线" />
    <view>
      <u-divider text="分割线" :dashed="true" />
    </view>

    <u-text type="info" margin="10px 0" text="是否细线" />
    <view>
      <u-divider text="分割线" :hairline="true" />
    </view>

    <u-text cla type="info" margin="10px 0" text="点代替文字" />
    <view>
      <u-divider text="分割线" :dot="true" />
    </view>

    <u-text c type="info" margin="10px 0" text="本内容靠左" />
    <view>
      <u-divider text="分割线" textPosition="left" />
    </view>

    <u-text c type="info" margin="10px 0" text="本内容靠右" />
    <view>
      <u-divider text="分割线" textPosition="right" />
    </view>

    <u-text cl type="info" margin="10px 0" text="义文本颜色" />
    <view>
      <u-divider text="分割线" textColor="#2979ff" lineColor="#2979ff" />
    </view>
  </view>
</template>
