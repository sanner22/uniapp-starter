<script lang="ts" setup>
import NavbarSearch from '@/components/NavbarSearch/index.vue'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import { useRouter } from '@/hooks/router'

const router = useRouter()
</script>

<template>
  <tm-app>
    <tm-navbar title="商城首页" :shadow="0" hide-home hide-back>
      <template #left>
        <navbar-search placeholder="搜索" uno-flex-auto @click="router.go('./search')" />
      </template>
    </tm-navbar>

    <!-- 这里放置你的内容 -->
    <tm-sheet :round="5">
      <tm-text label="页面模板,新建pages,将此页面内容复制粘贴到新建.vue文件" />
    </tm-sheet>
  </tm-app>
</template>

<style lang="scss" scoped></style>
