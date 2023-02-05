<script setup lang="ts"></script>

<template>
  <tm-app>
    <view class="uno-p-2">
      <button uno-text="sm green" uno-p="y-2 x-4" uno-m="4" uno-my-attr="y-1 x-2 sm">
        Button
      </button>
      <button uno-text-base uno-text-blue uno-py-2 uno-px-4 uno-m-4>
        不会生效，规则武略了无值属性
      </button>
      <button uno-text="base blue" uno-py="2" uno-px="4" uno-m="4">
        Button
      </button>
      <button uno-border="~ red" uno-m="4">
        Button
      </button>
      <button uno-flex="~ col wrap" uno-class="m4">
        Button
      </button>
      <text uno-text="red">
        This conflicts with links' text prop
      </text>
      <view uno-bg="#333:30" uno-text="white">
        111
      </view>
      <view uno-bg="[#11dddd]:80">
        222
      </view>
      <view uno-bg="#2ecc71:50">
        333
      </view>
    </view>
  </tm-app>
</template>

<style lang="scss" scoped></style>
