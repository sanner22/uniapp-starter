<template>
  <view class="uno-p-2">
    <view class="uno-text-xl uno-font-bold"> odd:class even:class </view>

    <view class="uno-text-black:65 uno-text-sm">
      <view> odd:class 奇数为 bg-green </view>

      <view> even:class 偶数为 bg-red </view>
    </view>

    <view>
      <view class="even:uno-bg-red odd:uno-bg-green"> 1 </view>
      <view class="even:uno-bg-red odd:uno-bg-green"> 2 </view>
      <view class="even:uno-bg-red odd:uno-bg-green"> 3 </view>
      <view class="even:uno-bg-red odd:uno-bg-green"> 4 </view>
    </view>
  </view>
</template>
