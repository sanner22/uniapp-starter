<script lang="ts" setup>
import { useRouter } from '@/hooks/router'

const router = useRouter()
const jumpList1 = () => {
  router.push('/pagesB/list/test1/index?key=words&page=1&limit=15')
}
</script>

<template>
  <tm-app>
    <tm-sheet class="container">
      页面构建中...
    </tm-sheet>
    <view class="uno-p-15px">
      <tm-button color="primary" size="small" block class="uno-flex uno-flex-row" _class="uno-flex-auto" @click="jumpList1">
        List1 →
      </tm-button>
    </view>
  </tm-app>
</template>

<style lang="scss" scoped>
  .container {
    padding: 128rpx 0;
    text-align: center;
  }
</style>
