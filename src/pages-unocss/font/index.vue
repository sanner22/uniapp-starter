<script setup lang="ts">
  import FontSize from './components/FontSize.vue';
  import FontBold from './components/FontBold.vue';
  import LetterSpacing from './components/LetterSpacing.vue';
  import LineHeight from './components/LineHeight.vue';
  import TextAlign from './components/TextAlign.vue';
  import TextColor from './components/TextColor.vue';
  import TextDecoration from './components/TextDecoration.vue';
  import TextDecorationStyle from './components/TextDecorationStyle.vue';
  import TextIndent from './components/TextIndent.vue';
  import TextOpacity from './components/TextOpacity.vue';
  import TextShadow from './components/TextShadow.vue';
</script>

<template>
  <tm-app>
    <view class="uno-m-2 uno-bg-gray">
      <font-size />
      <font-bold />
      <letter-spacing />
      <line-height />
      <text-align />
      <text-color />
      <text-decoration />
      <text-decoration-style />
      <text-indent />
      <text-opacity />
      <text-shadow />
    </view>
  </tm-app>
</template>
