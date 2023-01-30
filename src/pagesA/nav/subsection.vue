<template>
  <view class="uno-px-15px">
    <u-text type="info" margin="10px 0" text="基础使用"></u-text>
    <view>
      <u-subsection :list="list" mode="subsection" :current="current1" @change="change1"></u-subsection>
    </view>

    <u-text type="info" margin="10px 0" text="按钮模式"></u-text>
    <view>
      <u-subsection :list="list" mode="button" :current="current2" @change="change2"></u-subsection>
    </view>

    <u-text type="info" margin="10px 0" text="更换主题"></u-text>
    <view>
      <u-subsection
        :list="list"
        mode="subsection"
        :current="current3"
        activeColor="#f56c6c"
        @change="change3"
      ></u-subsection>
    </view>

    <u-text type="info" margin="10px 0" text="默认位置"></u-text>
    <view>
      <u-subsection
        :list="list"
        mode="button"
        :current="current4"
        activeColor="#f9ae3d"
        @change="change4"
      ></u-subsection>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const current1 = ref(0);
  const current2 = ref(0);
  const current3 = ref(0);
  const current4 = ref(1);
  const list = ref(['未付款', '待评价', '已付款']);
  // 或者如下，也可以配置keyName参数修改对象键值
  // list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],

  const change1 = (index: number) => {
    current1.value = index;
  };
  const change2 = (index: number) => {
    current2.value = index;
  };
  const change3 = (index: number) => {
    current3.value = index;
  };
  const change4 = (index: number) => {
    current4.value = index;
  };
</script>
