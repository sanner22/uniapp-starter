<template>
  <view class="uno-px-15px">
    <u-text type="info" margin="10px 0" text="基础使用" />
    <u-code-input v-model="value1" :maxlength="4" @change="change" @finish="finish" />

    <u-text type="info" margin="10px 0" text="横线模式" />
    <u-code-input v-model="value2" mode="line" :maxlength="4" :bold="true" />

    <u-text type="info" margin="10px 0" text="设置长度" />
    <u-code-input v-model="value3" :maxlength="6" />

    <u-text type="info" margin="10px 0" text="设置间距" />
    <u-code-input v-model="value4" mode="box" :space="0" :maxlength="4" />

    <u-text type="info" margin="10px 0" text="细边框" />
    <view class="uno-flex uno-flex-col uno-gap-10px">
      <u-code-input v-model="value5" mode="box" :space="0" :maxlength="4" hairline />
      <u-code-input v-model="value6" mode="line" :space="10" :maxlength="4" hairline />
    </view>

    <u-text type="info" margin="10px 0" text="调整颜色" />
    <view class="uno-flex uno-flex-col uno-gap-10px">
      <u-code-input
        v-model="value7"
        mode="box"
        :space="0"
        :maxlength="4"
        hairline
        color="#f56c6c"
        borderColor="#f56c6c"
      />
      <u-code-input
        v-model="value10"
        mode="line"
        size="30"
        :maxlength="4"
        hairline
        color="#3c9cff"
        borderColor="#3c9cff"
      />
    </view>

    <u-text type="info" margin="10px 0" text="点模式" />
    <u-code-input v-model="value8" mode="box" dot :space="0" :maxlength="4" hairline />

    <u-text type="info" margin="10px 0" text="预置内容" />
    <u-code-input v-model="value9" mode="box" :space="0" :maxlength="4" hairline fontSize="17" />
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const value1 = ref('');
  const value2 = ref('');
  const value3 = ref('');
  const value4 = ref('');
  const value5 = ref('');
  const value6 = ref('');
  const value7 = ref('');
  const value8 = ref('');
  const value9 = ref('123');
  const value10 = ref('34');

  const change = (e: any) => {
    console.log('change', e);
  };
  const finish = (e: any) => {
    console.log('finish', e);
  };
</script>
