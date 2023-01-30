<template>
  <view>
    <u-cell-group>
      <u-cell
        @click="openPopup(item.popupData)"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        :icon="item.iconUrl"
        is-link
      />
    </u-cell-group>

    <u-popup
      :safeAreaInsetBottom="true"
      :safeAreaInsetTop="true"
      :mode="popupData.mode"
      :show="show"
      :round="popupData.round"
      :overlay="popupData.overlay"
      :borderRadius="popupData.borderRadius"
      :closeable="popupData.closeable"
      :closeOnClickOverlay="popupData.closeOnClickOverlay"
      @close="close"
      @open="open"
    >
      <view
        class="u-popup-slot"
        :style="{
          width: ['bottom', 'top'].includes(popupData.mode) ? '750rpx' : '200px',
          marginTop: ['left', 'right'].includes(popupData.mode) ? '480rpx' : '0',
        }"
      >
        <u-button type="success" text="点我关闭" customStyle="width: 200rpx" @click="show = !show"></u-button>
      </view>
    </u-popup>
  </view>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const list = [
    {
      popupData: {
        overlay: true,
        mode: 'top',
        closeOnClickOverlay: true,
      },
      title: '顶部弹出',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/popup/modeTop.png',
    },
    {
      popupData: {
        overlay: true,
        mode: 'right',
        closeOnClickOverlay: true,
      },
      title: '右侧弹出',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/popup/modeRight.png',
    },
    {
      popupData: {
        overlay: true,
        mode: 'bottom',
        closeOnClickOverlay: true,
      },
      title: '底部弹出',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/popup/modeBottom.png',
    },
    {
      popupData: {
        overlay: true,
        mode: 'left',
        closeOnClickOverlay: true,
      },
      title: '左侧弹出',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/popup/modeLeft.png',
    },
    {
      popupData: {
        overlay: true,
        mode: 'center',
        round: 10,
        closeOnClickOverlay: true,
      },
      title: '居中弹出',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/popup/modeCenter.png',
    },
    {
      popupData: {
        overlay: true,
        mode: 'bottom',
        round: 10,
        closeOnClickOverlay: true,
      },
      title: '显示圆角',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/popup/showRadis.png',
    },
    {
      popupData: {
        overlay: true,
        mode: 'bottom',
        closeable: false,
        closeOnClickOverlay: false,
      },
      title: '禁止点击遮罩关闭',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/popup/noClose.png',
    },
    {
      popupData: {
        overlay: true,
        mode: 'bottom',
        closeable: true,
        closeOnClickOverlay: true,
      },
      title: '显示关闭按钮',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/popup/showCloseBtn.png',
    },
  ];
  const show = ref(false);
  let popupData = reactive({
    overlay: true,
    mode: 'bottom',
    borderRadius: '',
    round: 0,
    closeable: true,
    closeOnClickOverlay: true,
  });

  const openPopup = (data: any) => {
    popupData = data;
    uni.$u.sleep().then(() => {
      show.value = !show.value;
    });
  };
  const open = () => {
    // console.log('open');
  };
  const close = () => {
    show.value = false;
    // console.log('close');
  };
</script>

<style lang="scss" scoped>
  .u-popup-slot {
    width: 200px;
    height: 150px;
    @include flex;
    justify-content: center;
    align-items: center;
  }
</style>
