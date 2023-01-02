<template>
  <view class="u-page">
    <u-cell-group>
      <u-cell
        @click="openSheet(index)"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        isLink
      >
        <template #icon>
          <u-image
            :src="item.iconUrl"
            mode="widthFix"
            width="16"
            height="16"
          ></u-image>
        </template>
      </u-cell>
    </u-cell-group>
    <u-action-sheet
      :show="pickerName === 'show0'"
      @close="close"
      @select="select"
      :actions="[
        {
          name: '选项1',
        },
        {
          name: '选项2',
        },
        {
          name: '选项3',
          subname: '描述文本',
        },
      ]"
      :closeOnClickOverlay="false"
    >
    </u-action-sheet>
    <u-action-sheet
      :show="pickerName === 'show1'"
      @close="close"
      :actions="[
        {
          name: '选项1',
        },
        {
          loading: true,
        },
        {
          name: '选项被禁用',
          disabled: true,
        },
      ]"
    >
    </u-action-sheet>
    <u-action-sheet
      :show="pickerName === 'show2'"
      @close="close"
      :actions="[
        {
          name: '选项1',
        },
        {
          name: '选项2',
        },
        {
          name: '选项3',
        },
      ]"
      cancelText="取消"
    >
    </u-action-sheet>
    <u-action-sheet
      :show="pickerName === 'show3'"
      @close="close"
      :actions="[
        {
          name: '选项1',
        },
        {
          name: '选项2',
        },
        {
          name: '选项3',
        },
      ]"
      description="这是一段描述文本,字号偏小,颜色偏淡"
    >
    </u-action-sheet>
    <u-action-sheet
      :show="pickerName === 'show4'"
      @close="close"
      title="标题位置"
      :round="10"
    >
      <text style="margin: 10px 20px 30px 20px; color: #303133; font-size: 15px"
        >这是一段通过slot传入的内容,您可以在此自定义操作面板</text
      >
    </u-action-sheet>
    <u-action-sheet
      :show="pickerName === 'show5'"
      @close="close"
      title="微信开放能力"
      :actions="[
        {
          name: '获取用户信息',
          openType: 'getUserInfo',
          color: successColor,
        },
      ]"
      @getuserinfo="getuserinfo"
    ></u-action-sheet>
  </view>
</template>
<script setup lang="ts">
  import { Toast } from '@/utils/uniapi/prompt';
  import { ref } from 'vue';

  const successColor = (uni as any).$u.color['success'];

  const list = [
    {
      title: '普通使用',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/actionSheet/custom.png',
    },
    {
      title: '设置状态',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/actionSheet/status.png',
    },
    {
      title: '显示取消按钮',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/actionSheet/cancel.png',
    },
    {
      title: '描述内容',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/actionSheet/desc.png',
    },
    {
      title: '显示标题(显示圆角)',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/actionSheet/title.png',
    },
    {
      title: '微信开放能力',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/actionSheet/open.png',
    },
  ];

  const pickerName = ref('');

  const openSheet = (index: number) => {
    // #ifndef MP
    if (index === 5) return Toast('请在微信内预览');
    // #endif
    pickerName.value = `show${index}`;
  };
  const getuserinfo = (res: any) => {
    Toast(`用户名：${res.userInfo.nickName}`);
  };
  const close = () => {
    console.log('close');
    pickerName.value = '';
  };
  const select = (e: any) => {
    console.log('select', e);
  };
</script>
