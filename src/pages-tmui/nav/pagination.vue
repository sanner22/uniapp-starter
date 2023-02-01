<template>
  <tm-app>
    <tm-sheet>
      <tm-text :fontSize="24" _class="font-weight-b" label="基础属性,更多玩法请前往文档。"></tm-text>
    </tm-sheet>

    <tm-sheet :padding="[12, 12]" :margin="[0, 0]">
      <tm-pagination v-model:current="abv" color="red" :total="100"></tm-pagination>
    </tm-sheet>

    <tm-sheet :padding="[12, 12]" :margin="[0, 16]">
      <tm-pagination simple :total="100"></tm-pagination>
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const abv = ref(1);
  setTimeout(function () {
    abv.value = 4;
  }, 3000);
</script>
