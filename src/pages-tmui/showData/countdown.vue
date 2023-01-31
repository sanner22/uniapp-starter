<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="基础示例,默认是精确到毫秒级"></tm-text>
      <tm-divider></tm-divider>
      <view>
        <tm-countdown ref="cu" :autoStart="false"></tm-countdown>
      </view>
      <view class="mt-32 flex flex-row flex-around">
        <tm-button @click="actions('resinit')" size="small" label="重置"></tm-button>
        <tm-button
          @click="actions('start')"
          size="small"
          :width="140"
          :font-size="22"
          label="开始/继续"
          color="green"
        ></tm-button>
        <tm-button @click="actions('pause')" size="small" label="暂停" color="orange"></tm-button>
        <tm-button @click="actions('stop')" size="small" label="结束" color="red"></tm-button>
      </view>
    </tm-sheet>
  </tm-app>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import tmCountdown from '@/tmui/components/tm-countdown/tm-countdown.vue';

  const cu = ref<InstanceType<typeof tmCountdown> | null>(null);

  function actions(action: string) {
    console.log(action);
    switch (action) {
      case 'resinit':
        cu.value?.resinit();
        break;

      case 'start':
        cu.value?.start();
        break;

      case 'pause':
        cu.value?.pause();
        break;

      case 'stop':
        cu.value?.stop();
        break;

      default:
        break;
    }
  }
</script>
