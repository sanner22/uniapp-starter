<script lang="ts" setup>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const convertEnumEntriesToArray = (
    entries: [string, any][],
  ): Array<{ label: string; value: string | number }> => {
    const result = entries.map(([key, value]) => ({ label: key, value }));
    if (result.find(i => typeof i.value === 'number'))
      return result.filter(i => typeof i.value === 'number');
    return result;
  };

  const $uConfig = uni.$u.config;
  const $typeColors = {
    primary: { dark: '#398ade', disabled: '#9acafc', light: '#ecf5ff' },
    success: { dark: '#53c21d', disabled: '#a9e08f', light: '#f5fff0' },
    warning: { dark: '#f1a532', disabled: '#f9d39b', light: '#fdf6ec' },
    error: { dark: '#e45656', disabled: '#f7b2b2', light: '#fef0f0' },
    info: { dark: '#767a82', disabled: '#c4c6c9', light: '#f4f4f5' },
  };

  const getColor = (type: string, key: string) => {
    return ($typeColors as any)[type][key];
  };
</script>

<template>
  <view class="_u_p-15px">
    <view v-for="(item, index) in $uConfig.type" :key="index">
      <u-text :text="item" :type="item" margin="10px 0"></u-text>
      <u-row gutter="15">
        <u-col span="3">
          <view
            class="color-box"
            :style="{
              backgroundColor: $uConfig.color[`u-${item}`],
            }"
          >
            <view>{{ item }}</view>
            <view>{{ $uConfig.color[`u-${item}`] }}</view>
          </view>
        </u-col>
        <u-col span="3">
          <view
            class="color-box"
            :style="{
              backgroundColor: getColor(item, 'dark'),
            }"
          >
            <view>Dark</view>
            <view>{{ getColor(item, 'dark') }}</view>
          </view>
        </u-col>
        <u-col span="3">
          <view
            class="color-box"
            :style="{
              backgroundColor: getColor(item, 'disabled'),
            }"
          >
            <view>Disabled</view>
            <view>{{ getColor(item, 'dark') }}</view>
          </view>
        </u-col>
        <u-col span="3">
          <view
            class="color-box"
            :style="{
              color: '#909399',
              backgroundColor: getColor(item, 'light'),
            }"
          >
            <view>Light</view>
            <view>{{ getColor(item, 'dark') }}</view>
          </view>
        </u-col>
      </u-row>
    </view>
    <u-text text="文字颜色" type="info" margin="10px 0"></u-text>
    <u-row gutter="15">
      <u-col span="3">
        <view
          class="color-box"
          :style="{
            backgroundColor: '#303133',
          }"
        >
          <view>主要颜色</view>
          <view>#303133</view>
        </view>
      </u-col>
      <u-col span="3">
        <view
          class="color-box"
          :style="{
            backgroundColor: '#606266',
          }"
        >
          <view>常规文字</view>
          <view>#606266</view>
        </view>
      </u-col>
      <u-col span="3">
        <view
          class="color-box"
          :style="{
            backgroundColor: '#909399',
          }"
        >
          <view>次要文字</view>
          <view>#909399</view>
        </view>
      </u-col>
      <u-col span="3">
        <view
          class="color-box"
          :style="{
            color: '#909399',
            backgroundColor: '#c0c4cc',
          }"
        >
          <view>占位文字</view>
          <view>#c0c4cc</view>
        </view>
      </u-col>
    </u-row>
    <u-text text="边框颜色" type="info" margin="10px 0"></u-text>
    <u-row gutter="15">
      <u-col span="3">
        <view
          class="color-box"
          :style="{
            backgroundColor: '#9a9998',
          }"
        >
          <view>一级边框</view>
          <view>#9a9998</view>
        </view>
      </u-col>
      <u-col span="3">
        <view
          class="color-box"
          :style="{
            backgroundColor: '#b4b3b1',
          }"
        >
          <view>二级边框</view>
          <view>#b4b3b1</view>
        </view>
      </u-col>
      <u-col span="3">
        <view
          class="color-box"
          :style="{
            backgroundColor: '#ceccca',
          }"
        >
          <view>三级边框</view>
          <view>#ceccca</view>
        </view>
      </u-col>
      <u-col span="3">
        <view
          class="color-box"
          :style="{
            color: '#909399',
            backgroundColor: '#e7e6e4',
          }"
        >
          <view>四级边框</view>
          <view>#e7e6e4</view>
        </view>
      </u-col>
    </u-row>
    <u-text text="背景颜色" type="info" margin="10px 0"></u-text>
    <u-row gutter="15">
      <u-col span="3">
        <view
          class="color-box"
          :style="{
            color: '#909399',
            backgroundColor: '#f3f4f6',
          }"
        >
          <view>背景颜色</view>
          <view>#f3f4f6</view>
        </view>
      </u-col>
    </u-row>
  </view>
</template>

<style lang="scss" scoped>
  .color-box {
    color: #fff;
    font-size: 12px;
    text-align: center;
    padding: 6px 0;
    border-radius: 5px;
  }
</style>
