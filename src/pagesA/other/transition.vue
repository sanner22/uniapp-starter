<template>
  <view>
    <u-cell-group :border="true">
      <u-cell
        @click="openTransition(item.mode)"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        :icon="item.iconUrl"
        clickable
      />
    </u-cell-group>

    <u-transition
      :mode="mode"
      :show="show"
      :custom-style="style"
      @click="click"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
      @beforeLeave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave"
    >
      <view class="transition"></view>
    </u-transition>
  </view>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const list = [
    {
      mode: 'fade',
      title: '淡入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/fade.png',
    },
    {
      mode: 'fade-up',
      title: '上滑淡入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/fadeUp.png',
    },
    {
      mode: 'zoom',
      title: '缩放',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/zoom.png',
    },
    {
      mode: 'fade-zoom',
      title: '缩放淡入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/fadeZoom.png',
    },
    {
      mode: 'fade-down',
      title: '下滑淡入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/fadeDown.png',
    },
    {
      mode: 'fade-left',
      title: '左滑淡入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/fadeLeft.png',
    },
    {
      mode: 'fade-right',
      title: '右滑淡入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/fadeRight.png',
    },
    {
      mode: 'slide-up',
      title: '上滑进入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/slideUp.png',
    },
    {
      mode: 'slide-down',
      title: '下滑进入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/slideDown.png',
    },
    {
      mode: 'slide-left',
      title: '左滑进入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/slideLeft.png',
    },
    {
      mode: 'slide-right',
      title: '右滑进入',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/transition/slideRight.png',
    },
  ];
  const mode = ref('');
  const show = ref(false);
  const style = reactive({
    position: 'fixed',
    top: `${uni.$u.sys().windowHeight / 2 - 50}px`,
    left: `${uni.$u.sys().windowWidth / 2 - 50}px`,
    width: '120px',
    height: '120px',
    backgroundColor: '#1989fa',
  });

  const openTransition = (m: string) => {
    mode.value = m;
    show.value = true;
    setTimeout(() => {
      show.value = false;
    }, 1500);
  };
  const click = () => {
    // console.log("click");
  };
  const beforeEnter = () => {
    // console.log("beforeEnter");
  };
  const enter = () => {
    // console.log("enter");
  };
  const afterEnter = () => {
    // console.log("afterEnter");
  };
  const beforeLeave = () => {
    // console.log("beforeLeave");
  };
  const leave = () => {
    // console.log("leave");
  };
  const afterLeave = () => {
    // console.log("afterLeave");
  };
</script>

<style lang="scss" scoped>
  .transition {
    background-color: $u-primary;
  }
</style>
