<template>
  <tm-app>
    <view v-if="loading" class="uno-p-15px">
      <tm-skeleton :rows="3"></tm-skeleton>
    </view>

    <template v-else>
      <tm-text color="grey-darken-1" class="uno-m-15px">通用：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell bottomBorder :margin="[0, 0]" title="按钮 Button" url="/pages-tmui/common/button" />
        <tm-cell bottomBorder :margin="[0, 0]" title="图标 Icon" url="/pages-tmui/common/icon" />
        <tm-cell bottomBorder :margin="[0, 0]" title="文本 Text" url="/pages-tmui/common/text" />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">布局：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell bottomBorder :margin="[0, 0]" title="分割线 divider" url="/pages-tmui/layout/divider" />
        <tm-cell bottomBorder :margin="[0, 0]" title="宫格 grid" url="/pages-tmui/layout/grid" />
        <tm-cell bottomBorder :margin="[0, 0]" title="布局 row" url="/pages-tmui/layout/row" />
        <tm-cell bottomBorder :margin="[0, 0]" title="容器 sheet" url="/pages-tmui/layout/sheet" />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">展示：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell bottomBorder :margin="[0, 0]" title="头像 avatar" url="/pages-tmui/showData/avatar" />
        <tm-cell bottomBorder :margin="[0, 0]" title="二维码 qrcode" url="/pages-tmui/showData/qrcode" />
        <tm-cell bottomBorder :margin="[0, 0]" title="徽标 badge" url="/pages-tmui/showData/badge" />
        <tm-cell bottomBorder :margin="[0, 0]" title="卡片 card" url="/pages-tmui/showData/card" />
        <tm-cell bottomBorder :margin="[0, 0]" title="轮播 carousel" url="/pages-tmui/showData/carousel" />
        <tm-cell bottomBorder :margin="[0, 0]" title="折叠面板 collapse" url="/pages-tmui/showData/collapse" />
        <tm-cell bottomBorder :margin="[0, 0]" title="评论 comment" url="/pages-tmui/showData/comment" />
        <tm-cell bottomBorder :margin="[0, 0]" title="单元格 cell" url="/pages-tmui/showData/cell" />
        <tm-cell bottomBorder :margin="[0, 0]" title="倒计时 countdown" url="/pages-tmui/showData/countdown" />
        <tm-cell bottomBorder :margin="[0, 0]" title="描述 descriptions" url="/pages-tmui/showData/descriptions" />
        <tm-cell bottomBorder :margin="[0, 0]" title="图片 image" url="/pages-tmui/showData/image" />
        <tm-cell bottomBorder :margin="[0, 0]" title="列表索引 indexes" url="/pages-tmui/showData/indexes" />
        <tm-cell bottomBorder :margin="[0, 0]" title="显示更多 more" url="/pages-tmui/showData/more" />
        <tm-cell bottomBorder :margin="[0, 0]" title="结果页 result" url="/pages-tmui/showData/result" />
        <tm-cell bottomBorder :margin="[0, 0]" title="气泡卡片 popover" url="/pages-tmui/showData/popover" />
        <tm-cell bottomBorder :margin="[0, 0]" title="数值显示 statistic" url="/pages-tmui/showData/statistic" />
        <tm-cell bottomBorder :margin="[0, 0]" title="表格 table" url="/pages-tmui/showData/table" />
        <tm-cell bottomBorder :margin="[0, 0]" title="选项卡 tabs" url="/pages-tmui/showData/tabs" />
        <tm-cell bottomBorder :margin="[0, 0]" title="标签 tag" url="/pages-tmui/showData/tag" />
        <tm-cell bottomBorder :margin="[0, 0]" title="时间轴 timeline" url="/pages-tmui/showData/timeline" />
        <tm-cell bottomBorder :margin="[0, 0]" title="树 tree" url="/pages-tmui/showData/tree" />
        <tm-cell bottomBorder :margin="[0, 0]" title="虚拟列表 virtual-list" url="/pages-tmui/showData/virtual-list" />
        <tm-cell bottomBorder :margin="[0, 0]" title="瀑布流 waterfall" url="/pages-tmui/showData/waterfall" />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">表单：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell bottomBorder :margin="[0, 0]" title="级联器 cascader" url="/pages-tmui/form/cascader" />
        <tm-cell bottomBorder :margin="[0, 0]" title="复选框 checkbox" url="/pages-tmui/form/checkbox" />
        <tm-cell bottomBorder :margin="[0, 0]" title="日历 calendar" url="/pages-tmui/form/calendar" />
        <tm-cell bottomBorder :margin="[0, 0]" title="城市选择 city" url="/pages-tmui/form/city" />
        <tm-cell bottomBorder :margin="[0, 0]" title="表单 form" url="/pages-tmui/form/form" />
        <tm-cell bottomBorder :margin="[0, 0]" title="输入框 input" url="/pages-tmui/form/input" />
        <tm-cell bottomBorder :margin="[0, 0]" title="键盘 keyborad" url="/pages-tmui/form/keyborad" />
        <tm-cell bottomBorder :margin="[0, 0]" title="选择器 picker" url="/pages-tmui/form/picker" />
        <tm-cell bottomBorder :margin="[0, 0]" title="评分 rate" url="/pages-tmui/form/rate" />
        <tm-cell bottomBorder :margin="[0, 0]" title="单选框 radio" url="/pages-tmui/form/radio" />
        <tm-cell bottomBorder :margin="[0, 0]" title="步进器 stepper" url="/pages-tmui/form/stepper" />
        <tm-cell bottomBorder :margin="[0, 0]" title="滑块 slider" url="/pages-tmui/form/slider" />
        <tm-cell bottomBorder :margin="[0, 0]" title="开关 switch" url="/pages-tmui/form/switch" />
        <tm-cell bottomBorder :margin="[0, 0]" title="时间选择器 time" url="/pages-tmui/form/time" />
        <tm-cell bottomBorder :margin="[0, 0]" title="图片上传 upload" url="/pages-tmui/form/upload" />
        <tm-cell bottomBorder :margin="[0, 0]" title="时间周 weekbar" url="/pages-tmui/form/weekbar" />
        <tm-cell bottomBorder :margin="[0, 0]" title="时间选择器 time-between" url="/pages-tmui/form/time-between" />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">反馈：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell bottomBorder :margin="[0, 0]" title="警告提示 alert" url="/pages-tmui/feedback/alert" />
        <tm-cell bottomBorder :margin="[0, 0]" title="抽屉 drawer" url="/pages-tmui/feedback/drawer" />
        <tm-cell bottomBorder :margin="[0, 0]" title="列表拖动排序 drag-list" url="/pages-tmui/feedback/drag-list" />
        <tm-cell bottomBorder :margin="[0, 0]" title="模态框 modal" url="/pages-tmui/feedback/modal" />
        <tm-cell bottomBorder :margin="[0, 0]" title="全局提示 message" url="/pages-tmui/feedback/message" />
        <tm-cell bottomBorder :margin="[0, 0]" title="遮罩 overlay" url="/pages-tmui/feedback/overlay" />
        <tm-cell bottomBorder :margin="[0, 0]" title="进度条 progress" url="/pages-tmui/feedback/progress" />
        <tm-cell bottomBorder :margin="[0, 0]" title="局部加载 spin" url="/pages-tmui/feedback/spin" />
        <tm-cell
          bottomBorder
          :margin="[0, 0]"
          title="左滑操作栏 slide-switch"
          url="/pages-tmui/feedback/slide-switch"
        />
        <tm-cell bottomBorder :margin="[0, 0]" title="骨架屏 skeleton" url="/pages-tmui/feedback/skeleton" />
        <tm-cell bottomBorder :margin="[0, 0]" title="动效 translate" url="/pages-tmui/feedback/translate" />
        <tm-cell bottomBorder :margin="[0, 0]" title="通知提醒 notification" url="/pages-tmui/feedback/notification" />
        <tm-cell bottomBorder :margin="[0, 0]" title="滚动通知 roll-notice" url="/pages-tmui/feedback/roll-notice" />
      </view>
    </template>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 100);
</script>

<style lang="scss" scoped></style>
