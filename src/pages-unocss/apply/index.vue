<template>
  <tm-app>
    <view class="bg-to-t"> apply bg-to-t </view>
    <view class="bg-unocss"> bg-unocss </view>
    <view class="bg-to-r"> apply bg-to-r </view>
  </tm-app>
</template>

<style lang="scss" scoped>
  /* #ifndef MP-WEIXIN */
    .bg-to-t {
      @apply uno-center uno-h-200 uno-rounded-md uno-bg-gradient-to-t uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3;
    }

    .bg-unocss {
      @apply uno-w-100rpx uno-h-100rpx uno-bg-cover uno-mb-3 uno-m-auto uno-bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)];
    }

    .bg-to-r{
      --at-apply: uno-center uno-h-200rpx uno-rounded-md uno-bg-gradient-to-r uno-from-#f39c12/60 uno-via-#2ecc71:80 uno-to-#9b59b6_70 uno-mb-3
    }
  /* #endif */
</style>
