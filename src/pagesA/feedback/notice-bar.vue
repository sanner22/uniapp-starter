<template>
  <view class="uno-px-15px">
    <u-text text="基础功能" type="info" margin="10px 0" />
    <view>
      <u-notice-bar :text="text1" />
    </view>

    <u-text text="可关闭" type="info" margin="10px 0" />
    <view>
      <u-notice-bar :text="text5" mode="closable" />
    </view>

    <u-text text="自定义横向滚动速度" type="info" margin="10px 0" />
    <view>
      <u-notice-bar :text="text2" speed="250" mode="closable" />
    </view>

    <u-text text="可跳转(点击右箭头)" type="info" margin="10px 0" />
    <view>
      <u-notice-bar
        :text="text3"
        mode="link"
        url="/pages/componentsB/tag/tag"
      />
    </view>

    <u-text text="横向步进滚动" type="info" margin="10px 0" />
    <view>
      <u-notice-bar :text="text4" :step="true" @click="click" />
    </view>

    <u-text text="纵向滚动" type="info" margin="10px 0" />
    <view>
      <u-notice-bar :text="text4" direction="column" @click="click" />
    </view>

    <u-text text="自定义样式" type="info" margin="10px 0" />
    <view>
      <u-notice-bar :text="text1" color="#ffffff" bgColor="#f56c6c" />
    </view>
  </view>
</template>

<script setup lang="ts">
  const text1 =
    'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用';
  const text2 =
    'uView UI众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨';
  const text3 =
    'uView UI收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍';
  const text4 = [
    '寒雨连江夜入吴',
    '平明送客楚山孤',
    '洛阳亲友如相问',
    '一片冰心在玉壶',
  ];
  const text5 =
    '涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川';

  const click = (e: any) => {
    console.log(e);
  };
</script>
