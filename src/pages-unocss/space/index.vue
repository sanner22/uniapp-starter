<template>
  <tm-app>
    <view class="uno-px-2">
      <view class="uno-space-y-15px">
        <!-- start: space-x  -->
        <tm-text :font-size="40" _class="uno-w-full uno-text-center uno-font-bold">
          space-x
        </tm-text>

        <view class="uno-flex uno-h-50rpx uno-space-x-15px">
          <view class="uno-bg-red uno-flex-1 uno-center">
            view
          </view>
          <view class="uno-bg-blue uno-flex-1 uno-center">
            view
          </view>
          <view class="uno-bg-green uno-flex-1 uno-center">
            view
          </view>
        </view>

        <view class="uno-flex uno-space-x-15px">
          <image
            class="uno-bg-red uno-flex-1 uno-block"
            src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg"
            mode="widthFix"
          />
          <image
            class="uno-bg-blue uno-flex-1 uno-block"
            src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg"
            mode="widthFix"
          />
          <image
            class="uno-bg-green uno-flex-1 uno-block"
            src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg"
            mode="widthFix"
          />
        </view>

        <view class="uno-flex uno-h-50rpx uno-space-x-15px">
          <text class="uno-bg-red uno-flex-1 uno-center">
            text
          </text>
          <text class="uno-bg-blue uno-flex-1 uno-center">
            text
          </text>
          <text class="uno-bg-green uno-flex-1 uno-center">
            text
          </text>
        </view>

        <view class="uno-flex uno-h-50rpx uno-space-x-15px">
          <button class="uno-bg-red uno-flex-1 uno-center">
            button
          </button>
          <button class="uno-bg-blue uno-flex-1 uno-center">
            button
          </button>
          <button class="uno-bg-green uno-flex-1 uno-center">
            button
          </button>
        </view>
        <!-- end: space-x  -->

        <!-- start  -->
        <tm-text :font-size="40" class="uno-text-xl uno-font-bold">
          使用 flex-row-reverse 元素倒序, 使用 space-x-reverse 间隔来确保每个元素被添加到正确的一侧
        </tm-text>

        <view class="uno-space-x-15px uno-space-x-reverse uno-flex-row-reverse uno-flex uno-items-center">
          <view class="uno-bg-red uno-center uno-flex-1">
            view
          </view>
          <view class="uno-bg-blue uno-center uno-flex-1">
            view
          </view>
          <view class="uno-bg-green uno-center uno-flex-1">
            view
          </view>
        </view>
        <!-- end  -->

        <!-- start: space-y  -->
        <tm-text :font-size="40" _class="uno-w-full uno-text-center uno-font-bold">
          space-y
        </tm-text>

        <view class="uno-space-y-15px">
          <view class="uno-bg-red uno-flex-1 uno-center">
            view
          </view>
          <view class="uno-bg-blue uno-flex-1 uno-center">
            view
          </view>
          <view class="uno-bg-green uno-flex-1 uno-center">
            view
          </view>
        </view>
        <!-- end: space-y  -->

        <!-- start  -->
        <tm-text :font-size="40" _class="uno-w-full uno-text-center uno-font-bold">
          space-(number)rpx
        </tm-text>

        <view class="uno-space-y-20rpx">
          <view class="uno-bg-red uno-flex-1 uno-center">
            view
          </view>
          <view class="uno-bg-blue uno-flex-1 uno-center">
            view
          </view>
          <view class="uno-bg-green uno-flex-1 uno-center">
            view
          </view>
        </view>
        <!-- end  -->
      </view>
    </view>
  </tm-app>
</template>

<style></style>
