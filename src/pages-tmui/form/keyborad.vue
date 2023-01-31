<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档"></tm-text>
      <tm-divider></tm-divider>
      <tm-radio-group v-model="modeltype">
        <tm-radio value="password" label="密码"></tm-radio>
        <tm-radio value="card" color="red" label="身份证"></tm-radio>
        <tm-radio value="car" color="blue" label="车牌"></tm-radio>
        <tm-radio value="number" color="green" label="数字键盘"></tm-radio>
      </tm-radio-group>
    </tm-sheet>

    <tm-cell @click="showdate = true" title="弹出键盘" rightColor="primary" :right-text="dateStr"></tm-cell>
    <tm-keyborad decimal :type="modeltype" v-model="dateStr" v-model:show="showdate"></tm-keyborad>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const modeltype = ref<'password' | 'card' | 'car' | 'number'>('password');
  const dateStr = ref('');
  const showdate = ref(false);
</script>
