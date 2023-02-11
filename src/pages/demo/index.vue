<script lang="ts" setup>
import { useRouter } from '@/hooks/router'

const router = useRouter()
</script>

<template>
  <tm-app>
    <tm-navbar title="用户中心" :shadow="0" />

    <tm-sheet :round="5" url="/pages-demo/mall/index">
      <tm-text label="商城首页" :font-size="32" />
      <tm-divider />
    </tm-sheet>

    <tm-sheet :round="5" :margin="[32, 0, 32, 32]" url="/pages-demo/mall/category">
      <tm-text label="分类" :font-size="32" />
      <tm-divider />
    </tm-sheet>

    <tm-sheet :round="5" :margin="[32, 0, 32, 32]" url="/pages-demo/mall/list">
      <tm-text label="商品列表" :font-size="32" />
      <tm-divider />
    </tm-sheet>

    <tm-sheet :round="5" :margin="[32, 0, 32, 32]" url="/pages-demo/mall/detail">
      <tm-text label="商品详情" :font-size="32" />
      <tm-divider />
    </tm-sheet>

    <tm-sheet :round="5" :margin="[32, 0, 32, 32]" url="/pages-demo/mall/cart">
      <tm-text label="购物车" :font-size="32" />
      <tm-divider />
    </tm-sheet>

    <tm-sheet :round="5" :margin="[32, 0, 32, 32]" url="/pages/user/index" @click="router.go('/pages/user/index')">
      <tm-text label="用户中心" :font-size="32" />
      <tm-divider />
    </tm-sheet>

    <tm-sheet :round="5" :margin="[32, 0, 32, 32]" url="/pages/login/index">
      <tm-text label="用户登录" :font-size="32" />
      <tm-divider />
    </tm-sheet>

    <!-- <view class="uno-p-15px">
      <tm-button color="primary" size="small" block class="uno-flex uno-flex-row" _class="uno-flex-auto" @click="jumpList1">
        List1 →
      </tm-button>
    </view> -->
  </tm-app>
</template>

<style lang="scss" scoped></style>
