<template>
  <tm-app ref="app">
    <tm-navbar color="blue" linear="right" title="设置更多主题"></tm-navbar>

    <view class="mx-32 flex flex-row flex-wrap">
      <tm-sheet
        v-for="(item, index) in list"
        :key="index"
        :round="3"
        :margin="[4, 15]"
        :color="item.name"
        :width="285"
        :height="130"
        @click="setTheme(item.name)"
      >
        <tm-sheet :userInteractionEnabled="false" :round="3" blur :margin="[0, 0]" :height="80">
          <tm-text :label="item.name"></tm-text>
        </tm-sheet>
      </tm-sheet>
    </view>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { onLoad } from '@dcloudio/uni-app';
  import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia';
  import tmApp from '@/tmui/components/tm-app/tm-app.vue';

  const app = ref<InstanceType<typeof tmApp> | null>(null);
  const store = useTmpiniaStore();
  const list = ref<{ name: string }[]>([]);

  onMounted(() => showlist());

  function showlist() {
    list.value = [...store.tmStore.colorList];
  }

  function setTheme(colorname: string) {
    app.value?.setTheme(colorname);
  }

  onLoad(() => {
    console.log('--------');
  });
</script>
