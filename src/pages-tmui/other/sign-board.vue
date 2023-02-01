<template>
  <tm-app>
    <tm-sheet :width="662">
      <tm-text label="签名板全端兼容，用于签名使用。请在下方书写"></tm-text>
      <tm-divider></tm-divider>
      <tm-sign-board
        :line-color="colorNow"
        :line-width="lineWidth"
        ref="board"
        :width="638"
        :height="400"
      ></tm-sign-board>
      <tm-divider></tm-divider>
      <view class="py-24">
        <tm-text label="选择书写颜色"></tm-text>
      </view>
      <tm-radio-group v-model="colorNow">
        <tm-radio :color="item" :value="item" :label="item" v-for="(item, index) in colors" :key="index"></tm-radio>
      </tm-radio-group>
      <view class="py-24">
        <tm-text label="拖动改变粗细"></tm-text>
      </view>
      <tm-slider :max="20" v-model="lineWidth" :default-value="lineWidth"></tm-slider>
      <tm-divider></tm-divider>
      <view class="flex flex-row flex-center">
        <tm-button @click="board?.clear()" label="清空"></tm-button>
        <tm-button color="green" :margin="[24, 0]" @click="saveImg" label="保存签名"></tm-button>
      </view>
    </tm-sheet>
  </tm-app>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import tmSignBoard from '@/tmui/components/tm-sign-board/tm-sign-board.vue';

  const board = ref<InstanceType<typeof tmSignBoard> | null>(null);

  const colors = ['red', 'blue', 'black', 'green'];
  const colorNow = ref('red');
  const lineWidth = ref(5);
  const saveImg = async () => {
    let src = await board.value?.save();
    console.log(src);
    uni.showToast({ title: '成功，请查看日志', icon: 'none' });
    // #ifndef H5
    uni.previewImage({
      current: src,
      urls: [src as string],
    });
    // #endif
  };
</script>
