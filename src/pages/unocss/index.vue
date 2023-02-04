<script setup lang="ts">
  import Iconify from '@/components/Iconify/index.vue';
  const list = [
    { name: 'font', path: '/pages-unocss/font/index', icon: 'i-ic-round-font-download' },
    { name: 'size', path: '/pages-unocss/size/index', icon: 'i-icomoon-free-font-size' },
    { name: 'shadow', path: '/pages-unocss/shadow/index', icon: 'i-tabler-inner-shadow-bottom-right' },
    { name: 'border', path: '/pages-unocss/border/index', icon: 'i-material-symbols-border-outer-rounded' },
    { name: 'spacing', path: '/pages-unocss/spacing/index', icon: 'i-icon-park-twotone-distribute-horizontal-spacing' },
    { name: 'shortcuts', path: '/pages-unocss/shortcuts/index', icon: 'i-material-symbols-switch-access-shortcut' },
    { name: ':class', path: '/pages-unocss/class/index', icon: 'i-ic-twotone-hotel-class' },
    { name: 'color', path: '/pages-unocss/color/index', icon: 'i-ic-twotone-color-lens' },
    { name: 'attributify', path: '/pages-unocss/attributify-mode/index', icon: 'i-ic-twotone-edit-attributes' },
    { name: 'animation', path: '/pages-unocss/animation/index', icon: 'i-clarity-animation-line' },
    { name: 'bg', path: '/pages-unocss/bg/index', icon: 'i-ant-design-bg-colors-outlined' },
    { name: 'first-last', path: '/pages-unocss/first-last/index', icon: 'i-material-symbols-first-page' },
    { name: 'odd-even', path: '/pages-unocss/odd-even/index', icon: 'i-material-symbols-event-note' },
    { name: 'space-x', path: '/pages-unocss/space/index', icon: 'i-fluent-align-space-around-vertical-20-regular' },
    { name: 'divide-x', path: '/pages-unocss/divide/index', icon: 'i-iconoir-divide-selection-1' },
    { name: 'apply', path: '/pages-unocss/apply/index', icon: 'i-flat-color-icons-accept-database' },
  ];

  const to = (to: string) => {
    uni.navigateTo({
      url: to,
    });
  };
</script>

<template>
  <tm-app>
    <view class="uno-p-15px">
      <view class="uno-grid uno-grid-cols-3 uno-gap-10px uno-justify-items-center">
        <view
          v-for="(item, index) in list"
          :key="index"
          class="uno-w-full uno-h-20vw uno-shadow-md uno-rounded-md uno-bg-gray uno-center uno-flex-col"
          @click="to(item.path)"
        >
          <iconify :icon="item.icon"></iconify>
          <view class="uno-mt-6px uno-text-sm">{{ item.name }}</view>
        </view>
      </view>
    </view>
  </tm-app>
</template>
