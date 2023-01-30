<template>
  <view class="uno-px-15px">
    <u-text text="基础功能" type="info" margin="10px 0"></u-text>
    <view>
      <u-code
        ref="uCode0"
        @change="codeChange"
        seconds="20"
        change-text="XS获取"
        @start="disabled1 = true"
        @end="disabled1 = false"
      />
      <u-button @tap="getCode" :text="tips" type="success" size="small" :disabled="disabled1" />
    </view>

    <u-text
      text="保持倒计时(开始后，左上角返退出此页面再进入，会发现倒计时还在继续)"
      type="info"
      margin="10px 0"
    ></u-text>
    <view>
      <u-code
        ref="uCode1"
        @change="codeChange1"
        keep-running
        change-text="倒计时XS"
        @start="disabled2 = true"
        @end="disabled2 = false"
      />
      <u-button type="primary" @tap="getCode1" :text="tips1" size="small" :disabled="disabled2" />
    </view>

    <u-text text="文本样式" type="info" margin="10px 0"></u-text>
    <view>
      <u-code ref="uCode2" @change="codeChange2" keep-running start-text="点我获取验证码" />
      <u-text @click="getCode2" :text="tips2" />
    </view>
  </view>
</template>

<script setup lang="ts">
  import { HideLoading, Loading, Toast } from '@/utils/uniapi/prompt';
  import { ref } from 'vue';

  const tips = ref('');
  const tips1 = ref('');
  const tips2 = ref('');
  const disabled1 = ref(false);
  const disabled2 = ref(false);

  const codeChange = (text: string) => {
    tips.value = text;
  };
  const codeChange1 = (text: string) => {
    tips1.value = text;
  };
  const codeChange2 = (text: string) => {
    tips2.value = text;
  };

  interface IComponent {
    canGetCode: boolean;
    start: Function;
  }
  const uCode0 = ref<IComponent>({} as IComponent);
  const getCode = () => {
    if (uCode0.value.canGetCode) {
      // 模拟向后端请求验证码
      Loading('正在获取验证码');
      setTimeout(() => {
        HideLoading();
        // 这里此提示会被this.start()方法中的提示覆盖
        Toast('验证码已发送');
        // 通知验证码组件内部开始倒计时
        uCode0.value.start();
      }, 2000);
    } else {
      Toast('倒计时结束后再发送');
    }
  };
  const uCode1 = ref<IComponent>({} as IComponent);
  const getCode1 = () => {
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
  const uCode2 = ref<IComponent>({} as IComponent);
  const getCode2 = () => {
    if (uCode2.value.canGetCode) {
      // 模拟向后端请求验证码
      Loading('正在获取验证码');
      setTimeout(() => {
        HideLoading();
        // 这里此提示会被this.start()方法中的提示覆盖
        Toast('验证码已发送');
        // 通知验证码组件内部开始倒计时
        uCode2.value.start();
      }, 2000);
    } else {
      Toast('倒计时结束后再发送');
    }
  };

  // 注意这里不能将一个组件赋值给data的一个变量，否则在微信小程序会
  // 造成循环引用而报错，如果你想这样做，请在onReady或者onLoad生命周期中定义，如下
  // refCode = uCode0;
</script>
