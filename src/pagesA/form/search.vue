<template>
  <view class="uno-p-15px uno-pt-0">
    <u-text text="基础功能" type="info" margin="10px 0"></u-text>
    <view>
      <u-search v-model="value1" :show-action="false" @change="change" />
    </view>

    <u-text text="设置初始值" type="info" margin="10px 0"></u-text>
    <view>
      <u-search v-model="value2" :show-action="false" />
    </view>

    <u-text text="搜索框形状" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-col uno-gap-15px">
      <u-search v-model="value3" :show-action="false" shape="round" />
      <u-search v-model="value4" :show-action="false" shape="square" />
    </view>

    <u-text text="右侧控件" type="info" margin="10px 0"></u-text>
    <view>
      <u-search v-model="value5" @custom="searchCustom" />
    </view>

    <u-text text="禁用输入框" type="info" margin="10px 0"></u-text>
    <view>
      <u-search placeholder="输入框被禁用,可以监听点击事件进行跳转" disabled :show-action="false" />
    </view>

    <u-text text="点击左侧图标" type="info" margin="10px 0"></u-text>
    <view>
      <u-search v-model="value6" :show-action="false" @clickIcon="clickIcon" />
    </view>

    <u-text text="搜索框内容水平对齐" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-col uno-gap-15px">
      <u-search v-model="value7" :show-action="false" input-align="left" />
      <u-search v-model="value8" :show-action="false" input-align="center" />
      <u-search v-model="value9" :show-action="false" input-align="right" />
    </view>

    <u-text text="自定义" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-col uno-gap-15px">
      <u-search v-model="value10" :show-action="false" borderColor="rgb(230, 230, 230)" bgColor="#fff" />
      <u-search v-model="value11" :show-action="false" search-icon-color="#FF0000" />
      <u-search v-model="value12" :show-action="false" placeholder-color="#FF0000" />
      <u-search v-model="value13" :show-action="false" color="#FF0000" />
      <u-search v-model="value14" label="手机" :show-action="false" />
      <u-search v-model="value15" search-icon="scan" :show-action="false" />
    </view>

    <u-gap height="30" />
  </view>
</template>

<script setup lang="ts">
  import { Toast } from '@/utils/uniapi/prompt';
  import { ref } from 'vue';

  const value1 = ref('');
  const value2 = ref('天山雪莲');
  const value3 = ref('');
  const value4 = ref('');
  const value5 = ref('');
  const value6 = ref('');
  const value7 = ref('');
  const value8 = ref('');
  const value9 = ref('');
  const value10 = ref('');
  const value11 = ref('');
  const value12 = ref('');
  const value13 = ref('');
  const value14 = ref('');
  const value15 = ref('');
  const change = (e: any) => {
    console.log(e);
  };
  const clickIcon = () => {
    Toast('点击了左侧图标');
  };

  const searchCustom = (e: any) => {
    console.log(e);
    Toast('触发 custom 事件');
  };
</script>
