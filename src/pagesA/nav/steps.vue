<template>
  <view class="_u_px-15px">
    <u-text type="info" margin="10px 0" text="基础演示" />
    <view class="_u_flex">
      <u-steps :current="current1">
        <u-steps-item title="已下单" desc="10:30" />
        <u-steps-item title="已出库" desc="10:35" />
        <u-steps-item title="运输中" desc="11:40" />
      </u-steps>
    </view>

    <u-text type="info" margin="10px 0" text="显示点类型" />
    <view>
      <u-steps :current="1" dot>
        <u-steps-item title="已下单" desc="10:30" />
        <u-steps-item title="已出库" desc="10:35" />
        <u-steps-item title="运输中" desc="11:40" />
      </u-steps>
      <u-steps :current="1" dot direction="column">
        <u-steps-item title="已下单" desc="10:30" />
        <u-steps-item title="已出库" desc="10:35" />
        <u-steps-item title="运输中" desc="11:40" />
      </u-steps>
    </view>

    <u-text type="info" margin="10px 0" text="错误状态" />
    <view>
      <u-steps :current="1">
        <u-steps-item title="已下单" desc="10:30" />
        <u-steps-item error title="仓库着火" desc="10:35" />
        <u-steps-item title="破产清算" desc="11:40" />
      </u-steps>
    </view>

    <u-text type="info" margin="10px 0" text="自定义图标" />
    <view>
      <u-steps :current="1" activeIcon="checkmark" inactiveIcon="arrow-right">
        <u-steps-item title="已下单" desc="10:30" />
        <u-steps-item title="已出库" desc="10:35" />
        <u-steps-item title="运输中" desc="11:40" />
      </u-steps>
    </view>

    <u-text type="info" margin="10px 0" text="自定义插槽" />
    <view>
      <u-steps :current="1">
        <u-steps-item title="已下单" desc="10:30" />
        <u-steps-item title="已出库" desc="10:35" />
        <u-steps-item title="运输中" desc="11:40">
          <template v-slot:icon>
            <text class="slot-icon">运</text>
          </template>
        </u-steps-item>
      </u-steps>
    </view>

    <u-text type="info" margin="10px 0" text="自定义颜色" />
    <view>
      <u-steps :current="1" activeColor="#3c9cff">
        <u-steps-item title="已下单" desc="10:30" />
        <u-steps-item title="已出库" desc="10:35" />
        <u-steps-item title="运输中" desc="11:40" />
      </u-steps>
    </view>

    <u-text type="info" margin="10px 0" text="竖向展示" />
    <view>
      <u-steps :current="1" direction="column">
        <u-steps-item title="已下单" desc="10:30" />
        <u-steps-item title="已出库" desc="10:35" />
        <u-steps-item title="运输中" desc="11:40" />
      </u-steps>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const current1 = ref(1);
</script>

<style lang="scss" scoped>
  .slot-icon {
    width: 21px;
    height: 21px;
    background-color: $u-warning;
    border-radius: 100px;
    font-size: 12px;
    color: #fff;
    line-height: 21px;
    text-align: center;
  }
</style>
