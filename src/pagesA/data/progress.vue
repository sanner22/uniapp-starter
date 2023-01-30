<template>
  <view class="uno-px-15px">
    <u-text text="基础功能" type="info" margin="10px 0" />
    <view>
      <u-line-progress :percentage="percentage1" />
    </view>

    <u-text text="不显示百分比" type="info" margin="10px 0" />
    <view>
      <u-line-progress :showText="false" :percentage="percentage2" />
    </view>

    <u-text text="自定义高度" type="info" margin="10px 0" />
    <view>
      <u-line-progress height="8" :showText="false" :percentage="percentage3" />
    </view>

    <u-text text="自定义颜色" type="info" margin="10px 0" />
    <view>
      <u-line-progress
        height="8"
        :showText="false"
        :percentage="percentage4"
        activeColor="#3c9cff"
        inactiveColor="#f3f4f6"
      />
    </view>

    <template v-if="!androidNvue">
      <u-text text="自定义样式(不支持安卓环境的nvue)" type="info" margin="10px 0" />
      <view>
        <u-line-progress
          height="8"
          :showText="false"
          :percentage="percentage5"
          activeColor="#3c9cff"
          inactiveColor="#f3f4f6"
        >
          <text class="u-percentage-slot">{{ percentage4 }}%</text>
        </u-line-progress>
      </view>
    </template>

    <u-text text="手动加减" type="info" margin="10px 0" />
    <view>
      <u-line-progress
        height="8"
        :showText="false"
        :percentage="percentage6"
        activeColor="#3c9cff"
        inactiveColor="#f3f4f6"
      />
      <view class="button-group">
        <view class="button-group__circle" hover-class="u-hover-class" @click="computedWidth('minus')">
          <text class="button-group__circle__text">减少</text>
        </view>
        <view class="button-group__circle" hover-class="u-hover-class" @click="computedWidth('plus')">
          <text class="button-group__circle__text">增加</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';

  const androidNvue = ref(false);
  const percentage1 = ref(30);
  const percentage2 = ref(40);
  const percentage3 = ref(50);
  const percentage4 = ref(60);
  const percentage5 = ref(70);
  const percentage6 = ref(50);

  const computedWidth = (type: string | undefined) => {
    if (type === 'plus') {
      percentage6.value = uni.$u.range(0, 100, percentage6.value + 10);
    } else {
      percentage6.value = uni.$u.range(0, 100, percentage6.value - 10);
    }
  };

  onLoad(_e => {
    // #ifdef APP-NVUE
    androidNvue.value = uni.$u.os() === 'android';
    // #endif
    uni.$u.sleep(2500).then(() => {
      percentage1.value = 120;
    });
  });
</script>

<style lang="scss">
  .u-percentage-slot {
    padding: 1px 5px;
    background-color: $u-warning;
    color: #fff;
    border-radius: 100px;
    font-size: 10px;
    margin-right: -5px;
  }

  .u-demo-block__content {
    flex-direction: column !important;
    flex-wrap: nowrap;
    align-items: stretch;
  }

  .button-group {
    @include flex;
    justify-content: center;

    &__circle {
      @include flex;
      width: 50px;
      height: 50px;
      background-color: #dbfbdb;
      border-radius: 100px;
      justify-content: center;
      align-items: center;
      margin: 30px 30px;

      &__text {
        color: rgb(25, 190, 107);
        font-size: 13px;
      }
    }
  }
</style>
