<template>
  <view class="uno-px-15px">
    <u-text type="info" margin="10px 0" text="基础演示" />
    <view>
      <u-avatar :src="src1" />
    </view>
    <u-text type="info" margin="10px 0" text="头像形状" />
    <view class="uno-flex uno-gap-20px">
      <u-avatar :src="src2" shape="circle" @click="click" />
      <u-avatar :src="src3" shape="square" />
    </view>

    <u-text type="info" margin="10px 0" text="头像尺寸" />
    <view class="uno-flex uno-gap-20px">
      <u-avatar :src="src4" size="30" />
      <u-avatar :src="src5" size="40" />
      <u-avatar :src="src6" size="50" />
    </view>

    <u-text type="info" margin="10px 0" text="图标头像" />
    <view class="uno-flex uno-gap-20px">
      <u-avatar icon="red-packet-fill" fontSize="22" />
      <u-avatar icon="star-fill" fontSize="22" />
    </view>

    <u-text type="info" margin="10px 0" text="文字头像(自动背景色)" />
    <view class="uno-flex uno-gap-20px">
      <u-avatar text="U" fontSize="20" randomBgColor :colorIndex="0" />
      <u-avatar text="邓" fontSize="18" randomBgColor />
      <u-avatar text="张" fontSize="18" randomBgColor />
      <u-avatar text="王" fontSize="18" randomBgColor />
    </view>

    <u-text type="info" margin="10px 0" text="图片加载失败(显示默认头像)" />
    <view class="uno-flex uno-gap-20px">
      <u-avatar :src="src7" />
    </view>

    <!-- #ifdef MP-WEIXIN || MP-QQ || MP-BAIDU -->
    <u-text type="info" margin="10px 0" text="小程序开放能力" />
    <view class="uno-flex uno-gap-20px">
      <view class="u-avatar-item">
        <u-avatar mpAvatar size="60" />
      </view>
    </view>
    <!-- #endif -->

    <u-text type="info" margin="10px 0" text="头像组" />
    <view class="uno-flex uno-gap-20px">
      <u-avatar-group :urls="urls" size="35" gap="0.4" />
    </view>
    <view class="uno-flex uno-gap-20px uno-mt-20px">
      <u-avatar-group :urls="urls" size="35" gap="0.6" />
    </view>
  </view>
</template>

<script setup lang="ts">
  const src1 = 'https://cdn.uviewui.com/uview/album/1.jpg';
  const src2 = 'https://cdn.uviewui.com/uview/album/2.jpg';
  const src3 = 'https://cdn.uviewui.com/uview/album/3.jpg';
  const src4 = 'https://cdn.uviewui.com/uview/album/4.jpg';
  const src5 = 'https://cdn.uviewui.com/uview/album/5.jpg';
  const src6 = 'https://cdn.uviewui.com/uview/album/6.jpg';
  const src7 = 'https://cdn.uviewui.com/uview/album/noExist.jpg';
  const urls = [
    'https://cdn.uviewui.com/uview/album/1.jpg',
    'https://cdn.uviewui.com/uview/album/2.jpg',
    'https://cdn.uviewui.com/uview/album/3.jpg',
    'https://cdn.uviewui.com/uview/album/4.jpg',
    'https://cdn.uviewui.com/uview/album/7.jpg',
    'https://cdn.uviewui.com/uview/album/6.jpg',
    'https://cdn.uviewui.com/uview/album/5.jpg',
  ];
  const click = (name: any) => {
    console.log('click', name);
  };
</script>
