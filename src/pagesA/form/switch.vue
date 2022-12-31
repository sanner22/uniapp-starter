<template>
  <view class="_u_px-15px">
    <u-text text="基础功能" type="info" margin="10px 0" />
    <view class="_u_flex _u_gap-15px">
      <view>
        <u-switch v-model="value1" @change="change"></u-switch>
        {{ value1 }}
      </view>
      <view>
        <u-switch v-model="value2"></u-switch>
        {{ value2 }}
      </view>
    </view>

    <u-text text="加载中" type="info" margin="10px 0" />
    <view class="_u_flex _u_gap-15px">
      <view>
        <u-switch v-model="value3" loading></u-switch>
      </view>
      <view>
        <u-switch v-model="value4" loading></u-switch>
      </view>
    </view>

    <u-text text="禁用状态" type="info" margin="10px 0" />
    <view class="_u_flex _u_gap-15px">
      <view>
        <u-switch v-model="value5" disabled></u-switch>
      </view>
      <view>
        <u-switch v-model="value6" disabled></u-switch>
      </view>
    </view>

    <u-text text="自定义尺寸" type="info" margin="10px 0" />
    <view class="_u_flex _u_gap-15px">
      <view>
        <u-switch v-model="value7" size="28"></u-switch>
      </view>
      <view>
        <u-switch v-model="value8" size="20"></u-switch>
      </view>
    </view>

    <u-text text="自定义颜色" type="info" margin="10px 0" />
    <view class="_u_flex _u_gap-15px">
      <view>
        <u-switch v-model="value9" activeColor="#f56c6c" loading></u-switch>
      </view>
      <view>
        <u-switch v-model="value10" activeColor="#5ac725" loading></u-switch>
      </view>
    </view>

    <u-text text="自定义样式" type="info" margin="10px 0" />
    <view class="_u_flex _u_gap-15px">
      <view>
        <u-switch
          :space="2"
          v-model="value11"
          activeColor="#f56c6c"
          inactiveColor="rgb(230, 230, 230)"
        ></u-switch>
      </view>
      <view>
        <u-switch
          space="2"
          v-model="value12"
          activeColor="#f9ae3d"
          inactiveColor="rgb(230, 230, 230)"
        ></u-switch>
      </view>
    </view>

    <u-text text="异步控制" type="info" margin="10px 0" />
    <view class="_u_flex _u_gap-15px">
      <u-switch v-model="value13" asyncChange @change="asyncChange"></u-switch>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { Modal } from '@/utils/uniapi/prompt';
  import { ref, watch } from 'vue';

  const value1 = ref(false);
  const value2 = ref(true);
  const value3 = ref(false);
  const value4 = ref(true);
  const value5 = ref(false);
  const value6 = ref(true);
  const value7 = ref(false);
  const value8 = ref(true);
  const value9 = ref(true);
  const value10 = ref(true);
  const value11 = ref(false);
  const value12 = ref(true);
  const value13 = ref(true);

  watch(
    () => value1.value,
    (newVal, oldVal) => {
      console.log('v-model', { newVal, oldVal });
    },
  );

  const change = (e: any) => {
    console.log('change', e);
  };
  const asyncChange = (e: boolean) => {
    //# 貌似这里有问题呢
    Modal({
      content: e ? '确定要打开吗' : '确定要关闭吗',
      success: res => {
        console.log(res);
        if (res.confirm) {
          value13.value = e;
        }
      },
      fail: error => {
        console.log(error);
      },
    });
  };
</script>
