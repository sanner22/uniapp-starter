<template>
  <view class="uno-px-15px">
    <u-text text="基本案例" type="info" margin="10px 0" />
    <view>
      <u-slider v-model="value1" />
    </view>

    <u-text text="自定义范围(0—50)" type="info" margin="10px 0" />
    <view>
      <u-slider v-model="value2" showValue min="0" max="50" />
    </view>

    <u-text text="指定步长(每次步进5)" type="info" margin="10px 0" />
    <view>
      <u-slider v-model="value4" :step="5" />
    </view>

    <u-text text="自定义样式" type="info" margin="10px 0" />
    <view>
      <u-slider v-model="value5" activeColor="#deab8a" blockColor="#f47920" />
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const value1 = ref(30);
  const value2 = ref(30);
  const value4 = ref(30);
  const value5 = ref(30);
</script>
