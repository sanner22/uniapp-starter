<template>
  <view class="_u_h-1200px _u_px-15px">
    <u-text
      type="info"
      margin="10px 0"
      text="自定义backTop(滚动页面即可在右下角看到图标)"
    />
    <view class="_u_mt-10px">
      <u-checkbox-group
        placement="column"
        shape="square"
        @change="checkboxChange"
        v-model="value1"
      >
        <u-checkbox
          :customStyle="{ marginBottom: '8px' }"
          v-for="(item, index) in checkboxList"
          :key="index"
          :label="item.name"
          :name="item.name"
        />
      </u-checkbox-group>
    </view>

    <u-back-top
      :right="backTopData.right"
      :customStyle="backTopData.customStyle"
      :bottom="backTopData.bottom"
      :icon="backTopData.icon"
      :mode="backTopData.mode"
      :iconStyle="backTopData.iconStyle"
      :duration="backTopData.duration"
      :scrollTop="scrollTop"
      @click="click"
    ></u-back-top>
  </view>
</template>

<script setup lang="ts">
  import { onLoad, onPageScroll } from '@dcloudio/uni-app';
  import { reactive, ref } from 'vue';

  const value1 = ref(['自定义图标']);
  const backTopData = reactive({
    mode: 'circle',
    icon: 'arrow-upward',
    bottom: 100,
    customStyle: {},
    iconStyle: {},
    right: 20,
    duration: 300,
  });
  const scrollTop = ref(0);
  // 被自定义的样式
  const checkboxList = ref([
    {
      name: '显示方形',
    },
    {
      name: '自定义图标',
    },
    {
      name: '自定义距离',
    },
    {
      name: '自定义样式',
    },
    {
      name: '自定义返回顶部滚动时间',
    },
  ]);

  const checkboxChange = (n: string[]) => {
    if (n.includes('显示方形')) {
      backTopData.mode = 'square';
    } else {
      backTopData.mode = 'circle';
    }
    if (n.includes('自定义图标')) {
      backTopData.icon = 'arrow-up';
    } else {
      backTopData.icon = 'arrow-upward';
    }
    if (n.includes('自定义距离')) {
      backTopData.bottom = 300;
      backTopData.right = 20;
    } else {
      backTopData.bottom = 100;
    }
    if (n.includes('自定义样式')) {
      backTopData.customStyle = {
        backgroundColor: '#2979ff',
      };
      backTopData.iconStyle = {
        color: '#ffffff',
      };
    } else {
      backTopData.customStyle = {};
      backTopData.iconStyle = {};
    }
    if (n.includes('自定义返回顶部滚动时间')) {
      backTopData.duration = 1500;
    } else {
      backTopData.duration = 300;
    }
  };
  const click = () => {
    console.log('click');
  };

  onLoad(() => {
    // 演示中默认勾选了自定义图标
    backTopData.icon = 'arrow-up';
  });
  onPageScroll(e => {
    console.log(e);
    scrollTop.value = e.scrollTop;
  });
</script>

<style lang="scss" scoped></style>
