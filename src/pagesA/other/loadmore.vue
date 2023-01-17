<template>
  <view class="uno-px-15px">
    <u-text type="info" margin="10px 0" text="基础使用" />
    <u-loadmore status="loading" :isDot="true" :iconSize="17" />

    <u-text type="info" margin="10px 0" text="无更多数据" />
    <u-loadmore :line="true" status="nomore" />

    <u-text type="info" margin="10px 0" text="加载更多" />
    <u-loadmore :line="true" status="loadmore" @loadmore="loadmore" />

    <u-text type="info" margin="10px 0" text="自定义图标" />
    <u-loadmore status="loading" loadingIcon="circle" />

    <u-text type="info" margin="10px 0" text="显示点" />
    <u-loadmore status="nomore" :isDot="true" :line="true" color="#909399" />

    <u-text type="info" margin="10px 0" text="自定义提示语" />
    <u-loadmore
      status="loading"
      loadingText="努力加载中,先喝杯茶"
      color="#909399"
    />

    <u-text type="info" margin="10px 0" text="自定义线条颜色" />
    <u-loadmore
      loadmoreText="看,我和别人不一样"
      color="#1CD29B"
      lineColor="#1CD29B"
      dashed
      :line="true"
    />
  </view>
</template>

<script setup lang="ts">
  import { Toast } from '@/utils/uniapi/prompt';

  const loadmore = () => {
    console.log('loadmore');
    Toast('加载更多');
  };
</script>
