<template>
  <view class="_u_px-15px">
    <u-text text="基础使用" type="info" margin="10px 0" />

    <u-form
      label-position="left"
      label-width="80"
      :model="model1"
      :rules="formRules"
      ref="form1"
    >
      <u-form-item label="姓名" prop="userInfo.name" :border-bottom="true">
        <u-input
          v-model="model1.userInfo.name"
          border="none"
          placeholder="姓名,只能为中文"
        />
      </u-form-item>

      <u-form-item
        label="性别"
        prop="userInfo.sex"
        :border-bottom="true"
        @click="
          pickerName = 'sex';
          hideKeyboard();
        "
      >
        <u-input
          v-model="model1.userInfo.sex"
          disabled
          disabled-color="#ffffff"
          placeholder="请选择性别"
          border="none"
        />
        <template #right>
          <u-icon name="arrow-right" />
        </template>
      </u-form-item>

      <u-form-item label="水果" prop="radiovalue1" :border-bottom="true">
        <u-radio-group v-model="model1.radiovalue1" @change="radioGroupChange">
          <u-radio
            :custom-style="{ marginRight: '16px' }"
            v-for="(item, index) in [
              {
                name: '苹果',
                disabled: false,
              },
              {
                name: '香蕉',
                disabled: false,
              },
              {
                name: '毒橙子',
                disabled: false,
              },
            ]"
            :key="index"
            :label="item.name"
            :name="item.name"
          />
        </u-radio-group>
      </u-form-item>

      <u-form-item
        label="兴趣爱好"
        prop="checkboxValue1"
        :border-bottom="true"
        labelWidth="80"
        ref="item3"
      >
        <u-checkbox-group
          v-model="model1.checkboxValue1"
          shape="square"
          @change="checkboxGroupChange"
        >
          <u-checkbox
            :customStyle="{ marginRight: '16px' }"
            v-for="(item, index) in [
              {
                name: '羽毛球',
                disabled: false,
              },
              {
                name: '跑步',
                disabled: false,
              },
              {
                name: '爬山',
                disabled: false,
              },
            ]"
            :key="index"
            :label="item.name"
            :name="item.name"
          />
        </u-checkbox-group>
      </u-form-item>

      <u-form-item label="简介" prop="intro" :border-bottom="true">
        <u-textarea
          placeholder="不低于3个字"
          v-model="model1.intro"
          border="none"
          count
        />
      </u-form-item>

      <u-form-item
        label="住店时间"
        prop="hotel"
        label-width="80"
        :border-bottom="true"
        @click="
          pickerName = 'hotel';
          hideKeyboard();
        "
      >
        <u-input
          v-model="model1.hotel"
          disabled
          disabled-color="#ffffff"
          placeholder="请选择住店和离店时间"
          border="none"
        />
        <template #right>
          <u-icon name="arrow-right" />
        </template>
      </u-form-item>

      <u-form-item
        label="验证码"
        prop="code"
        labelWidth="80"
        :border-bottom="true"
      >
        <u-input
          v-model="model1.code"
          border="none"
          placeholder="请填写验证码"
        />
        <template #right>
          <u-button
            :text="tips || '获取验证码'"
            type="success"
            size="mini"
            :disabled="disabled1"
            @tap="getCode"
          />
        </template>
      </u-form-item>

      <u-form-item
        label="生日"
        prop="userInfo.birthday"
        :border-bottom="true"
        @click="
          pickerName = 'birthday';
          hideKeyboard();
        "
        ref="item1"
      >
        <u-input
          v-model="model1.userInfo.birthday"
          disabled
          disabledColor="#ffffff"
          placeholder="请选择生日"
          border="none"
        />
        <template #right>
          <u-icon name="arrow-right" />
        </template>
      </u-form-item>
    </u-form>

    <u-button
      type="primary"
      text="提交"
      customStyle="margin-top: 15px"
      @click="submit"
    />
    <u-button
      type="error"
      text="重置"
      customStyle="margin-top: 15px"
      @click="reset"
    />

    <u-gap height="30" />

    <u-action-sheet
      :show="pickerName === 'sex'"
      :actions="[
        {
          name: '男',
        },
        {
          name: '女',
        },
        {
          name: '保密',
        },
      ]"
      title="请选择性别"
      description="如果选择保密会报错"
      @close="pickerName = ''"
      @select="sexSelect"
    />

    <u-calendar
      :show="pickerName === 'hotel'"
      mode="range"
      start-text="住店"
      end-text="离店"
      confirm-disabled-text="请选择离店日期"
      :formatter="formatter"
      @confirm="calendarConfirm"
      @close="calendarClose"
    />

    <u-code
      ref="uCode1"
      seconds="20"
      @change="codeChange"
      @start="disabled1 = true"
      @end="disabled1 = false"
    />

    <u-datetime-picker
      :show="pickerName === 'birthday'"
      :value="birthday"
      mode="date"
      closeOnClickOverlay
      @confirm="birthdayConfirm"
      @cancel="pickerName = ''"
      @close="pickerName = ''"
    />
  </view>
</template>

<script setup lang="ts">
  import { onReady } from '@dcloudio/uni-app';
  import { reactive, ref } from 'vue';
  import { Toast, Loading, HideLoading } from '@/utils/uniapi/prompt';

  // #region form && rules
  interface IComponent {
    validateField: Function;
    setRules: Function;
    validate: Function;
    resetFields: Function;
    clearValidate: Function;
  }
  const form1 = ref<IComponent>({} as IComponent);
  const model1 = reactive({
    userInfo: {
      name: '楼兰',
      sex: '',
      birthday: '2022-12-30',
    },
    radiovalue1: '苹果',
    checkboxValue1: [],
    intro: '',
    code: '',
    hotel: '',
  });
  const formRules = {
    'userInfo.name': [
      {
        type: 'string',
        required: true,
        message: '请填写姓名',
        trigger: ['blur', 'change'],
      },
      {
        // 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
        validator: (_rule: any, value: any, _callback: any) => {
          // 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
          return uni.$u.test.chinese(value);
        },
        message: '姓名必须为中文',
        // 触发器可以同时用blur和change，二者之间用英文逗号隔开
        trigger: ['change', 'blur'],
      },
    ],
    code: {
      type: 'string',
      required: true,
      len: 4,
      message: '请填写4位验证码',
      trigger: ['blur', 'change'],
    },
    'userInfo.sex': {
      type: 'string',
      max: 1, // 最大长度为1个字符
      required: true,
      message: '请选择男或女',
      trigger: ['blur', 'change'],
    },
    radiovalue1: {
      type: 'string',
      max: 2, // 最大长度为2个字符
      message: '橙子有毒',
      trigger: ['blur', 'change'],
    },
    checkboxValue1: {
      type: 'array',
      min: 2,
      required: true,
      message: '不能太宅，至少选两项',
      trigger: ['change'],
    },
    intro: {
      type: 'string',
      min: 3,
      required: true,
      message: '不低于3个字',
      trigger: ['change'],
    },
    hotel: {
      type: 'string',
      min: 2,
      required: true,
      message: '请选择住店时间',
      trigger: ['change'],
    },
    'userInfo.birthday': {
      type: 'string',
      required: true,
      message: '请选择生日',
      trigger: ['change', 'blur'],
    },
  };
  // #endregion

  const hideKeyboard = () => {
    uni.hideKeyboard();
  };

  // 用于记录当前显示的 picker 名称
  const pickerName = ref<'sex' | 'hotel' | 'birthday' | ''>('');

  // #region 性别
  const sexSelect = (e: any) => {
    model1.userInfo.sex = e.name;
    form1.value.validateField('userInfo.sex');
  };
  // #endregion

  const radioGroupChange = (e: any) => {
    console.log(e);
    form1.value.validateField('radiovalue1');
  };

  const checkboxGroupChange = (e: any) => {
    console.log(e);
    form1.value.validateField('checkboxValue1');
  };

  // #region 住店日期
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const calendarConfirm = (e: any) => {
    console.log(e);
    pickerName.value = '';
    model1.hotel = `${e[0]} / ${e[e.length - 1]}`;
    form1.value.validateField('hotel');
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const calendarClose = () => {
    pickerName.value = '';
    form1.value.validateField('hotel');
  };
  // #endregion

  // #region 验证码
  interface IUCodeComponent {
    canGetCode: boolean;
    start: Function;
  }
  const uCode1 = ref<IUCodeComponent>({} as IUCodeComponent);
  const tips = ref('');
  const disabled1 = ref(false);
  const getCode = () => {
    if (!uCode1.value) {
      Toast('code 组件实例不存在');
      return;
    }
    if (uCode1.value.canGetCode) {
      // 模拟向后端请求验证码
      Loading('正在获取验证码');
      setTimeout(() => {
        HideLoading();
        // 这里此提示会被this.start()方法中的提示覆盖
        Toast('验证码已发送');
        // 通知验证码组件内部开始倒计时
        uCode1.value.start();
      }, 2000);
    } else {
      Toast('倒计时结束后再发送');
    }
  };
  const codeChange = (text: string) => {
    tips.value = text;
  };
  // #endregion

  // #region 生日日期选择器
  const birthday = ref(Number(new Date(model1.userInfo.birthday)));
  const birthdayConfirm = (e: any) => {
    pickerName.value = '';
    model1.userInfo.birthday = uni.$u.timeFormat(e.value, 'yyyy-mm-dd');
  };
  // #endregion

  onReady(() => {
    // #ifdef MP-WEIXIN
    // 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则
    form1.value.setRules(formRules);
    // #endif
  });

  // const afterRead = event => {
  //   fileList1.value.push({
  //     url: event.file,
  //     status: 'uploading',
  //     message: '上传中',
  //   });
  // };

  const submit = () => {
    // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
    form1.value
      .validate()
      .then((res: any) => {
        console.log(res);
        Toast('校验通过');
      })
      .catch((errors: any) => {
        console.log(errors);
        Toast('校验失败');
      });
  };
  const reset = () => {
    form1.value.resetFields(); // 重置所有字段值
    form1.value.clearValidate(); // 清除所有验证状态
  };
</script>
