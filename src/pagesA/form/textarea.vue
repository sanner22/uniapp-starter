<template>
  <view class="uno-px-15px">
    <u-text text="基础使用" type="info" margin="10px 0" />
    <u-textarea v-model="value1" placeholder="请输入内容" />

    <u-text text="字数统计" type="info" margin="10px 0" />
    <u-textarea v-model="value2" placeholder="请输入内容" count />

    <u-text text="自动增高" type="info" margin="10px 0" />
    <u-textarea v-model="value3" placeholder="请输入内容" autoHeight />

    <u-text text="禁用状态" type="info" margin="10px 0" />
    <u-textarea v-model="value4" placeholder="文本域已被禁用" disabled count />

    <u-text text="下划线模式" type="info" margin="10px 0" />
    <u-textarea v-model="value5" placeholder="请输入内容" border="bottom" />

    <u-gap height="30" />
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const value1 = ref('');
  const value2 = ref('统计字数');
  const value3 = ref('');
  const value4 = ref('');
  const value5 = ref('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const formatter = (value: string) => {
    return value.replace(/[^0-9]/gi, '');
  };
</script>
