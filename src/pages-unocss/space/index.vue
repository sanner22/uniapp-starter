<template>
  <tm-app>
    <view class="uno-px-2">
      <view class="uno-flex uno-flex-col uno-gap-y-15px">
        <!-- start  -->
        <tm-text :font-size="40" _class="uno-w-full uno-text-center uno-font-bold">
          space 不生效，固其他示例使用gap
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

        <!-- start: space-x  -->
        <tm-text :font-size="40" _class="uno-w-full uno-text-center uno-font-bold">
          gap-x
        </tm-text>

        <view class="uno-flex uno-h-50rpx uno-gap-x-15px">
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

        <view class="uno-flex uno-gap-x-15px">
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

        <view class="uno-flex uno-h-50rpx uno-gap-x-15px">
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

        <view class="uno-flex uno-h-50rpx uno-gap-x-15px">
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
          使用 flex-row-reverse 元素倒序
        </tm-text>

        <view class="uno-gap-x-15px uno-flex-row-reverse uno-flex uno-items-center">
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
          gap-y
        </tm-text>

        <view class="uno-flex uno-flex-col uno-gap-y-15px">
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
          gap-(number)rpx
        </tm-text>

        <view class="uno-flex uno-flex-col uno-gap-y-20rpx">
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
