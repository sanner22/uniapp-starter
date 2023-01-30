<template>
  <view class="uno-px-15px">
    <u-text text="基础功能" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <u-tag text="标签" plain size="mini" type="warning" />
    </view>

    <u-text text="自定义主题" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <u-tag text="标签" />
      <u-tag text="标签" type="warning" />
      <u-tag text="标签" type="success" />
      <u-tag text="标签" type="error" />
    </view>

    <u-text text="圆形标签" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <u-tag text="标签" plain shape="circle" />
      <u-tag text="标签" type="warning" shape="circle" />
    </view>

    <u-text text="镂空标签" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <u-tag text="标签" plain />
      <u-tag text="标签" type="warning" plain />
      <u-tag text="标签" type="success" plain />
      <u-tag text="标签" type="error" plain />
    </view>

    <u-text text="镂空带背景色" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <u-tag text="标签" plain plainFill />
      <u-tag text="标签" type="warning" plain plainFill />
      <u-tag text="标签" type="success" plain plainFill />
      <u-tag text="标签" type="error" plain plainFill />
    </view>

    <u-text text="自定义尺寸" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <u-tag text="标签" plain size="mini" />
      <u-tag text="标签" type="warning" />
      <u-tag text="标签" type="success" plain size="large" />
    </view>

    <u-text text="可关闭标签" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <u-tag text="标签" size="mini" closable :show="close1" @close="close1 = false" />
      <u-tag text="标签" type="warning" closable :show="close2" @close="close2 = false" />
      <u-tag text="标签" type="success" plain size="large" closable :show="close3" @close="close3 = false" />
    </view>

    <u-text text="带图片和图标" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <u-tag text="标签" size="mini" icon="map" plain />
      <u-tag text="标签" type="warning" icon="tags-fill" />
      <u-tag text="标签" type="success" plain size="large" icon="https://cdn.uviewui.com/uview/example/tag.png" />
    </view>

    <u-text text="单选标签" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <view class="u-page__tag-item" v-for="(item, index) in radios" :key="index">
        <u-tag :text="`选项${index + 1}`" :plain="!item.checked" type="warning" :name="index" @click="radioClick" />
      </view>
    </view>

    <u-text text="多选标签" type="info" margin="10px 0"></u-text>
    <view class="uno-flex uno-flex-wrap uno-gap-15px">
      <view class="u-page__tag-item" v-for="(item, index) in checkboxs" :key="index">
        <u-tag :text="`选项${index + 1}`" :plain="!item.checked" type="warning" :name="index" @click="checkboxClick">
        </u-tag>
      </view>
    </view>

    <u-gap height="60"></u-gap>
  </view>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const close1 = ref(true);
  const close2 = ref(true);
  const close3 = ref(true);
  const radios = reactive([
    {
      checked: true,
    },
    {
      checked: false,
    },
    {
      checked: false,
    },
  ]);
  const checkboxs = reactive([
    {
      checked: true,
    },
    {
      checked: false,
    },
    {
      checked: false,
    },
  ]);
  const radioClick = (name: number) => {
    radios.map((item, index) => {
      item.checked = index === name ? true : false;
    });
  };
  const checkboxClick = (name: number) => {
    checkboxs[name].checked = !checkboxs[name].checked;
  };
</script>

<style lang="scss">
  .u-page__tag-item {
    margin-right: 20px;
  }

  .u-demo-block__content {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
