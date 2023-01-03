<template>
  <view>
    <u-text type="info" margin="10px 0 10px 10px" text="基础功能" />
    <u-navbar
      title="个人中心"
      :safeAreaInsetTop="false"
      :fixed="false"
      @rightClick="rightClick"
      @leftClick="leftClick"
    >
    </u-navbar>

    <u-text type="info" margin="10px 0 10px 10px" text="自定义背景色" />
    <u-navbar
      title="个人中心"
      :safeAreaInsetTop="false"
      :fixed="false"
      :bg-color="bgColor"
    >
    </u-navbar>

    <u-text type="info" margin="10px 0 10px 10px" text="自定义文本" />
    <u-navbar
      :safeAreaInsetTop="false"
      title="个人中心"
      :fixed="false"
      left-text="返回"
      rightIcon="map"
    >
    </u-navbar>

    <u-text type="info" margin="10px 0 10px 10px" text="自定义插槽" />
    <u-navbar
      leftText="返回"
      :fixed="false"
      title="个人中心"
      :safeAreaInsetTop="false"
    >
      <template #left>
        <view class="mp-weixin-menu">
          <u-icon name="arrow-left" size="19"></u-icon>
          <u-line
            direction="column"
            :hairline="false"
            length="16"
            margin="0 8px"
          ></u-line>
          <u-icon name="home" size="20"></u-icon>
        </view>
      </template>
    </u-navbar>

    <u-gap height="50"></u-gap>
  </view>
</template>

<script setup lang="ts">
  const bgColor = uni.$u.color['success'];

  const rightClick = () => {
    console.log('rightClick');
  };
  const leftClick = () => {
    console.log('leftClick');
  };
</script>
