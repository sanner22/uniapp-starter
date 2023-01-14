<template>
  <view v-if="loading" class="_u_p-15px">
    <u-skeleton rows="3" title loading></u-skeleton>
  </view>

  <template v-else>
    <u-cell-group title="基础组件">
      <u-cell
        icon="grid"
        title="Color 色彩"
        is-link
        @click="to('/pagesA/base/color')"
      />
      <u-cell
        icon="grid-fill"
        title="Icon 图标"
        is-link
        @click="to('/pagesA/base/icon')"
      />
      <u-cell
        icon="photo-fill"
        title="Image 图片"
        is-link
        @click="to('/pagesA/base/image')"
      />
      <u-cell
        icon="plus-square-fill"
        title="Button 按钮"
        is-link
        @click="to('/pagesA/base/button')"
      />
      <u-cell
        icon="file-text"
        title="Text 文本"
        is-link
        @click="to('/pagesA/base/text')"
      />
      <u-cell
        icon="grid"
        title="Layout 布局"
        is-link
        @click="to('/pagesA/base/layout')"
      />
      <u-cell
        icon="list"
        title="Cell 单元格"
        is-link
        @click="to('/pagesA/base/cell')"
      />
      <u-cell
        icon="bookmark"
        title="Badge 微标数"
        is-link
        @click="to('/pagesA/base/badge')"
      />
      <u-cell
        icon="bookmark-fill"
        title="Tag 标签"
        is-link
        @click="to('/pagesA/base/tag')"
      />
      <u-cell
        icon="reload"
        title="Loading 加载动画"
        is-link
        @click="to('/pagesA/base/loading-icon')"
      />
      <u-cell
        icon="reload"
        title="Loading page 加载页"
        is-link
        @click="to('/pagesA/base/loading-page')"
      />
    </u-cell-group>

    <u-cell-group title="表单组件">
      <u-cell
        icon="order"
        title="Form 表单"
        is-link
        @click="to('/pagesA/form/form')"
      />
      <u-cell
        icon="calendar"
        title="Calendar 日历"
        is-link
        @click="to('/pagesA/form/calendar')"
      />
      <u-cell
        icon="chat"
        title="Keyboard 键盘"
        is-link
        @click="to('/pagesA/form/keyboard')"
      />
      <u-cell
        icon="more-circle"
        title="Picker 选择器"
        is-link
        @click="to('/pagesA/form/picker')"
      />
      <u-cell
        icon="clock"
        title="DatetimePicker 时间选择器"
        @click="to('/pagesA/form/datetime-picker')"
        is-link
      />
      <u-cell
        icon="star"
        title="Rate 评分"
        is-link
        @click="to('/pagesA/form/rate')"
      />
      <u-cell
        icon="search"
        title="Search 搜索"
        is-link
        @click="to('/pagesA/form/search')"
      />
      <u-cell
        icon="plus"
        title="NumberBox 步进器"
        is-link
        @click="to('/pagesA/form/number-box')"
      />
      <u-cell
        icon="arrow-upward"
        title="Upload 上传"
        is-link
        @click="to('/pagesA/form/upload')"
      />
      <u-cell
        icon="email"
        title="Code 验证码倒计时"
        is-link
        @click="to('/pagesA/form/code')"
      />
      <u-cell
        icon="edit-pen"
        title="Input 输入框"
        is-link
        @click="to('/pagesA/form/input')"
      />
      <u-cell
        icon="edit-pen"
        title="Textarea 文本域"
        is-link
        @click="to('/pagesA/form/textarea')"
      />
      <u-cell
        icon="checkmark-circle"
        title="Checkbox 复选框"
        is-link
        @click="to('/pagesA/form/checkbox')"
      />
      <u-cell
        icon="checkbox-mark"
        title="Radio 单选框"
        is-link
        @click="to('/pagesA/form/radio')"
      />
      <u-cell
        icon="checkmark-circle-fill"
        title="Switch 开关选择器"
        is-link
        @click="to('/pagesA/form/switch')"
      />
      <u-cell
        icon="integral"
        title="Slider 滑动选择器"
        is-link
        @click="to('/pagesA/form/slider')"
      />
      <u-cell
        icon="photo-fill"
        title="Album 相册"
        is-link
        @click="to('/pagesA/form/album')"
      />
    </u-cell-group>

    <u-cell-group title="数据组件">
      <u-cell
        icon="list-dot"
        title="List 列表"
        is-link
        @click="to('/pagesA/data/list')"
      />
      <u-cell
        icon="car"
        title="Progress 进度条"
        is-link
        @click="to('/pagesA/data/progress')"
      />
      <u-cell
        icon="clock-fill"
        title="CountDown 倒计时"
        is-link
        @click="to('/pagesA/data/count-down')"
      />
      <u-cell
        icon="hourglass"
        title="CountTo 数字滚动"
        is-link
        @click="to('/pagesA/data/count-to')"
      />
    </u-cell-group>

    <u-cell-group title="反馈组件">
      <u-cell
        icon="order"
        title="Tooltip 长按提示"
        is-link
        @click="to('/pagesA/feedback/tooltip')"
      />
      <u-cell
        icon="list"
        title="ActionSheet 上拉菜单"
        is-link
        @click="to('/pagesA/feedback/action-sheet')"
      />
      <u-cell
        icon="warning"
        title="Alert 警告提示"
        is-link
        @click="to('/pagesA/feedback/alert')"
      />
      <u-cell
        icon="chat"
        title="Toast 消息提示"
        is-link
        @click="to('/pagesA/feedback/toast')"
      />
      <u-cell
        icon="chat-fill"
        title="Noticebar 滚动通知"
        is-link
        @click="to('/pagesA/feedback/notice-bar')"
      />
      <u-cell
        icon="volume"
        title="Notify 消息提示"
        is-link
        @click="to('/pagesA/feedback/notify')"
      />
      <u-cell
        icon="list-dot"
        title="SwipeAction 滑动单元格"
        is-link
        @click="to('/pagesA/feedback/swipe-action')"
      />
      <u-cell
        icon="bookmark"
        title="Collapse 折叠面板"
        is-link
        @click="to('/pagesA/feedback/collapse')"
      />
      <u-cell
        icon="share-square"
        title="Popup 弹出层"
        is-link
        @click="to('/pagesA/feedback/popup')"
      />
      <u-cell
        icon="more-circle-fill"
        title="Modal 模态框"
        is-link
        @click="to('/pagesA/feedback/modal')"
      />
    </u-cell-group>

    <u-cell-group title="布局组件">
      <u-cell
        icon="coupon"
        title="ScrollList 横向滚动列表"
        is-link
        @click="to('/pagesA/layout/scroll-list')"
      />
      <u-cell
        icon="minus"
        title="Line 线条"
        is-link
        @click="to('/pagesA/layout/line')"
      />
      <u-cell
        icon="moments-circel-fill"
        title="Overlay 遮罩层"
        is-link
        @click="to('/pagesA/layout/overlay')"
      />
      <u-cell
        icon="wifi-off"
        title="NoNetwork 无网络提示"
        is-link
        @click="to('/pagesA/layout/no-network')"
      />
      <u-cell
        icon="grid"
        title="Grid 宫格布局"
        is-link
        @click="to('/pagesA/layout/grid')"
      />
      <u-cell
        icon="gift-fill"
        title="Swiper 轮播图"
        is-link
        @click="to('/pagesA/layout/swiper')"
      />
      <u-cell
        icon="more-dot-fill"
        title="Skeleton 骨架屏"
        is-link
        @click="to('/pagesA/layout/skeleton')"
      />
      <u-cell
        icon="info"
        title="Sticky 吸顶"
        is-link
        @click="to('/pagesA/layout/sticky')"
      />
      <u-cell
        icon="minus"
        title="Divider 分割线"
        is-link
        @click="to('/pagesA/layout/divider')"
      />
    </u-cell-group>

    <u-cell-group title="导航组件">
      <u-cell
        icon="bookmark"
        title="Tabbar 底部导航栏"
        is-link
        @click="to('/pagesA/nav/tabbar')"
      />
      <u-cell
        icon="arrow-up"
        title="BackTop 返回顶部"
        is-link
        @click="to('/pagesA/nav/back-top')"
      />
      <u-cell
        icon="home-fill"
        title="Nabbar 导航栏"
        is-link
        @click="to('/pagesA/nav/navbar')"
      />
      <u-cell
        icon="tags-fill"
        title="Tabs 标签"
        is-link
        @click="to('/pagesA/nav/tabs')"
      />
      <u-cell
        icon="tags"
        title="Subsection 分段器"
        is-link
        @click="to('/pagesA/nav/subsection')"
      />
      <u-cell
        icon="list-dot"
        title="IndexList 索引列表"
        is-link
        @click="to('/pagesA/nav/index-list')"
      />
      <u-cell
        icon="skip-forward-right"
        title="Steps 步骤条"
        is-link
        @click="to('/pagesA/nav/steps')"
      />
      <u-cell
        icon="coupon"
        title="Empty 空内容"
        is-link
        @click="to('/pagesA/nav/empty')"
      />
    </u-cell-group>

    <u-cell-group title="其他组件">
      <u-cell
        icon="file-text-fill"
        title="Parse 富文本解析器"
        is-link
        @click="to('/pagesA/other/parse')"
      />
      <u-cell
        icon="edit-pen"
        title="CodeInput 验证码输入"
        is-link
        @click="to('/pagesA/other/code-input')"
      />
      <u-cell
        icon="more-circle"
        title="Loadmore 加载更多"
        is-link
        @click="to('/pagesA/other/loadmore')"
      />
      <u-cell
        icon="map"
        title="ReadMore 展开阅读更多"
        is-link
        @click="to('/pagesA/other/read-more')"
      />
      <u-cell
        icon="scan"
        title="Gap 间隔槽"
        is-link
        @click="to('/pagesA/other/gap')"
      />
      <u-cell
        icon="server-man"
        title="Avatar 头像"
        is-link
        @click="to('/pagesA/other/avatar')"
      />
      <u-cell
        icon="attach"
        title="Link 超链接"
        is-link
        @click="to('/pagesA/other/link')"
      />
      <u-cell
        icon="twitter"
        title="transition 动画"
        is-link
        @click="to('/pagesA/other/transition')"
      />
    </u-cell-group>
  </template>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from '@/hooks/router';

  const router = useRouter();

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 100);

  const to = (url: string) => {
    router.push(url);
  };
</script>

<style lang="scss" scoped></style>
