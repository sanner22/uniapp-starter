<template>
  <tm-app>
    <tm-cropimg @confirm="cropimgConfig"></tm-cropimg>
  </tm-app>
</template>

<script lang="ts" setup>
  const cropimgConfig = (e: any) => {
    // h5为base64
    console.log(e);
  };
</script>
