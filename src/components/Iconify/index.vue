<template>
  <view ref="elRef" @click="onClick" :class="['iconify', icon]"></view>
</template>

<script lang="ts" setup name="Iconify">
  import { isNumber } from '@/utils/is';
  import { computed } from 'vue';

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
  });

  const _size = computed(() => {
    return isNumber(props.size) ? `${props.size}px` : props.size;
  });

  const emit = defineEmits(['click']);
  const onClick = () => {
    emit('click');
  };
</script>

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
