<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,更多见文档"></tm-text>
      <tm-divider></tm-divider>
      <tm-rate :defaultValue="2"></tm-rate>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="只读"></tm-text>
      <tm-divider></tm-divider>
      <tm-rate color="green" readonly :defaultValue="4" showLabel></tm-rate>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="根据星数不同颜色不一样"></tm-text>
      <tm-divider></tm-divider>
      <tm-rate :color="['red', 'orange', 'primary', 'pink', 'green']" showLabel></tm-rate>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="更换不同的图标"></tm-text>
      <tm-divider></tm-divider>
      <tm-rate
        :defaultValue="1"
        icon="tmicon-smile-fill"
        :color="['red', 'orange', 'primary', 'pink', 'green']"
        showLabel
      ></tm-rate>
    </tm-sheet>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="禁用"></tm-text>
      <tm-divider></tm-divider>
      <tm-rate :defaultValue="1" disabled></tm-rate>
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  function beforeEnter() {
    return new Promise(res => {
      setTimeout(function () {
        res(true);
      }, 1000);
    });
  }
</script>
