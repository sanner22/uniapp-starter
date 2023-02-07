<script setup lang="ts">
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

const dark = useTmpiniaStore().tmStore.dark
</script>

<template>
  <tm-app :class="dark ? 'uno-text-white' : ''">
    <tm-sheet>
      <view class="uno-text-xl uno-font-bold">
        divide-x
      </view>
      <tm-divider />

      <view class="uno-flex uno-h-50rpx uno-divide-x uno-divide-yellow-500:50">
        <view class="uno-flex-1 uno-center">
          view
        </view>
        <view class="uno-flex-1 uno-center">
          view
        </view>
        <view class="uno-flex-1 uno-center">
          view
        </view>
      </view>
    </tm-sheet>

    <tm-sheet>
      <view class="uno-text-xl uno-font-bold">
        divide-y
      </view>
      <tm-divider />

      <view class="uno-divide-y uno-divide-blue">
        <view class="uno-center">
          view
        </view>
        <view class="uno-center">
          view
        </view>
        <view class="uno-center">
          view
        </view>
      </view>
    </tm-sheet>

    <tm-sheet>
      <view class="uno-text-xl uno-font-bold">
        divide-(number)
      </view>
      <tm-divider />

      <view class="uno-divide-y-20 uno-divide-red-500 uno-divide-opacity-50">
        <view class="uno-center">
          view
        </view>
        <view class="uno-center">
          view
        </view>
        <view class="uno-center">
          view
        </view>
      </view>
    </tm-sheet>
  </tm-app>
</template>
