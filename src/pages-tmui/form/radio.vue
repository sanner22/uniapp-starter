<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档"></tm-text>
      <tm-divider></tm-divider>
      <view class="pb-24">
        <tm-text :label="str ? str : '请选择'"></tm-text>
      </view>

      <tm-radio-group v-model="radiolist">
        <tm-radio outlined value="apple" label="苹果基础示例"></tm-radio>
        <tm-radio color="orange" value="banner" label="香蕉"></tm-radio>
        <tm-radio color="pink" value="test" label="测试项"></tm-radio>
        <tm-radio color="green" value="other" label="其它水果"></tm-radio>
      </tm-radio-group>
    </tm-sheet>

    <tm-sheet :margin="[32, 0]">
      <tm-text :font-size="24" _class="font-weight-b" label="其它属性和checkbox一样，拥有丰富的属性设置"></tm-text>
      <tm-divider></tm-divider>
      <view class="pb-24">
        <tm-text :label="str ? str : '请选择'"></tm-text>
      </view>
      <tm-radio-group v-model="radiolist">
        <tm-radio :beforChecked="beforChecked" value="apple" label="苹果异步选中"></tm-radio>
        <tm-radio color="orange" value="banner" label="香蕉"></tm-radio>
        <tm-radio disabled color="pink" value="test" label="测试项"></tm-radio>
        <tm-radio border-style="dashed" color="green" value="other" label="其它水果"></tm-radio>
      </tm-radio-group>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="按钮样式"></tm-text>
      <tm-divider></tm-divider>
      <tm-radio-group model="button" v-model="radio">
        <tm-radio :value="true" label="选我呀"></tm-radio>
        <tm-radio :value="false" label="不要选我呀"></tm-radio>
      </tm-radio-group>
    </tm-sheet>
  </tm-app>
</template>
<script lang="ts" setup>
  import { ref, computed } from 'vue';

  const radio = ref<string | number | boolean | undefined>();

  const radiolist = ref('banner');
  const str = computed(() => radiolist.value);
  function beforChecked() {
    return new Promise(res => {
      setTimeout(function () {
        res(true);
      }, 1000);
    });
  }
</script>
