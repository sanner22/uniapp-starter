<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档"></tm-text>
      <tm-divider></tm-divider>
      <tm-radio-group v-model="modeltype">
        <tm-radio value="day" label="按天"></tm-radio>
        <tm-radio value="week" color="red" label="按周"></tm-radio>
        <tm-radio value="month" color="blue" label="按月"></tm-radio>
        <tm-radio value="quarter" color="blue" label="按季度"></tm-radio>
        <tm-radio value="year" color="pink" label="按年"></tm-radio>
        <tm-radio value="rang" color="green" label="范围"></tm-radio>
      </tm-radio-group>
      <view>
        <tm-divider></tm-divider>
        <tm-checkbox v-if="modeltype == 'day'" v-model="multiple" label="多选日期"></tm-checkbox>
      </view>
      <tm-calendar-view :dateStyle="dateStyle" :multiple="multiple" color="green" :model="modeltype"></tm-calendar-view>
    </tm-sheet>
    <tm-sheet :margin="[32, 0]">
      <tm-text :font-size="24" _class="font-weight-b" label="弹层式,上方组件一致的用法"></tm-text>
      <tm-divider></tm-divider>
      <tm-radio-group v-model="modeltype">
        <tm-radio value="day" label="按天"></tm-radio>
        <tm-radio value="week" color="red" label="按周"></tm-radio>
        <tm-radio value="month" color="blue" label="按月"></tm-radio>
        <tm-radio value="quarter" color="blue" label="按季度"></tm-radio>
        <tm-radio value="year" color="pink" label="按年"></tm-radio>
        <tm-radio value="rang" color="green" label="范围"></tm-radio>
      </tm-radio-group>
    </tm-sheet>
    <tm-cell @click="showdate = true" title="请选择时间" :right-text="dateStr"></tm-cell>
    <tm-calendar
      :dateStyle="dateStyle"
      @click="test"
      :multiple="multiple"
      color="red"
      v-model:show="showdate"
      v-model:model-str="dateStr"
      :model="modeltype"
    ></tm-calendar>
    <view style="height: 100rpx"></view>
  </tm-app>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const dateStyle = ref([
    {
      date: '2022-12-8', //日期
      text: false, //浅色背景。
      color: 'red', //主题色.
      extra: '测试', //额外的内容，在日期下方显示的文本。
    },
    {
      date: '2022-12-24', //日期
      text: false, //浅色背景。
      color: 'orange', //主题色.
      extra: '签到', //额外的内容，在日期下方显示的文本。
    },
  ]);
  const modeltype = ref<'quarter' | 'day' | 'month' | 'year' | 'rang' | 'week'>('day');
  const dateStr = ref('');
  const showdate = ref(false);
  const multiple = ref(false);
  const test = (e: any) => {
    console.log(e);
  };
</script>
