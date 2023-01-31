<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档"></tm-text>
      <tm-divider></tm-divider>
      <tm-time-view></tm-time-view>
    </tm-sheet>
    <tm-cell @click="showdate = true" title="请选择时间" :right-text="dateStr || '请选择'"></tm-cell>
    <tm-time-picker
      :showDetail="{
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true,
      }"
      v-model:show="showdate"
      v-model="dateSAva"
      :defaultValue="dateSAva"
      format="YYYY年MM月DD日"
      v-model:model-str="dateStr"
    ></tm-time-picker>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="全部显示,更多请自行配置"></tm-text>
      <tm-text :font-size="24" _class="font-weight-b" label="[2022-5-23]被禁用无法选择"></tm-text>
      <tm-divider></tm-divider>
      <tm-time-view
        v-model="dateSAva"
        v-model:model-str="dateStr"
        format="YYYY年MM月DD日"
        :defaultValue="dateSAva"
        :disabledDate="['2022-5-23']"
        :showDetail="{
          year: true,
          month: true,
          day: true,
          hour: true,
          minute: true,
          second: true,
        }"
      ></tm-time-view>
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const dateStr = ref('');
  const dateSAva = ref('2014-6-15');
  const showdate = ref(false);

  setTimeout(() => {
    dateSAva.value = '2016-4-2';
    console.log(dateSAva.value);
  }, 200);
</script>
