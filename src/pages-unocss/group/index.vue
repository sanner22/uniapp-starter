<template>
  <tm-app>
    <view class="uno-p-15px uno-space-y-15px">
      <tm-text :font-size="18" unit="px">
        uno-flex="~ row wrap" 等效于 class="uno-flex uno-flex-row uno-flex-wrap"
      </tm-text>

      <view uno-flex="~ row wrap" class="uno-gap-10px">
        <view v-for="(item, index) in 5" :key="index" class="uno-w-150px uno-bg-blue_70 hover:uno-bg-yellow_50">
          <tm-text :label="item" class="uno-p-5px" />
        </view>
      </view>
    </view>
  </tm-app>
</template>
