<template>
  <tm-app>
    <tm-sticky :offset="offset">
      <template v-slot:sticky>
        <tm-sheet color="primary" :margin="[0, 0]">
          <tm-text :font-size="24" _class="font-weight-b" label="滑动页面我被悬浮了"></tm-text>
        </tm-sheet>
      </template>
      <tm-sheet :height="2000"> </tm-sheet>
    </tm-sticky>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const offset = ref(0);
  // #ifdef H5
  offset.value = 68;
  // #endif
</script>
