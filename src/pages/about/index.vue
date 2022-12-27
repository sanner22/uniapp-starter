<script lang="ts" setup>
  import { ref } from 'vue';
  import { onShow } from '@dcloudio/uni-app';
  import BasicButton from '@/components/BasicButton/index.vue';
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import { useAuthStore } from '@/state/modules/auth';
  import { useRouter } from '@/hooks/router';

  const authStore = useAuthStore();
  const isLogin = ref(false);
  const router = useRouter();
  onShow(() => {
    isLogin.value = authStore.isLogin;
  });
  const handleJump = (url: string) => {
    router.push(url);
  };

  // 登出
  const handleLoginOut = () => {
    authStore.loginOut().then(() => {
      isLogin.value = false;
    });
  };
</script>

<template>
  <app-provider>
    <view class="container">
      <view class="head-wrap">
        <view class="avatar">
          <image class="img" src="/static/images/avatar.png" />
        </view>
        <view class="desc">{{ isLogin ? '测试' : '未登入' }}</view>
      </view>
      <view class="cell">
        <basic-button @click="handleJump('/pages/log/index?id=4345&title=log')">
          log
        </basic-button>
      </view>
      <view class="cell" v-if="isLogin">
        <basic-button @click="handleLoginOut">登出</basic-button>
      </view>
      <view class="cell" v-else>
        <basic-button @click="handleJump('/pages/login/index')">
          登入
        </basic-button>
      </view>
    </view>
  </app-provider>
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
