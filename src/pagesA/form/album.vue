<template>
  <view class="uno-px-15px">
    <u-text text="基础使用" type="info" margin="10px 0" />
    <view class="album">
      <view class="album__avatar">
        <u-image
          src="/static/logo.png"
          mode="aspectFill"
          width="32"
          height="32"
        />
      </view>
      <view class="album__content">
        <u-text text="uView UI" type="primary" bold size="17" />
        <u-text
          margin="0 0 8px 0"
          text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
        />
        <u-album :urls="urls1" keyName="src2"></u-album>
      </view>
    </view>

    <u-text text="多图模式" type="info" margin="10px 0" />
    <view class="album">
      <view class="album__avatar">
        <u-image
          src="/static/logo.png"
          mode="aspectFill"
          width="32"
          height="32"
        />
      </view>
      <view class="album__content">
        <u-text text="uView UI" type="primary" bold size="17" />
        <u-text
          margin="0 0 8px 0"
          text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
        />
        <u-album :urls="urls2"></u-album>
      </view>
    </view>

    <u-text text="图文对齐" type="info" margin="10px 0" />
    <view class="album">
      <view class="album__avatar">
        <u-image
          src="/static/logo.png"
          mode="aspectFill"
          width="32"
          height="32"
        />
      </view>
      <view class="album__content">
        <u-text text="uView UI" type="primary" bold size="17" />
        <view
          :style="{
            marginBottom: '8px',
            width: albumWidth + 'px',
          }"
        >
          <u-text
            text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
            :customStyle="{
              width: albumWidth + 'px',
            }"
          />
        </view>
        <u-album
          :urls="urls2"
          @albumWidth="(width: number) => (albumWidth = width)"
          multipleSize="68"
        ></u-album>
      </view>
    </view>

    <u-text text="更改裁剪模式" type="info" margin="10px 0" />
    <view class="album">
      <view class="album__avatar">
        <u-image
          src="/static/logo.png"
          mode="aspectFill"
          width="32"
          height="32"
        />
      </view>
      <view class="album__content">
        <u-text text="uView UI" type="primary" bold size="17" />
        <u-text
          margin="0 0 8px 0"
          text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
        />
        <u-album
          :urls="urls3"
          rowCount="2"
          maxCount="4"
          multipleMode="scaleToFill"
        ></u-album>
      </view>
    </view>

    <u-text text="更改图片大小" type="info" margin="10px 0" />
    <view class="album">
      <view class="album__avatar">
        <u-image
          src="/static/logo.png"
          mode="aspectFill"
          width="32"
          height="32"
        />
      </view>
      <view class="album__content">
        <u-text text="uView UI" type="primary" bold size="17" />
        <u-text
          margin="0 0 8px 0"
          text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
        />
        <u-album
          :urls="urls4"
          rowCount="2"
          maxCount="4"
          multipleSize="50"
        ></u-album>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const albumWidth = ref(0);
  const urls1 = [
      {
        src2: 'https://cdn.uviewui.com/uview/album/1.jpg',
      },
    ],
    urls2 = [
      'https://cdn.uviewui.com/uview/album/1.jpg',
      'https://cdn.uviewui.com/uview/album/2.jpg',
      'https://cdn.uviewui.com/uview/album/3.jpg',
      'https://cdn.uviewui.com/uview/album/4.jpg',
      'https://cdn.uviewui.com/uview/album/5.jpg',
      'https://cdn.uviewui.com/uview/album/6.jpg',
      'https://cdn.uviewui.com/uview/album/7.jpg',
      'https://cdn.uviewui.com/uview/album/8.jpg',
      'https://cdn.uviewui.com/uview/album/9.jpg',
      'https://cdn.uviewui.com/uview/album/10.jpg',
    ],
    urls3 = [
      'https://cdn.uviewui.com/uview/album/5.jpg',
      'https://cdn.uviewui.com/uview/album/6.jpg',
      'https://cdn.uviewui.com/uview/album/7.jpg',
      'https://cdn.uviewui.com/uview/album/8.jpg',
    ],
    urls4 = [
      'https://cdn.uviewui.com/uview/album/7.jpg',
      'https://cdn.uviewui.com/uview/album/8.jpg',
      'https://cdn.uviewui.com/uview/album/9.jpg',
      'https://cdn.uviewui.com/uview/album/10.jpg',
    ];
</script>

<style lang="scss" scoped>
  .album {
    @include flex;
    align-items: flex-start;

    &__avatar {
      background-color: $u-bg-color;
      padding: 5px;
      border-radius: 3px;
    }

    &__content {
      margin-left: 10px;
      flex: 1;
    }
  }
</style>
