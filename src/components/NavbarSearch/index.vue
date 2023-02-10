<script setup lang="ts" name="NavbarSearch">
import type { PropType } from 'vue'
import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia'

defineProps({
  margin: {
    type: Array as PropType<Array<number>>,
    default: () => [32, 0, 0, 0],
  },
  padding: {
    type: Array as PropType<Array<number>>,
    default: () => [20, 0],
  },
  round: {
    type: Number,
    default: 15,
  },
  fontSize: {
    type: Number,
    default: 24,
  },
  placeholder: {
    type: String,
    default: '搜索',
  },
})

const emit = defineEmits(['click'])
const onClick = () => {
  emit('click')
}

const darkMode = useTmpiniaStore().tmStore.dark
const theme = {
  sheet: darkMode ? 'grey-darken-3' : 'grey-2',
}
</script>

<template>
  <tm-sheet :margin="margin" :padding="padding" :round="round" :border="1" :height="60" :color="theme.sheet" @click="onClick">
    <view uno-flex="~ row" uno-items-center uno-my-auto>
      <tm-text _class="i-uil-search" :font-size="fontSize" />
      <tm-divider vertical real-color :height="fontSize" :margin="[12]" color="#aaa" />
      <tm-text :label="placeholder" _class="uno-ellipsis" uno-flex-auto :font-size="fontSize" />
    </view>
  </tm-sheet>
</template>
