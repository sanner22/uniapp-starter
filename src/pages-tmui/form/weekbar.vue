<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档"></tm-text>
    </tm-sheet>
    <tm-weekbar></tm-weekbar>
    <tm-weekbar :followTheme="false" activeColor="white" color="red"></tm-weekbar>
    <tm-weekbar :followTheme="false" activeColor="black" color="yellow" linear="bottom"></tm-weekbar>
    <tm-weekbar model="custom" :dayNumber="7"></tm-weekbar>
  </tm-app>
</template>

<script lang="ts" setup></script>
