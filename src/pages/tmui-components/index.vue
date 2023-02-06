<script lang="ts" setup>
import { ref } from 'vue'
import { componentGroups } from './components'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 100)
</script>

<template>
  <tm-app>
    <view class="uno-my-30px uno-center">
      <img src="https://tmui.design/images/logoGreat.png" width="80" height="80">
    </view>

    <view v-if="loading" class="uno-p-15px">
      <tm-skeleton :rows="3" />
    </view>

    <tm-collapse v-else :accordion="true" :default-active-key="['common']">
      <tm-collapse-item
        v-for="(g, index) in componentGroups"
        :key="index"
        :title="`${g.group.title} ${g.group.key}`"
        :name="g.group.key"
      >
        <view class="uno-m-15px uno-rounded-3px uno-overflow-hidden">
          <tm-cell
            v-for="(item, index) in g.list"
            :key="index"
            bottom-border
            :margin="[0, 0]"
            :title="item.title"
            :url="item.path"
          />
        </view>
      </tm-collapse-item>
    </tm-collapse>
  </tm-app>
</template>

<style lang="scss" scoped></style>
