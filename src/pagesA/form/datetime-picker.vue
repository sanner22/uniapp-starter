<template>
  <view>
    <u-cell-group>
      <u-cell
        @click="showDatetimePicker(index + 1)"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        :icon="item.iconUrl"
        is-link
      />
    </u-cell-group>

    <u-datetime-picker
      :show="pickerName === 'show1'"
      v-model="value1"
      mode="datetime"
      closeOnClickOverlay
      @confirm="confirm"
      @cancel="cancel"
      @change="change"
      @close="close"
    />

    <u-datetime-picker
      :show="pickerName === 'show2'"
      v-model="value2"
      mode="date"
      closeOnClickOverlay
      @confirm="confirm"
      @cancel="cancel"
      @change="change"
      @close="close"
    />

    <u-datetime-picker
      :show="pickerName === 'show3'"
      v-model="value3"
      mode="year-month"
      closeOnClickOverlay
      @confirm="confirm"
      @cancel="cancel"
      @change="change"
      @close="close"
    />

    <u-datetime-picker
      :show="pickerName === 'show4'"
      v-model="value4"
      mode="time"
      closeOnClickOverlay
      @confirm="confirm"
      @cancel="cancel"
      @change="change"
      @close="close"
    />

    <u-datetime-picker
      :show="pickerName === 'show5'"
      v-model="value5"
      :filter="filter"
      mode="date"
      closeOnClickOverlay
      @confirm="confirm"
      @cancel="cancel"
      @change="change"
      @close="close"
    />

    <u-datetime-picker
      :show="pickerName === 'show6'"
      v-model="value6"
      mode="date"
      :formatter="formatter"
      closeOnClickOverlay
      @confirm="confirm"
      @cancel="cancel"
      @change="change"
      @close="close"
    />

    <u-datetime-picker
      :show="pickerName === 'show7'"
      v-model="value7"
      mode="datetime"
      :minDate="1587524800000"
      :maxDate="1786778555000"
      closeOnClickOverlay
      @confirm="confirm"
      @cancel="cancel"
      @change="change"
      @close="close"
    />
  </view>
</template>

<script setup lang="ts">
  import { Toast } from '@/utils/uniapi/prompt';
  import { ref } from 'vue';

  const list = [
    {
      title: '完整日期时间',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/6.png',
    },
    {
      title: '年月日',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/4.png',
    },
    {
      title: '年月',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/3.png',
    },
    {
      title: '时间',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/5.png',
    },
    {
      title: '过滤器(保留偶数年)',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/2.png',
    },
    {
      title: '格式化',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/1.png',
    },
    {
      title: '限制最大最小值',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/7.png',
    },
  ];

  const pickerName = ref('');
  const value1 = ref(Number(new Date()));
  const value2 = ref(Number(new Date()));
  const value3 = ref(Number(new Date()));
  const value4 = ref('05:28');
  const value5 = ref(Number(new Date()));
  const value6 = ref(Number(new Date()));
  const value7 = ref(Number(new Date()));

  const showDatetimePicker = (index: number) => {
    pickerName.value = `show${index}`;
  };

  const close = () => {
    pickerName.value = '';
  };
  const cancel = () => {
    pickerName.value = '';
  };
  const confirm = (e: { value: any; mode: any }) => {
    pickerName.value = '';
    result(e.value, e.mode);
  };
  const change = (e: any) => {
    console.log('change', e);
  };
  const filter = (mode: string, options: any[]) => {
    if (mode === 'year') {
      return options.filter((option: number) => option % 2 === 0);
    }

    return options;
  };

  const result = (time: any, mode: any) => {
    const timeFormat = uni.$u.timeFormat;
    switch (mode) {
      case 'datetime':
        return Toast(timeFormat(time, 'yyyy-mm-dd hh:MM'));
      case 'date':
        return Toast(timeFormat(time, 'yyyy-mm-dd'));
      case 'year-month':
        return Toast(timeFormat(time, 'yyyy-mm'));
      case 'time':
        return Toast(time);
      default:
        return '';
    }
  };
  const formatter = (type: string, value: any) => {
    if (type === 'year') {
      return `${value}年`;
    }
    if (type === 'month') {
      return `${value}月`;
    }
    if (type === 'day') {
      return `${value}日`;
    }
    return value;
  };
</script>
