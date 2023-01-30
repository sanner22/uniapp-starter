<template>
  <view>
    <u-text text="演示案例" type="info" margin="10px 0" />
    <view>
      <u-swipe-action>
        <u-swipe-action-item v-if="show1" :options="options1" @click="click">
          <view class="swipe-action u-border-top u-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">基础使用</text>
            </view>
          </view>
        </u-swipe-action-item>
      </u-swipe-action>
    </view>

    <u-text text="按钮组" type="info" margin="10px 0" />
    <view>
      <u-swipe-action>
        <u-swipe-action-item :options="options2">
          <view class="swipe-action u-border-top u-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">两个按钮并列</text>
            </view>
          </view>
        </u-swipe-action-item>
      </u-swipe-action>
    </view>

    <u-text text="带图标" type="info" margin="10px 0" />
    <view>
      <u-swipe-action>
        <u-swipe-action-item :options="options3">
          <view class="swipe-action u-border-top u-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">自定义图标</text>
            </view>
          </view>
        </u-swipe-action-item>
      </u-swipe-action>
    </view>

    <u-text text="组合使用" type="info" margin="10px 0" />
    <view>
      <u-swipe-action>
        <u-swipe-action-item
          :options="item.options"
          v-for="(item, index) in options4"
          :disabled="item.disabled"
          :key="index"
        >
          <view class="swipe-action u-border-top" :class="[index === options4.length - 1 && 'u-border-bottom']">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">{{ item.text }}</text>
            </view>
          </view>
        </u-swipe-action-item>
      </u-swipe-action>
    </view>

    <u-text text="自定义按钮形状" type="info" margin="10px 0" />
    <view>
      <u-swipe-action>
        <u-swipe-action-item :options="options5">
          <view class="swipe-action u-border-top u-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">圆形按钮</text>
            </view>
          </view>
        </u-swipe-action-item>
      </u-swipe-action>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { Modal } from '@/utils/uniapi/prompt';
  import { ref } from 'vue';

  const show1 = ref(true);
  const options1 = ref([
    {
      text: '删除',
      style: {
        backgroundColor: '#f56c6c',
      },
    },
  ]);
  const options2 = ref([
    {
      text: '收藏',
      style: {
        backgroundColor: '#3c9cff',
      },
    },
    {
      text: '删除',
      style: {
        backgroundColor: '#f56c6c',
      },
    },
  ]);
  const options3 = ref([
    {
      text: '收藏',
      icon: 'star-fill',
      iconSize: '20',
      style: {
        backgroundColor: '#f9ae3d',
      },
    },
  ]);
  const options4 = ref([
    {
      text: '禁用状态',
      disabled: true,
      options: [
        {
          text: '置顶',
          style: {
            backgroundColor: '#3c9cff',
          },
        },
        {
          text: '取消',
          style: {
            backgroundColor: '#f9ae3d',
          },
        },
      ],
    },
    {
      text: '正常状态',
      disabled: false,
      options: [
        {
          text: '置顶',
          style: {
            backgroundColor: '#3c9cff',
          },
        },
        {
          text: '取消',
          style: {
            backgroundColor: '#f9ae3d',
          },
        },
      ],
    },
    {
      text: '自动关闭',
      disabled: false,
      options: [
        {
          text: '置顶',
          style: {
            backgroundColor: '#3c9cff',
          },
        },
        {
          text: '取消',
          style: {
            backgroundColor: '#f9ae3d',
          },
        },
      ],
    },
  ]);
  const options5 = ref([
    {
      icon: 'trash-fill',
      style: {
        backgroundColor: '#f56c6c',
        width: '40px',
        height: '40px',
        borderRadius: '100px',
        margin: '0 6px',
      },
    },
    {
      icon: 'heart-fill',
      style: {
        backgroundColor: '#5ac725',
        width: '40px',
        height: '40px',
        borderRadius: '100px',
        margin: '0 6px',
      },
    },
  ]);

  const click = (index: number) => {
    console.log('click', index);
    Modal({ title: '温馨提示', content: '确定要删除吗？' }).then(res => {
      if ((res as UniApp.ShowModalRes).confirm) {
        show1.value = false;
      }
    });
  };
</script>

<style lang="scss" scoped>
  .swipe-action {
    &__content {
      padding: 25rpx 0;

      &__text {
        font-size: 15px;
        color: $u-main-color;
        padding-left: 30rpx;
      }
    }
  }
</style>
