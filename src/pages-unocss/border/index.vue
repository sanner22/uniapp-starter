<script setup lang="ts">
  import BorderRadius from './components/BorderRadius.vue';
  import BorderWidth from './components/BorderWidth.vue';
  import BorderStyle from './components/BorderStyle.vue';
  import BorderColor from './components/BorderColor.vue';
</script>

<template>
  <tm-app>
    <view class="uno-bg-gray uno-m-2">
      <border-radius />
      <border-width />
      <border-style />
      <border-color />
    </view>
  </tm-app>
</template>
