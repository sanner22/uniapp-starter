<template>
  <view class="uno-px-15px">
    <u-text text="基础使用" type="info" margin="10px 0" />
    <view class="uno-center">
      <u-tooltip :text="text1" overlay />
    </view>

    <u-text text="下方显示" type="info" margin="10px 0" />
    <view class="uno-center">
      <u-tooltip :text="text2" direction="bottom" />
    </view>

    <u-text text="扩展按钮" type="info" margin="10px 0" />
    <view class="uno-center">
      <u-tooltip :text="text3" :buttons="buttons1" @click="click" />
    </view>

    <u-text text="自动调整位置" type="info" margin="10px 0" />
    <view class="uno-center">
      <u-tooltip :text="text4" :buttons="buttons2" />
    </view>

    <u-text text="高亮选中文本背景色" type="info" margin="10px 0" />
    <view class="uno-center">
      <u-tooltip :text="text5" :buttons="buttons3" bgColor="#e3e4e6" />
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const text1 = ref('长按文本，上方提示');
  const text2 = ref('长按文本，下方提示');
  const text3 = ref('显示多个扩展按钮');
  const text4 = ref('自动调整气泡位置');
  const text5 = ref('长按文本，显示背景色');
  const buttons1 = ref(['扩展']);
  const buttons2 = ref(['扩展', '搜索', '翻译']);
  const buttons3 = ref(['扩展', '搜索', '翻译']);

  const click = (index: any) => {
    console.log('index', index);
  };
</script>
