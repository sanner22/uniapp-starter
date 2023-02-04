<template>
  <tm-app>
    <view class="uno-m-2 uno-p-2 uno-bg-gray">
      <view class="uno-py-3 uno-flex uno-flex-col uno-gap-15px">
        <!-- start: divide-x  -->
        <view class="uno-text-xl uno-text-center uno-font-bold uno-my-3"> divide-x </view>

        <view class="uno-flex uno-h-50rpx uno-divide-x uno-divide-yellow-500:50">
          <view class="uno-flex-1 uno-center"> view </view>
          <view class="uno-flex-1 uno-center"> view </view>
          <view class="uno-flex-1 uno-center"> view </view>
        </view>
        <!-- end: divide-x  -->

        <!-- start  -->
        <view class="uno-text-xl uno-text-center uno-font-bold uno-my-3"> divide-y </view>

        <view class="uno-divide-y uno-divide-blue">
          <view class="uno-center"> view </view>
          <view class="uno-center"> view </view>
          <view class="uno-center"> view </view>
        </view>
        <!-- end  -->

        <!-- start  -->
        <view class="uno-text-xl uno-text-center uno-font-bold uno-my-3"> divide-(number) </view>

        <view class="uno-divide-y-20 uno-divide-red-500 uno-divide-opacity-50">
          <view class="uno-center"> view </view>
          <view class="uno-center"> view </view>
          <view class="uno-center"> view </view>
        </view>
        <!-- end  -->
      </view>
    </view>
  </tm-app>
</template>
