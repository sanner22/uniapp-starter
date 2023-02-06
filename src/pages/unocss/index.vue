<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
import Iconify from '@/components/Iconify/index.vue'
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'
const store = useTmpiniaStore()

const list = [
  { name: 'font', path: '/pages-unocss/font/index', icon: 'i-material-symbols-font-download-outline-rounded' },
  { name: 'size', path: '/pages-unocss/size/index', icon: 'i-mdi-move-resize' },
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
  { name: 'odd-even', path: '/pages-unocss/odd-even/index', icon: 'i-fluent-number-row-24-regular' },
  { name: 'space', path: '/pages-unocss/space/index', icon: 'i-carbon-name-space' },
  { name: 'gap', path: '/pages-unocss/gap/index', icon: 'i-carbon-name-space' },
  { name: 'divide', path: '/pages-unocss/divide/index', icon: 'i-radix-icons-divider-horizontal' },
  { name: 'apply', path: '/pages-unocss/apply/index', icon: 'i-fluent-text-change-accept-20-filled' },
]

const to = (to: string) => {
  uni.navigateTo({
    url: to,
  })
}
</script>

<template>
  <tm-app>
    <view class="uno-p-15px">
      <view class="uno-my-30px uno-center">
        <tm-image src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg" :width="80" :height="80" unit="px" />
      </view>

      <view class="uno-grid uno-grid-cols-3 uno-gap-10px uno-justify-items-center">
        <!-- <tm-sheet
          :margin="[0, 0]"
          :round="5"
          follow-theme
          class="uno-w-full uno-flex uno-flex-col"
          _class="uno-center"
          v-for="(item, index) in list"
          :key="index"
          @click="to(item.path)"
        >
          <iconify :icon="item.icon"></iconify>
          <tm-text class="uno-mt-6px">{{ item.name }}</tm-text>
        </tm-sheet> -->
        <view
          v-for="(item, index) in list"
          :key="index"
          class="uno-w-full uno-h-20vw uno-shadow-md uno-rounded-md uno-bg-gray uno-center uno-flex-col"
          @click="to(item.path)"
        >
          <iconify :icon="item.icon" />
          <view class="uno-mt-6px uno-text-sm">
            {{ item.name }}
          </view>
        </view>
      </view>
    </view>
  </tm-app>
</template>
