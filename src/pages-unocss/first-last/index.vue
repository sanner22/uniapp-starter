<template>
  <view class="uno-p-2">
    <view>
      <view class="uno-text-xl uno-font-bold"> first:class last:class </view>

      <view class="uno-text-black:65 uno-text-sm">
        <view> 第一个子元素为 bg-red </view>
        <view> 最后一个子元素为 bg-green </view>
        <view> 其他为 bg-blue </view>
      </view>
    </view>
    <view>
      <view class="first:uno-bg-red last:uno-bg-green uno-bg-blue uno-mb-1"> 1 </view>
      <view class="first:uno-bg-red last:uno-bg-green uno-bg-blue uno-mb-1"> 2 </view>
      <view class="first:uno-bg-red last:uno-bg-green uno-bg-blue uno-mb-1"> 3 </view>
      <view class="first:uno-bg-red last:uno-bg-green uno-bg-blue uno-mb-1"> 4 </view>
    </view>
  </view>
</template>
