<template>
  <tm-app>
    <tm-sheet :margin="[32, 32, 32, 32]">
      <tm-text label="padding" :font-size="20" unit="px" />
      <tm-divider />
      <!--  -->
      <view uno-flex="~ row wrap gap-10px">
        <text class="uno-bg-blue-300_30 uno-center uno-p-0">
          <tm-text label="p-0" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-1">
          <tm-text label="p-1" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-2">
          <tm-text label="p-2" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-3">
          <tm-text label="p-3" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-4">
          <tm-text label="p-4" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-none">
          <tm-text label="p-none" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-xs">
          <tm-text label="p-xs" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-sm">
          <tm-text label="p-sm" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-lg">
          <tm-text label="p-lg" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-xl">
          <tm-text label="p-xl" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center uno-p-2xl">
          <tm-text label="p-2xl" />
        </text>
        <text class="uno-bg-blue-300_30 uno-center -uno-p-2xl">
          <tm-text label="-p-2xl" />
        </text>
      </view>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]">
      <tm-text label="margin" :font-size="20" unit="px" />
      <tm-divider />
      <!--  -->
      <view uno-flex="~ row wrap gap-10px" class="uno-bg-yellow-300_30">
        <text class="uno-bg-blue-300_30 uno-m-0">
          <tm-text label="m-0" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-1">
          <tm-text label="m-1" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-2">
          <tm-text label="m-2" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-3">
          <tm-text label="m-3" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-4">
          <tm-text label="m-4" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-none">
          <tm-text label="m-none" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-xs">
          <tm-text label="m-xs" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-sm">
          <tm-text label="m-sm" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-md">
          <tm-text label="m-md" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-lg">
          <tm-text label="m-lg" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-xl">
          <tm-text label="m-xl" />
        </text>
        <text class="uno-bg-blue-300_30 uno-m-2xl">
          <tm-text label="m-2xl" />
        </text>
      </view>
    </tm-sheet>

    <tm-sheet :margin="[32, 0, 32, 32]">
      <tm-text label="position" :font-size="20" unit="px" />
      <tm-divider />
      <!--  -->
      <view class="uno-bg-yellow-300_30 uno-relative uno-w-full uno-h-100vw">
        <text class="uno-bg-blue-300_30 uno-absolute uno-top-20">
          <tm-text label="top" />
        </text>
        <text class="uno-bg-blue-300_30 uno-absolute uno-bottom-20">
          <tm-text label="bottom" />
        </text>
        <text class="uno-bg-blue-300_30 uno-absolute uno-left-20">
          <tm-text label="left" />
        </text>
        <text class="uno-bg-blue-300_30 uno-absolute uno-right-20">
          <tm-text label="right" />
        </text>
      </view>
    </tm-sheet>
  </tm-app>
</template>
