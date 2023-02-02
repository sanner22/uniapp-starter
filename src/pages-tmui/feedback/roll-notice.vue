<template>
  <tm-app>
    <tm-roll-notice @click="test" list="测试滚动测试滚动测试滚动测试滚动测试滚动"></tm-roll-notice>
    <tm-roll-notice @click="test" :text="false" :list="content"></tm-roll-notice>
    <tm-roll-notice
      @click="test"
      :shadow="2"
      :round="2"
      color="red"
      :text="false"
      linear="right"
      :list="content"
    ></tm-roll-notice>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const content = ref(['11测试滚动试滚end', '22测试滚动测试滚动测试滚动测试滚动测试滚动']);
  const test = (index: number) => {
    console.log('点击了：', index);
  };
</script>
