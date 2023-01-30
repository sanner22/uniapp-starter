<template>
  <view class="u-content">
    <u-parse
      container-style="padding: 20px"
      :content="content"
      lazy-load
      scroll-table
      selectable
      use-anchor
      :tag-style="tagStyle"
      @load="load"
      @ready="ready"
      @imgTap="imgTap"
      @linkTap="linkTap"
    />
  </view>
</template>

<script setup lang="ts">
  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';
  import htmlContent from './parse-html';

  const content = ref('');
  const tagStyle = {
    table: 'box-sizing: border-box; border-top: 1px solid #dfe2e5; border-left: 1px solid #dfe2e5;',
    th: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
    td: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
    li: 'margin: 5px 0;',
  };

  onLoad(_e => {
    // 模拟网络请求
    setTimeout(() => {
      content.value = htmlContent;
    }, 200);
  });

  const load = () => {
    // dom 结构加载完毕时触发
  };
  const ready = () => {
    // 渲染完毕时触发
  };
  const imgTap = () => {
    // 图片被点击时触发
  };
  const linkTap = () => {
    // 链接被点击时触发
  };
</script>

<style lang="scss" scoped>
  .u-content {
    padding: 24rpx;
    font-size: 32rpx;
    color: $u-content-color;
    line-height: 1.6;
  }
</style>
