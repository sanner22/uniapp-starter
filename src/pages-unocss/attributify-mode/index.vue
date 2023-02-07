<script setup lang="ts"></script>

<template>
  <tm-app>
    <view class="uno-p-2">
      <button uno-text="sm green" uno-p="y-2 x-4" uno-m="4" my-attr="y-1 x-2 sm">
        text-sm text-green p-y-2 p-x-4
      </button>
      <button uno-text-sm uno-text-blue uno-py-2 uno-px-4 uno-m-4>
        不生效，规则武略了无值属性
      </button>
      <button uno-text="sm blue" uno-p="y-2 x-4" uno-m="4">
        有值模式, text-sm text-blue p-y-2 p-x-4
      </button>
      <button uno-border="~ red solid" uno-m="4">
        border border-solid border-red
      </button>
      <button uno-flex="~ col wrap" class="uno-m-4 uno-p-2">
        <text uno-text="sm">
          flex
        </text>
        <text uno-text="sm">
          flex-col
        </text>
        <text uno-text="sm">
          flex-wrap
        </text>
      </button>
      <text uno-text="red">
        避免与 text 的属性冲突 text-red
      </text>
      <view uno-bg="#333:30" uno-text="white">
        bg-hex-#333:30 text-white
      </view>
      <view uno-bg="[#11dddd]:80">
        bg-hex-#11dddd:30
      </view>
      <view uno-bg="#2ecc71:50">
        bg-hex-#2ecc71:30
      </view>
    </view>
  </tm-app>
</template>

<style lang="scss" scoped></style>
