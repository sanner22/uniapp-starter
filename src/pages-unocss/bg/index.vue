<script setup lang="ts"></script>

<template>
  <tm-app>
    <view uno-text="white" class="uno-p-2">
      <view class="uno-flex uno-justify-center uno-w-full !uno-px-4rpx important:uno-p-10rpx">
        <view class="uno-w-100rpx uno-h-100rpx uno-bg-cover uno-mb-3rpx bg-local-logo" />
      </view>
      <view class="uno-flex uno-justify-center uno-w-full">
        <view
          class="uno-w-100rpx uno-h-100rpx uno-bg-cover uno-mb-3 uno-bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]"
        />
      </view>
      <view
        class="uno-center uno-h-200rpx uno-rounded-md uno-bg-gradient-to-t uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3"
      >
        to-t
      </view>
      <view
        class="uno-center uno-h-200rpx uno-rounded-md uno-bg-gradient-to-tr uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3"
      >
        to-tr
      </view>
      <view
        class="uno-center uno-h-200rpx uno-rounded-md uno-bg-gradient-to-r uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3"
      >
        to-r
      </view>
      <view
        class="uno-center uno-h-200rpx uno-rounded-md uno-bg-gradient-to-br uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3"
      >
        to-br
      </view>
      <view
        class="uno-center uno-h-200rpx uno-rounded-md uno-bg-gradient-to-b uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3"
      >
        to-b
      </view>
      <view
        class="uno-center uno-h-200rpx uno-rounded-md uno-bg-gradient-to-bl uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3"
      >
        to-bl
      </view>
      <view
        class="uno-center uno-h-200rpx uno-rounded-md uno-bg-gradient-to-l uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3"
      >
        to-l
      </view>
      <view
        class="uno-center uno-h-200rpx uno-rounded-md uno-bg-gradient-to-tl uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3"
      >
        to-tl
      </view>
    </view>
  </tm-app>
</template>

<style lang="scss" scoped>
  .bg-local-logo {
    --logo: url(../../static/logo.png);
    background-image: var(--logo);
  }
</style>
