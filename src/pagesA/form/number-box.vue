<template>
  <view>
    <u-cell-group :border="true">
      <u-cell :border="true" title="基础用法">
        <template #value>
          <u-number-box v-model="value1" step="1" @change="change" />
        </template>
      </u-cell>
      <u-cell :border="true" title="步长设置">
        <template #value>
          <u-number-box v-model="value2" :step="step1" @change="change" />
        </template>
      </u-cell>
      <u-cell :border="true" title="限制输入范围">
        <template #value>
          <u-number-box
            v-model="value3"
            step="1"
            :min="min1"
            :max="max1"
            @change="change"
          />
        </template>
      </u-cell>
      <u-cell :border="true" title="限制输入整数">
        <template #value>
          <u-number-box v-model="value4" step="1" integer @change="change" />
        </template>
      </u-cell>
      <u-cell :border="true" title="禁用状态">
        <template #value>
          <u-number-box
            v-model="value5"
            step="1"
            :disabled="true"
            @change="change"
          />
        </template>
      </u-cell>
      <u-cell :border="true" title="禁用输入框">
        <template #value>
          <u-number-box
            v-model="value6"
            step="1"
            :disabledInput="true"
            @change="change"
          />
        </template>
      </u-cell>
      <u-cell :border="true" title="禁用长按">
        <template #value>
          <u-number-box
            v-model="value7"
            step="1"
            :longPress="false"
            @change="change"
          />
        </template>
      </u-cell>
      <u-cell :border="true" title="固定小数位数">
        <template #value>
          <u-number-box
            v-model="value8"
            step="0.2"
            decimalLength="1"
            @change="change"
          />
        </template>
      </u-cell>
      <u-cell :border="true" title="异步变更">
        <template #value>
          <u-number-box
            v-model="value9"
            step="1"
            :asyncChange="asyncChange"
            @change="myAsyncChange"
          />
        </template>
      </u-cell>
      <u-cell :border="true" title="自定义大小颜色样式">
        <template #value>
          <u-number-box
            v-model="value10"
            step="1"
            :color="color"
            :buttonSize="buttonSize"
            :bgColor="bgColor"
            @change="change"
            iconStyle="color: #fff"
          />
        </template>
      </u-cell>
      <u-cell :border="true" title="自定义(为0时减少按钮会消失)">
        <template #value>
          <u-number-box
            v-model="value11"
            step="1"
            :min="0"
            :showMinus="value11 > 0"
          >
            <template #minus>
              <view class="minus">
                <u-icon name="minus" size="12"></u-icon>
              </view>
            </template>
            <template #input>
              <text style="width: 50px; text-align: center" class="input">{{
                value11
              }}</text>
            </template>
            <template #plus>
              <view class="plus">
                <u-icon name="plus" color="#FFFFFF" size="12"></u-icon>
              </view>
            </template>
          </u-number-box>
        </template>
      </u-cell>
    </u-cell-group>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const value1 = ref(3);
  const value2 = ref(3);
  const value3 = ref(3);
  const value4 = ref(3);
  const value5 = ref(3);
  const value6 = ref(3);
  const value7 = ref(3);
  const value8 = ref(3.1);
  const value9 = ref(3);
  const value10 = ref(3);
  const value11 = ref(3);
  const step1 = ref(2);
  const min1 = ref(5);
  const max1 = ref(8);
  const asyncChange = ref(true);
  const color = ref('#FFFFFF');
  const buttonSize = ref(36);
  const bgColor = ref('#2979ff');

  const change = (e: number) => {
    console.log('change', e);
  };
  const myAsyncChange = (e: number) => {
    asyncChange.value = false;
    uni.showLoading({
      title: '正在加载',
    });
    setTimeout(() => {
      uni.hideLoading();
      value9.value = e;
      asyncChange.value = true;
    }, 3000);
  };
</script>

<style lang="scss" scoped>
  .minus {
    width: 22px;
    height: 22px;
    border-width: 1px;
    border-color: #e6e6e6;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    @include flex;
    justify-content: center;
    align-items: center;
  }

  .input {
    padding: 0 10px;
  }

  .plus {
    width: 22px;
    height: 22px;
    background-color: #ff0000;
    border-radius: 50%;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;
  }
</style>
