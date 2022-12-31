<template>
  <view>
    <u-cell-group>
      <u-cell
        :titleStyle="{ fontWeight: 500 }"
        @click="openKeyboard(index)"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        isLink
      >
        <template #icon>
          <u-image :src="item.iconUrl" mode="widthFix" width="16" height="16" />
        </template>
      </u-cell>
    </u-cell-group>

    <u-keyboard
      :mode="keyData.mode"
      :dotDisabled="keyData.dotDisabled"
      :random="keyData.random"
      :show="show"
      @close="close"
      @cancel="cancel"
      @confirm="confirm"
      @change="change"
      @backspace="backspace"
    />
  </view>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const input = ref('');
  let keyData = reactive({
    mode: '',
    dotDisabled: false,
    random: false,
  });
  const list = ref([
    {
      title: '车牌号键盘',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/keyboard/car.png',
    },
    {
      title: '数字键盘',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/keyboard/number.png',
    },
    {
      title: '身份证键盘',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/keyboard/IdCard.png',
    },
    {
      title: '隐藏键盘"."符号',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/keyboard/dot.png',
    },
    {
      title: '打乱键盘按键的顺序',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/keyboard/order.png',
    },
  ]);
  const show = ref(false);

  // 点击展示不同的键盘
  const openKeyboard = (indexNum: number) => {
    keyData = {
      mode: '',
      dotDisabled: false,
      random: false,
    };
    if (indexNum == 0) {
      keyData.mode = '';
    } else if (indexNum == 1) {
      keyData.mode = 'number';
    } else if (indexNum == 2) {
      keyData.mode = 'card';
    } else if (indexNum == 3) {
      keyData.mode = 'number';
      keyData.dotDisabled = true;
    } else if (indexNum == 4) {
      keyData.mode = 'number';
      keyData.random = true;
    }
    input.value = '';
    show.value = true;
  };
  const change = (e: number) => {
    // console.log('change');
    input.value += e;
  };
  const close = () => {
    // console.log('close');
    show.value = false;
  };
  const cancel = () => {
    // console.log('cancel');
    show.value = false;
  };
  const confirm = () => {
    // console.log('confirm');
    show.value = false;
  };
  const backspace = () => {
    input.value = input.value.slice(0, -1);
  };
</script>
