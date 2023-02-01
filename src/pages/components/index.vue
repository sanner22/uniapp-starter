<template>
  <tm-app>
    <view v-if="loading" class="uno-p-15px">
      <tm-skeleton :rows="3"></tm-skeleton>
    </view>

    <template v-else v-for="(group, index) in componentGroups" :key="index">
      <tm-text color="grey-darken-1" class="uno-m-15px">{{ group.group.title }}：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell
          v-for="(item, index) in group.list"
          :key="index"
          bottom-border
          :margin="[0, 0]"
          :title="item.title"
          :url="item.path"
        />
      </view>
    </template>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { componentGroups } from '../../pages-tmui/index';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 100);
</script>

<style lang="scss" scoped></style>
