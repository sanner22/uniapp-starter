<template>
  <view>
    <u-cell
      @click="openMask(index)"
      :title="item.title"
      v-for="(item, index) in list"
      :key="index"
      :icon="item.iconUrl"
      is-link
    />

    <u-overlay :show="show" @click="show = !show"></u-overlay>

    <u-overlay :show="showSlot" @click="showSlot = !showSlot">
      <view class="overlay-wrap">
        <view class="overlay-wrap__box"></view>
      </view>
    </u-overlay>

    <u-overlay
      opacity=".85"
      :show="showOpcatiy"
      @click="showOpcatiy = !showOpcatiy"
    >
    </u-overlay>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const show = ref(false);
  const showSlot = ref(false);
  const showOpcatiy = ref(false);
  const list = ref([
    {
      title: '基本案列',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/overlay/baseCases.png',
    },
    {
      title: '嵌入内容',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/overlay/embeddedContent.png',
    },
    {
      title: '设置透明度',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/overlay/setTransparency.png',
    },
  ]);
  const openMask = (indexNum: number) => {
    if (indexNum == 0) {
      show.value = !show.value;
    } else if (indexNum == 1) {
      showSlot.value = !showSlot.value;
    } else if (indexNum == 2) {
      showOpcatiy.value = !showOpcatiy.value;
    }
  };
</script>

<style lang="scss">
  .overlay-wrap {
    @include flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    &__box {
      width: 200rpx;
      height: 200rpx;
      background-color: #70e1f5;
    }
  }
</style>
