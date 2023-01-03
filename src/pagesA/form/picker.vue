<template>
  <view>
    <u-cell-group>
      <u-cell
        @click="showPicker(index + 1)"
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

    <u-picker
      :show="pickerName === 'show1'"
      :columns="columns1"
      @change="change"
      @cancel="cancel"
      @confirm="confirm"
    />

    <u-picker
      :show="pickerName === 'show2'"
      :columns="columns2"
      :defaultIndex="[1]"
      @cancel="cancel"
      @confirm="confirm"
      @change="change"
    />

    <u-picker
      :show="pickerName === 'show3'"
      :columns="columns3"
      ref="uPicker3"
      @cancel="cancel"
      @confirm="confirm"
      @change="changeHandler1"
    />

    <u-picker
      :show="pickerName === 'show4'"
      :columns="columns4"
      @cancel="cancel"
      @confirm="confirm"
      :loading="loading"
      @change="changeHandler2"
      ref="uPicker4"
    />

    <u-picker
      :show="pickerName === 'show5'"
      :columns="columns5"
      title="标题太长就会显示省略号"
      @cancel="cancel"
      @confirm="confirm"
      @change="change"
    />

    <u-picker
      :show="pickerName === 'show6'"
      :columns="columns6"
      closeOnClickOverlay
      @cancel="cancel"
      @confirm="confirm"
      @close="close"
      @change="change"
    />
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const list = [
    {
      title: '基础使用',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/picker/2.png',
    },
    {
      title: '设置默认项',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/picker/5.png',
    },
    {
      title: '多列联动',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/picker/1.png',
    },
    {
      title: '加载中状态(切换第一列)',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/picker/3.png',
    },
    {
      title: '设置标题',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/picker/4.png',
    },
    {
      title: '允许点击遮罩关闭',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/picker/6.png',
    },
  ];
  const columnData = [
    ['深圳', '厦门', '上海', '拉萨'],
    ['得州', '华盛顿', '纽约', '阿拉斯加'],
  ];
  const columns1 = [['中国', '美国', '日本']];
  const columns2 = [['中国', '美国', '日本']];
  const columns3 = [
    ['中国', '美国'],
    ['深圳', '厦门', '上海', '拉萨'],
  ];
  const columns4 = [
    ['中国', '美国'],
    ['深圳', '厦门', '上海', '拉萨'],
  ];
  const columns5 = [['中国', '美国', '日本']];
  const columns6 = [['中国', '美国', '日本']];

  const loading = ref(false);
  const pickerName = ref('');

  const uPicker3 = ref(null);
  const changeHandler1 = (e: any) => {
    change(e);
    // 微信小程序无法将picker实例传出来，只能通过ref操作
    const picker = uPicker3.value as any;
    const { columnIndex, index } = e;
    if (columnIndex === 0) {
      picker.setColumnValues(1, columnData[index]);
    }
  };

  const uPicker4 = ref(null);
  const changeHandler2 = (e: any) => {
    change(e);
    // 微信小程序无法将picker实例传出来，只能通过ref操作
    const picker = uPicker4.value as any;
    const { columnIndex, index } = e;
    if (columnIndex === 0) {
      loading.value = true;
      uni.$u.sleep(1500).then(() => {
        picker.setColumnValues(1, columnData[index]);
        loading.value = false;
      });
    }
  };

  const showPicker = (i: number) => {
    pickerName.value = `show${i}`;
  };
  const change = (e: any) => {
    console.log('change', e);
  };
  const close = () => {
    pickerName.value = ``;
  };
  const confirm = (e: any) => {
    console.log('confirm', e);
    pickerName.value = ``;
  };
  const cancel = () => {
    pickerName.value = ``;
  };
</script>
