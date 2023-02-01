<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例，更多属性和功能见文档"></tm-text>
      <tm-divider></tm-divider>
      <tm-codeinput :border="2" :round="4" @click="show = true" :value="str"></tm-codeinput>
      <view class="py-24"></view>
      <tm-codeinput :text="false" outlined :round="4" @click="show = true" :value="str"></tm-codeinput>
      <view class="py-24"></view>
      <tm-codeinput :border="0" :round="4" @click="show = true" :value="str"></tm-codeinput>
    </tm-sheet>
    <tm-sheet>
      <tm-codeinput
        :border="0"
        :size="80"
        :round="16"
        :count="4"
        color="green"
        @click="show = true"
        :value="str"
      ></tm-codeinput>
    </tm-sheet>
    <tm-keyborad @success="ok" :maxLength="4" v-model:show="show" v-model="str"></tm-keyborad>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const show = ref(false);
  const str = ref('');

  function ok() {
    uni.showToast({
      title: '验证成功',
      icon: 'none',
    });
    show.value = false;
  }
</script>
