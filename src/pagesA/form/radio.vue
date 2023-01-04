<template>
  <view class="_u_px-15px">
    <u-text
      text="基本案例：苹果、香蕉和橙子哪个最甜？"
      type="info"
      margin="10px 0"
    />
    <u-radio-group
      v-model="radiovalue1"
      placement="column"
      @change="groupChange"
    >
      <u-radio
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in radiolist1"
        :key="index"
        :label="item.name"
        :name="item.name"
        @change="radioChange"
      />
    </u-radio-group>

    <u-text text="自定义形状：王者荣耀谁最帅？" type="info" margin="10px 0" />
    <u-radio-group v-model="radiovalue2" placement="column" shape="square">
      <u-radio
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in radiolist2"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-radio-group>

    <u-text
      text="是否禁用：苹果、香蕉和菠萝哪个最甜？"
      type="info"
      margin="10px 0"
    />
    <u-radio-group v-model="radiovalue3" placement="column">
      <u-radio
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in radiolist3"
        :key="index"
        :label="item.name"
        :name="item.name"
        :disabled="!index"
      />
    </u-radio-group>

    <u-text
      text="纵向排列：狙击枪用哪个倍镜最好？"
      type="info"
      margin="10px 0"
    />
    <u-radio-group
      v-model="radiovalue4"
      placement="column"
      :labelDisabled="true"
    >
      <u-radio
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in radiolist4"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-radio-group>

    <u-text
      text="自定义颜色：你比较喜欢下面哪个颜色？"
      type="info"
      margin="10px 0"
    />
    <u-radio-group
      v-model="radiovalue5"
      placement="column"
      activeColor="#19be6b"
    >
      <u-radio
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in radiolist5"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-radio-group>

    <u-text
      text="横向排列形式：王者荣耀哪个英雄最美？"
      type="info"
      margin="10px 0"
    />
    <u-radio-group v-model="radiovalue6" placement="row">
      <u-radio
        :customStyle="{ marginRight: '16px' }"
        v-for="(item, index) in radiolist6"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-radio-group>

    <u-text
      text="横向两端排列形式：你觉得阿木木可爱吗？"
      type="info"
      margin="10px 0"
    />
    <u-radio-group
      v-model="radiovalue7"
      :border-bottom="true"
      placement="column"
      iconPlacement="right"
    >
      <u-radio
        :customStyle="{ marginBottom: '16px' }"
        v-for="(item, index) in radiolist7"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-radio-group>

    <u-gap height="30" />
  </view>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';

  // 基本案列数据
  const radiolist1 = [
    {
      name: '苹果',
      disabled: false,
    },
    {
      name: '香蕉',
      disabled: false,
    },
    {
      name: '橙子',
      disabled: false,
    },
    {
      name: '榴莲',
      disabled: false,
    },
  ];
  // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
  const radiovalue1 = ref('苹果');

  // 自定义形状数据
  const radiolist2 = [
    {
      name: '李白',
      disabled: false,
    },
    {
      name: '韩信',
      disabled: false,
    },
    {
      name: '马可波罗',
      disabled: false,
    },
    {
      name: '百里守约',
      disabled: false,
    },
  ];
  // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
  const radiovalue2 = ref('李白');

  // 是否禁用数据
  const radiolist3 = [
    {
      name: '苹果',
      disabled: false,
    },
    {
      name: '香蕉',
      disabled: false,
    },
    {
      name: '菠萝',
      disabled: false,
    },
  ];
  // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
  const radiovalue3 = ref('苹果');

  // 是否禁止点击提示语选中单选框数据
  const radiolist4 = [
    {
      name: '3倍镜',
      disabled: false,
    },
    {
      name: '4倍镜',
      disabled: false,
    },
    {
      name: '6倍镜',
      disabled: false,
    },
    {
      name: '8倍镜',
      disabled: false,
    },
  ];
  // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
  const radiovalue4 = ref('6倍镜');

  //自定义颜色数据
  const radiolist5 = [
    {
      name: '红色',
      disabled: false,
    },
    {
      name: '绿色',
      disabled: false,
    },
    {
      name: '蓝色',
      disabled: false,
    },
    {
      name: '黄色',
      disabled: false,
    },
  ];
  // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
  const radiovalue5 = ref('绿色');

  //横向排列形式数据
  const radiolist6 = [
    {
      name: '妲己',
      disabled: false,
    },
    {
      name: '虞姬',
      disabled: false,
    },
    {
      name: '不知火舞',
      disabled: false,
    },
  ];
  // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
  const radiovalue6 = ref('妲己');

  //横向两端排列形式数据
  const radiolist7 = [
    {
      name: '可爱',
      disabled: false,
    },
    {
      name: '一般',
      disabled: false,
    },
    {
      name: '不可爱',
      disabled: false,
    },
  ];
  // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
  const radiovalue7 = ref('可爱');

  watch(
    () => radiovalue1.value,
    (newVal, oldVal) => {
      console.log('v-model', { newVal, oldVal });
    },
  );

  const groupChange = (n: string) => {
    console.log('groupChange', n);
  };
  const radioChange = (n: string) => {
    console.log('radioChange', n);
  };
</script>
