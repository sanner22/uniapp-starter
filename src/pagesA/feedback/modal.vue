<template>
  <view>
    <u-cell-group>
      <u-cell
        @click="showModal(index + 1)"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        :icon="item.iconUrl"
        isLink
      />
    </u-cell-group>

    <u-modal
      :content="content"
      title="标题"
      :show="pickerName === 'show1'"
      @confirm="confirm"
    />
    <u-modal
      :content="content"
      :show="pickerName === 'show2'"
      @confirm="confirm"
    />
    <u-modal
      :content="content"
      :show="pickerName === 'show3'"
      showCancelButton
      closeOnClickOverlay
      @confirm="confirm"
      @cancel="cancel"
      @close="close"
    />
    <u-modal
      :content="content"
      :show="pickerName === 'show4'"
      showCancelButton
      asyncClose
      @confirm="confirm"
      @cancel="cancel"
    />
    <u-modal
      :content="content"
      :show="pickerName === 'show5'"
      showCancelButton
      buttonReverse
      @confirm="confirm"
      @cancel="cancel"
    />
    <u-modal
      :content="content"
      title="标题"
      :show="pickerName === 'show6'"
      closeOnClickOverlay
      @confirm="confirm"
      @close="close"
    />
    <u-modal
      title="利剑出鞘,一统江湖"
      :show="pickerName === 'show7'"
      closeOnClickOverlay
      @confirm="confirm"
    >
      <u-image src="/static/logo.png" width="80" height="80" />
    </u-modal>
    <u-modal
      title="标题"
      :show="pickerName === 'show8'"
      :content="content"
      closeOnClickOverlay
      showCancelButton
    >
      <template #confirmButton>
        <u-button text="确定" type="success" shape="circle" @click="close" />
      </template>
    </u-modal>
    <u-modal
      :content="content"
      title="标题"
      :show="pickerName === 'show9'"
      :zoom="false"
      @confirm="confirm"
    />
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const list = [
    {
      title: '基础使用',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/modal/4.png',
    },
    {
      title: '无标题',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/modal/5.png',
    },
    {
      title: '带取消按钮',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/modal/2.png',
    },
    {
      title: '异步关闭',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/modal/6.png',
    },
    {
      title: '对调取消和确认按钮',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/modal/3.png',
    },
    {
      title: '允许点击遮罩关闭',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/modal/7.png',
    },
    {
      title: '传入slot',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/modal/1.png',
    },
    {
      title: '自定义按钮',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/modal/8.png',
    },
    {
      title: '淡入淡出动画',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/modal/9.png',
    },
  ];

  const content =
    '模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作';
  const pickerName = ref('');

  const showModal = (index: number) => {
    pickerName.value = `show${index}`;
  };
  const confirm = () => {
    pickerName.value = '';
    console.log('confirm');
  };
  const cancel = () => {
    pickerName.value = '';
    console.log('cancel');
  };
  const close = () => {
    pickerName.value = '';
    console.log('close');
  };
</script>
