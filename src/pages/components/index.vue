<script lang="ts" setup>
  import { ref } from 'vue';
  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 100);
</script>

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
        url="/pagesA/base/color"
      ></u-cell>
      <u-cell
        icon="grid-fill"
        title="Icon 图标"
        is-link
        url="/pagesA/base/icon"
      ></u-cell>
      <u-cell
        icon="photo-fill"
        title="Image 图片"
        is-link
        url="/pagesA/base/image"
      ></u-cell>
      <u-cell
        icon="plus-square-fill"
        title="Button 按钮"
        is-link
        url="/pagesA/base/button"
      ></u-cell>
      <u-cell
        icon="file-text"
        title="Text 文本"
        is-link
        url="/pagesA/base/text"
      ></u-cell>
      <u-cell
        icon="grid"
        title="Layout 布局"
        is-link
        url="/pagesA/base/layout"
      ></u-cell>
      <u-cell
        icon="list"
        title="Cell 单元格"
        is-link
        url="/pagesA/base/cell"
      ></u-cell>
      <u-cell
        icon="bookmark"
        title="Badge 微标数"
        is-link
        url="/pagesA/base/badge"
      ></u-cell>
      <u-cell
        icon="bookmark-fill"
        title="Tag 标签"
        is-link
        url="/pagesA/base/tag"
      ></u-cell>
      <u-cell
        icon="reload"
        title="Loading 加载动画"
        is-link
        url="/pagesA/base/loading-icon"
      ></u-cell>
      <u-cell
        icon="reload"
        title="Loading page 加载页"
        is-link
        url="/pagesA/base/loading-page"
      ></u-cell>
    </u-cell-group>

    <u-cell-group title="表单组件">
      <u-cell
        icon="order"
        title="Form 表单"
        is-link
        url="/pagesA/form/form"
      ></u-cell>
      <u-cell
        icon="calendar"
        title="Calendar 日历"
        is-link
        url="/pagesA/form/calendar"
      ></u-cell>
      <u-cell
        icon="chat"
        title="Keyboard 键盘"
        is-link
        url="/pagesA/form/keyboard"
      ></u-cell>
      <u-cell
        icon="more-circle"
        title="Picker 选择器"
        is-link
        url="/pagesA/form/picker"
      ></u-cell>
      <u-cell
        icon="clock"
        title="DatetimePicker 时间选择器"
        url="/pagesA/form/datetime-picker"
        is-link
      ></u-cell>
      <u-cell
        icon="star"
        title="Rate 评分"
        is-link
        url="/pagesA/form/rate"
      ></u-cell>
      <u-cell
        icon="search"
        title="Search 搜索"
        is-link
        url="/pagesA/form/search"
      ></u-cell>
      <u-cell
        icon="plus"
        title="NumberBox 步进器"
        is-link
        url="/pagesA/form/number-box"
      ></u-cell>
      <u-cell
        icon="arrow-upward"
        title="Upload 上传"
        is-link
        url="/pagesA/form/upload"
      ></u-cell>
      <u-cell
        icon="email"
        title="Code 验证码倒计时"
        is-link
        url="/pagesA/form/code"
      ></u-cell>
      <u-cell
        icon="edit-pen"
        title="Input 输入框"
        is-link
        url="/pagesA/form/input"
      ></u-cell>
      <u-cell
        icon="edit-pen"
        title="Textarea 文本域"
        is-link
        url="/pagesA/form/textarea"
      ></u-cell>
      <u-cell
        icon="checkmark-circle"
        title="Checkbox 复选框"
        is-link
        url="/pagesA/form/checkbox"
      ></u-cell>
      <u-cell
        icon="checkbox-mark"
        title="Radio 单选框"
        is-link
        url="/pagesA/form/radio"
      ></u-cell>
      <u-cell
        icon="checkmark-circle-fill"
        title="Switch 开关选择器"
        is-link
        url="/pagesA/form/switch"
      ></u-cell>
      <u-cell
        icon="integral"
        title="Slider 滑动选择器"
        is-link
        url="/pagesA/form/slider"
      ></u-cell>
      <u-cell
        icon="photo-fill"
        title="Album 相册"
        is-link
        url="/pagesA/form/album"
      ></u-cell>
    </u-cell-group>

    <u-cell-group title="数据组件">
      <u-cell
        icon="list-dot"
        title="List 列表"
        is-link
        url="/pagesA/data/list"
      ></u-cell>
      <u-cell
        icon="car"
        title="Progress 进度条"
        is-link
        url="/pagesA/data/progress"
      ></u-cell>
      <u-cell
        icon="clock-fill"
        title="CountDown 倒计时"
        is-link
        url="/pagesA/data/count-down"
      ></u-cell>
      <u-cell
        icon="hourglass"
        title="CountTo 数字滚动"
        is-link
        url="/pagesA/data/count-to"
      ></u-cell>
    </u-cell-group>

    <u-cell-group title="反馈组件">
      <u-cell
        icon="order"
        title="Tooltip 长按提示"
        is-link
        url="/pagesA/feedback/tooltip"
      ></u-cell>
      <u-cell
        icon="list"
        title="ActionSheet 上拉菜单"
        is-link
        url="/pagesA/feedback/action-sheet"
      ></u-cell>
      <u-cell
        icon="warning"
        title="Alert 警告提示"
        is-link
        url="/pagesA/feedback/alert"
      ></u-cell>
      <u-cell
        icon="chat"
        title="Toast 消息提示"
        is-link
        url="/pagesA/feedback/toast"
      ></u-cell>
      <u-cell
        icon="chat-fill"
        title="Noticebar 滚动通知"
        is-link
        url="/pagesA/feedback/notice-bar"
      ></u-cell>
      <u-cell
        icon="volume"
        title="Notify 消息提示"
        is-link
        url="/pagesA/feedback/notify"
      ></u-cell>
      <u-cell
        icon="list-dot"
        title="SwipeAction 滑动单元格"
        is-link
        url="/pagesA/feedback/swipe-action"
      ></u-cell>
      <u-cell
        icon="bookmark"
        title="Collapse 折叠面板"
        is-link
        url="/pagesA/feedback/collapse"
      ></u-cell>
      <u-cell
        icon="share-square"
        title="Popup 弹出层"
        is-link
        url="/pagesA/feedback/popup"
      ></u-cell>
      <u-cell
        icon="more-circle-fill"
        title="Modal 模态框"
        is-link
        url="/pagesA/feedback/modal"
      ></u-cell>
    </u-cell-group>

    <u-cell-group title="布局组件">
      <u-cell
        icon="map"
        title="ScrollList 横向滚动列表"
        is-link
        url="/pagesA/layout/scroll-list"
      ></u-cell>
      <u-cell
        icon="map"
        title="Line 线条"
        is-link
        url="/pagesA/layout/line"
      ></u-cell>
      <u-cell icon="map" title="Overlay 遮罩层" is-link></u-cell>
      <u-cell icon="map" title="NoNetwork 无网络提示" is-link></u-cell>
      <u-cell icon="map" title="Grid 宫格布局" is-link></u-cell>
      <u-cell icon="map" title="Swiper 轮播图" is-link></u-cell>
      <u-cell icon="map" title="Skeleton 骨架屏" is-link></u-cell>
      <u-cell icon="map" title="Sticky 吸顶" is-link></u-cell>
      <u-cell icon="map" title="Divider 分割线" is-link></u-cell>
    </u-cell-group>

    <u-cell-group title="导航组件">
      <u-cell icon="map" title="Tabbar 底部导航栏" is-link></u-cell>
      <u-cell icon="map" title="BackTop 返回顶部" is-link></u-cell>
      <u-cell icon="map" title="Nabbar 导航栏" is-link></u-cell>
      <u-cell icon="map" title="Tabs 标签" is-link></u-cell>
      <u-cell icon="map" title="Subsection 分段器" is-link></u-cell>
      <u-cell icon="map" title="IndexList 索引列表" is-link></u-cell>
      <u-cell icon="map" title="Steps 步骤条" is-link></u-cell>
      <u-cell icon="map" title="Empty 空内容" is-link></u-cell>
    </u-cell-group>

    <u-cell-group title="其他组件">
      <u-cell icon="map" title="Parse 富文本解析器" is-link></u-cell>
      <u-cell icon="map" title="CodeInput 验证码输入" is-link></u-cell>
      <u-cell icon="map" title="Loadmore 加载更多" is-link></u-cell>
      <u-cell icon="map" title="ReadMore 展开阅读更多" is-link></u-cell>
      <u-cell icon="map" title="Gap 间隔槽" is-link></u-cell>
      <u-cell icon="map" title="Avatar 头像" is-link></u-cell>
      <u-cell icon="map" title="Link 超链接" is-link></u-cell>
      <u-cell icon="map" title="transition 动画" is-link></u-cell>
    </u-cell-group>
  </template>
</template>

<style lang="scss" scoped></style>
