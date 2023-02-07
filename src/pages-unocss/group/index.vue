<template>
  <tm-app>
    <tm-sheet :round="5">
      <tm-text :font-size="16" unit="px">
        uno-flex="~ row wrap" 等效于 class="uno-flex uno-flex-row uno-flex-wrap"
      </tm-text>
    </tm-sheet>

    <view uno-flex="~ row wrap" class="uno-gap-10px uno-mx-15px">
      <view v-for="(item, index) in 5" :key="index" class="uno-w-150px uno-bg-blue_70 hover:uno-bg-yellow_50">
        <tm-text :label="item" class="uno-p-5px" />
      </view>
    </view>
  </tm-app>
</template>
