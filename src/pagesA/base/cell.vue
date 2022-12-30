<template>
  <view>
    <view class="u-page__item">
      <u-cell-group title="基础功能">
        <u-cell title="uView UI" value="内容" is-link></u-cell>
        <u-cell
          title="利剑出鞘,一统江湖"
          value="内容"
          label="挣脱束缚,向往自由"
        ></u-cell>
      </u-cell-group>
    </view>
    <view class="u-page__item">
      <u-cell-group title="自定义图标/图片">
        <u-cell title="单元格" icon="lock-fill"></u-cell>
        <u-cell
          title="单元格"
          icon="https://cdn.uviewui.com/uview/example/tag.png"
        ></u-cell>
      </u-cell-group>
    </view>
    <view class="u-page__item">
      <u-cell-group title="自定义大小">
        <u-cell size="large" title="单元格" value="内容" is-link></u-cell>
        <u-cell
          size="large"
          title="单元格"
          value="内容"
          label="描述信息"
        ></u-cell>
      </u-cell-group>
    </view>
    <view class="u-page__item">
      <u-cell-group title="显示右箭头">
        <u-cell title="单元格" value="组件" is-link></u-cell>
        <u-cell
          title="单元格"
          value="工具"
          arrow-direction="up"
          is-link
        ></u-cell>
        <u-cell
          title="单元格"
          value="模板"
          arrow-direction="down"
          is-link
        ></u-cell>
      </u-cell-group>
    </view>
    <view class="u-page__item">
      <u-cell-group title="跳转页面">
        <u-cell title="打开标签页" is-link url="/pagesA/base/tag"></u-cell>
        <u-cell title="打开徽标页" is-link url="/pagesA/base/badge"></u-cell>
      </u-cell-group>
    </view>
    <view class="u-page__item">
      <u-cell-group title="右侧内容垂直居中">
        <u-cell
          title="单元格"
          value="内容"
          label="描述信息"
          :center="true"
        ></u-cell>
      </u-cell-group>
    </view>
    <view class="u-page__item">
      <u-cell-group title="自定义插槽">
        <u-cell value="内容">
          <template #title>
            <view class="u-slot-title">
              <text class="u-cell-text">单元格</text>
              <u-tag text="标签" plain size="mini" type="warning"></u-tag>
            </view>
          </template>
        </u-cell>
        <u-cell title="单元格" is-link>
          <template #value>
            <u-badge type="error" value="99"></u-badge>
          </template>
        </u-cell>
      </u-cell-group>
    </view>
    <u-gap height="30"></u-gap>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss">
  .u-slot-title {
    @include flex;
    flex-direction: row;
    align-items: center;
  }

  .u-cell-text {
    font-size: 15px;
    line-height: 22px;
    color: #303133;
    margin-right: 5px;
  }
</style>
