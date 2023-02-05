<script lang="ts" setup name="Iconify">
import { computed } from 'vue'
import { isNumber } from '@/utils/is'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: '44rpx',
  },
  color: {
    type: String,
  },
})

const emit = defineEmits(['click'])

const _size = computed(() => {
  return isNumber(props.size) ? `${props.size}px` : props.size
})

const onClick = () => {
  emit('click')
}
</script>

<template>
  <view ref="elRef" class="iconify" :class="[icon]" @click="onClick" />
</template>

<style lang="scss" scoped>
  .iconify {
    display: inline-block;
    vertical-align: middle;
    height: v-bind('_size');
    width: v-bind('_size');
    color: v-bind('color');
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
</style>
