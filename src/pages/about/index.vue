<script lang="ts" setup>
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { useAuthStore } from '@/state/modules/auth'
import { useRouter } from '@/hooks/router'

const authStore = useAuthStore()
const isLogin = ref(false)
const router = useRouter()
onShow(() => {
  isLogin.value = authStore.isLogin
})
const handleJump = (url: string) => {
  router.push(url)
}

// 登出
const handleLoginOut = () => {
  authStore.loginOut().then(() => {
    isLogin.value = false
  })
}
</script>

<template>
  <tm-app>
    <view class="container">
      <view class="head-wrap">
        <view class="avatar">
          <image class="img" src="/static/images/avatar.png" />
        </view>
        <view class="desc">
          {{ isLogin ? '测试' : '未登入' }}
        </view>
      </view>
      <view class="cell">
        <tm-button color="primary" block @click="handleJump('/pages/log/index?id=4345&title=log')">
          log
        </tm-button>
      </view>
      <view v-if="isLogin" class="cell">
        <tm-button color="red" block @click="handleLoginOut">
          登出
        </tm-button>
      </view>
      <view v-else class="cell">
        <tm-button color="green" block @click="handleJump('/pages/login/index')">
          登入
        </tm-button>
      </view>
    </view>
  </tm-app>
</template>

<style lang="scss" scoped>
  .container {
    padding: 96rpx 24rpx;
    .head-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar {
        height: 120rpx;
        width: 120rpx;
        border: 2rpx solid #d1d5db;
        border-radius: 120rpx;
        overflow: hidden;
        padding: 6rpx;
        .img {
          height: 100%;
          width: 100%;
        }
      }
      .desc {
        font-size: 28rpx;
        line-height: 120rpx;
      }
    }
    .cell {
      margin-top: 60rpx;
      text-align: center;
    }
  }
</style>
