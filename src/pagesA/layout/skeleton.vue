<template>
  <view class="uno-px-15px">
    <u-text type="info" margin="10px 0" text="基础使用" />
    <view>
      <u-skeleton rows="3" title loading />
    </view>

    <u-text type="info" margin="10px 0" text="自定义段落行数" />
    <view>
      <u-skeleton rows="2" title loading />
    </view>

    <u-text type="info" margin="10px 0" text="设置段落宽度" />
    <view>
      <u-skeleton rows="2" title :rowsWidth="['100%', '35%']" loading />
    </view>

    <u-text type="info" margin="10px 0" text="设置段落高度" />
    <view>
      <u-skeleton rows="3" title :rowsWidth="['100%', '100%', '100%']" :rowsHeight="['18px', '18px', '80px']" loading />
    </view>

    <u-text type="info" margin="10px 0" text="是否开启动画" />
    <u-switch v-model="switch1" space="2" inactiveColor="#e6e6e6" />
    <u-gap height="15" bgColor="#fff" />
    <view>
      <u-skeleton :animate="switch1" rows="3" title loading />
    </view>

    <u-text type="info" margin="10px 0" text="展示头像" />
    <u-gap height="15" bgColor="#fff" />
    <view>
      <u-skeleton :animate="switch1" rows="3" title loading avatar />
    </view>

    <u-text type="info" margin="10px 0" text="切换状态" />
    <u-switch v-model="switch2" space="2" inactiveColor="#e6e6e6" />
    <u-gap height="15" bgColor="#fff" />
    <view>
      <u-skeleton rows="2" title :loading="switch2" avatar avatar-size="40" rowsHeight="14">
        <!-- 需要在外部多嵌套一层占位view，否则在nvue下会导致样式失效 -->
        <view>
          <view class="u-skeleton-slot">
            <image src="/static/logo.png" class="u-skeleton-slot__image"></image>
            <view class="u-skeleton-slot__content">
              <u-text text="利剑出鞘,一统江湖" type="main" size="16" />
              <u-text
                type="tips"
                size="14"
                customStyle="margin-top: 5px"
                text="众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用"
              />
            </view>
          </view>
        </view>
      </u-skeleton>
    </view>
    <u-gap height="50" bgColor="transparent" />
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const switch1 = ref(true);
  const switch2 = ref(false);
</script>

<style lang="scss" scoped>
  .u-skeleton-slot {
    @include flex;
    align-items: flex-start;

    &__image {
      width: 40px;
      height: 40px;
      border-radius: 100px;
    }

    &__content {
      margin-left: 10px;
      flex: 1;
    }
  }
</style>
