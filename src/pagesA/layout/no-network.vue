<template>
  <view>
    <u-no-network @disconnected="disconnected" @connected="connected" @retry="retry" />
    <view class="u-content">
      <view class="u-content__circle">
        <u-icon name="checkbox-mark" color="#fff" size="30"></u-icon>
      </view>
      <u-text type="success" size="15" margin="15px 0 0" align="center" text="网络正常" />
      <u-text
        type="info"
        size="13"
        margin="15px 0 0"
        align="center"
        text="请您断开设备的WiFi和数据连接(或开启飞行模式)，即可看到效果"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
  const disconnected = () => {
    console.log('disconnected');
  };
  const connected = () => {
    console.log('connected');
  };
  const retry = () => {
    console.log('retry');
  };
</script>

<style lang="scss">
  .u-content {
    padding: 150px 60px 0;
    @include flex(column);
    align-items: center;
    justify-content: center;

    &__circle {
      background-color: $u-success;
      @include flex;
      border-radius: 100px;
      width: 60px;
      height: 60px;
      align-items: center;
      justify-content: center;
    }

    &__tips {
      color: $u-tips-color;
      font-size: 13px;
      margin-top: 15px;
      text-align: center;
    }
  }
</style>
