<template>
  <view class="uno-px-15px">
    <u-text text="基本案例：苹果、香蕉和橙子哪个最甜？" type="info" margin="10px 0" />
    <u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
      <u-checkbox
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in checkboxList1"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-checkbox-group>

    <u-text text="自定义形状：中国四大名著是？" type="info" margin="10px 0" />
    <u-checkbox-group v-model="checkboxValue2" placement="column" @change="checkboxChange" shape="square">
      <u-checkbox
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in checkboxList2"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-checkbox-group>

    <u-text text="是否禁用：下面什么东西不能吃？" type="info" margin="10px 0" />
    <u-checkbox-group v-model="checkboxValue3" placement="column" @change="checkboxChange">
      <u-checkbox
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in checkboxList3"
        :key="index"
        :label="item.name"
        :name="item.name"
        :disabled="index === 0"
      />
    </u-checkbox-group>

    <u-text text="是否禁止点击提示语选中复选框：北宋四大家是谁？" type="info" margin="10px 0" />
    <u-checkbox-group v-model="checkboxValue4" placement="column" @change="checkboxChange" :labelDisabled="true">
      <u-checkbox
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in checkboxList4"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-checkbox-group>

    <u-text text="自定义颜色：哪个颜色最好看？" type="info" margin="10px 0" />
    <u-checkbox-group v-model="checkboxValue5" placement="column" @change="checkboxChange" activeColor="#19be6b">
      <u-checkbox
        :customStyle="{ marginBottom: '8px' }"
        v-for="(item, index) in checkboxList5"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-checkbox-group>

    <u-text text="横向排列形式：什么东西不能飞？" type="info" margin="10px 0" />
    <u-checkbox-group v-model="checkboxValue6" @change="checkboxChange">
      <u-checkbox
        :customStyle="{ marginRight: '16px' }"
        v-for="(item, index) in checkboxList6"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-checkbox-group>

    <u-text text="横向两端排列形式：什么东西不能吃？" type="info" margin="10px 0" />
    <u-checkbox-group
      v-model="checkboxValue7"
      @change="checkboxChange"
      :border-bottom="true"
      placement="column"
      iconPlacement="right"
    >
      <u-checkbox
        :customStyle="{ marginBottom: '16px' }"
        v-for="(item, index) in checkboxList7"
        :key="index"
        :label="item.name"
        :name="item.name"
      />
    </u-checkbox-group>

    <u-gap height="30" />
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // 基本案列数据
  const checkboxList1 = [
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
  ];
  // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
  const checkboxValue1 = ref(['苹果', '橙子']);

  // 自定义形状数据
  const checkboxList2 = [
    {
      name: '西游记',
      disabled: false,
    },
    {
      name: '红楼梦',
      disabled: false,
    },
    {
      name: '三国演义',
      disabled: false,
    },
    {
      name: '水浒传',
      disabled: false,
    },
  ];
  // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
  const checkboxValue2 = ref(['西游记', '红楼梦', '三国演义', '水浒传']);

  // 是否禁用数据
  const checkboxList3 = [
    {
      name: '冬瓜',
      disabled: false,
    },
    {
      name: '西瓜',
      disabled: false,
    },
    {
      name: '黄瓜',
      disabled: false,
    },
    {
      name: '傻瓜',
      disabled: false,
    },
  ];
  // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
  const checkboxValue3 = ref(['傻瓜']);

  // 是否禁止点击提示语选中复选框数据
  const checkboxList4 = [
    {
      name: '黄庭坚',
      disabled: false,
    },
    {
      name: '欧阳修',
      disabled: false,
    },
    {
      name: '苏小宝',
      disabled: false,
    },
    {
      name: '王安石',
      disabled: false,
    },
  ];
  // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
  const checkboxValue4 = ref(['黄庭坚', '欧阳修', '王安石']);

  //自定义颜色数据
  const checkboxList5 = [
    {
      name: '红色',
      disabled: false,
    },
    {
      name: '黄色',
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
  ];
  // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
  const checkboxValue5 = ref(['绿色']);

  //横向排列形式数据
  const checkboxList6 = [
    {
      name: '小鸟',
      disabled: false,
    },
    {
      name: '游艇',
      disabled: false,
    },
    {
      name: '轮船',
      disabled: false,
    },
    {
      name: '飞机',
      disabled: false,
    },
  ];
  // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
  const checkboxValue6 = ref(['游艇', '轮船']);

  //横向两端排列形式
  const checkboxList7 = [
    {
      name: '汽车',
      disabled: false,
    },
    {
      name: '蒸汽机',
      disabled: false,
    },
    {
      name: '猪肉',
      disabled: false,
    },
    {
      name: '抄手',
      disabled: false,
    },
  ];
  // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
  const checkboxValue7 = ref(['汽车', '蒸汽机']);

  const checkboxChange = (n: any) => {
    console.log('change', n);
  };
</script>
