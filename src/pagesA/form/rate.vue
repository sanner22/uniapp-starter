<template>
  <view class="_u_px-15px">
    <u-text text="基本案例" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate size="20" />
    </view>

    <u-text
      text="自定义选中星星数量(有change事件和watch)"
      type="info"
      margin="10px 0"
    ></u-text>
    <view class="_u_flex">
      <u-rate size="20" v-model="value1" @change="change" />
    </view>

    <u-text text="自定义星星大小" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate size="30" count="4" />
    </view>

    <u-text text="是否禁用评分" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate size="20" disabled />
    </view>

    <u-text text="是否只读评分" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate size="20" readonly />
    </view>

    <u-text text="自定义选中星星颜色" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate size="20" v-model="activeColorValue" activeColor="#2979ff" />
    </view>

    <u-text text="自定义未选中星星颜色" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate size="20" v-model="value2" inactiveColor="#2979ff" />
    </view>

    <u-text text="禁止触摸选择" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate size="20" :touchable="false" />
    </view>

    <u-text text="允许触摸选择" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate size="20" :touchable="true" />
    </view>

    <u-text text="是否允许半星" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate
        size="20"
        v-model="HalfValue"
        :allowHalf="true"
        @change="change"
      />
    </view>

    <u-text text="自定义选中的图标" type="info" margin="10px 0"></u-text>
    <view class="_u_flex">
      <u-rate
        size="20"
        v-model="activeIconValue"
        inactiveIcon="heart"
        activeIcon="heart-fill"
      />
    </view>

    <u-gap height="30"></u-gap>
  </view>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';

  //自定义星星的个数
  const value1 = ref(3);
  const value2 = ref(2);
  // 自定义选择星星颜色个数
  const activeColorValue = ref(3);
  // 是否允许半星的个数
  const HalfValue = ref(3.5);
  // 自定义图标星星个数
  const activeIconValue = ref(3);

  const change = (e: any) => {
    console.log('change', e);
  };

  watch(
    () => value1.value,
    (newVal, oldVal) => {
      console.log(newVal);
      console.log(oldVal);
    },
  );
</script>
