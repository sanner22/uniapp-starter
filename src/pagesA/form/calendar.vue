<template>
  <view>
    <u-cell-group>
      <u-cell
        @click="showCalendar(index + 1)"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        :label="values[index]"
        isLink
      >
        <template #icon>
          <t-image :src="item.iconUrl" mode="widthFix" />
        </template>
      </u-cell>
    </u-cell-group>

    <u-calendar
      :show="pickerName === 'show1'"
      defaultDate="2022-02-15"
      @confirm="confirm"
      @close="close"
    />

    <u-calendar
      :show="pickerName === 'show2'"
      mode="multiple"
      :defaultDate="['2022-03-01']"
      @confirm="confirm"
      @close="close"
    />

    <u-calendar
      :show="pickerName === 'show3'"
      mode="range"
      @confirm="confirm"
      @close="close"
    />

    <u-calendar
      :show="pickerName === 'show4'"
      mode="range"
      @confirm="confirm"
      @close="close"
      color="#f56c6c"
      :defaultDate="customThemeDefaultDate"
    />

    <u-calendar
      :show="pickerName === 'show5'"
      mode="range"
      @confirm="confirm"
      @close="close"
      :defaultDate="customTextDefaultDate"
      startText="住店"
      endText="离店"
      confirmDisabledText="请选择离店日期"
      :formatter="formatter"
    />

    <u-calendar
      :show="pickerName === 'show6'"
      @confirm="confirm"
      @close="close"
      :maxDate="maxDate"
    />

    <u-calendar
      :show="pickerName === 'show7'"
      @confirm="confirm"
      @close="close"
      showLunar
    />

    <u-calendar
      :show="pickerName === 'show8'"
      @confirm="confirm"
      @close="close"
      mode="multiple"
      :defaultDate="defaultDateMultiple"
    />
  </view>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const index = ref(0);
  const values = ref(['', '', '', '', '', '', '', '']);
  const pickerName = ref(''); // 定义需要显示的 calendar 名称

  const d = new Date();
  const year = d.getFullYear();
  let month: string | number = d.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  const date = d.getDate();
  const customThemeDefaultDate = ref([
    `${year}-${month}-${date}`,
    `${year}-${month}-${date + 5}`,
  ]);
  const customTextDefaultDate = [`${year}-${month}-${date}`];
  const maxDate = `${year}-${month}-${date + 10}`;
  const defaultDateMultiple = ref([
    `${year}-${month}-${date}`,
    `${year}-${month}-${date + 1}`,
    `${year}-${month}-${date + 2}`,
  ]);
  const list = ref([
    {
      title: '单个日期',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/calendar/7.png',
    },
    {
      title: '多个日期',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/calendar/8.png',
    },
    {
      title: '日期范围',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/calendar/9.png',
    },
    {
      title: '自定义主题颜色',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/calendar/15.png',
    },
    {
      title: '自定义文案',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/calendar/14.png',
    },
    {
      title: '日期最大范围',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/calendar/13.png',
    },
    {
      title: '显示农历',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/calendar/5.png',
    },
    {
      title: '默认日期',
      iconUrl: 'https://cdn.uviewui.com/uview/demo/calendar/10.png',
    },
  ]);

  const showCalendar = (i: number) => {
    index.value = i;
    pickerName.value = `show${i}`;
  };

  const confirm = (e: any) => {
    console.log(e);
    pickerName.value = '';
    switch (index.value - 1) {
      case 0:
        values.value[index.value - 1] = e[0];
        break;
      case 1:
        e.forEach((value: string, i: number) => {
          i === 0
            ? (values.value[index.value - 1] = value)
            : (values.value[index.value - 1] += ';' + value);
        });
        break;
      case 2:
        values.value[index.value - 1] = e[0] + '~' + e[e.length - 1];
        break;
      case 3:
        values.value[index.value - 1] = e[0] + '~' + e[e.length - 1];
        break;
      case 4:
        values.value[index.value - 1] = e[0] + '~' + e[e.length - 1];
        break;
      case 5:
        values.value[index.value - 1] = e[0];
        break;
      case 6:
        values.value[index.value - 1] = e[0];
        break;
      case 7:
        e.forEach((value: string, i: number) => {
          i === 0
            ? (values.value[index.value - 1] = value)
            : (values.value[index.value - 1] += ';' + value);
        });
        break;
    }
  };

  const close = () => {
    pickerName.value = '';
  };

  const formatter = (day: any) => {
    const d = new Date();
    let month = d.getMonth() + 1;
    const date = d.getDate();
    if (day.month == month && day.day == date + 3) {
      day.bottomInfo = '有优惠';
      day.dot = true;
    }
    return day;
  };
</script>
