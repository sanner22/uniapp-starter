<template>
  <view class="_u_px-15px">
    <u-text text="基础使用" type="info" margin="10px 0" />
    <view class="_u_flex _u_flex-col _u_gap-15px">
      <u-input
        placeholder="请输入内容"
        border="surround"
        v-model="value"
        @change="change"
      />
    </view>

    <u-text text="可清空内容" type="info" margin="10px 0" />
    <view class="_u_flex _u_flex-col _u_gap-15px">
      <u-input placeholder="请输入内容" border="surround" clearable />
    </view>

    <u-text text="数字键盘" type="info" margin="10px 0" />
    <view class="_u_flex _u_flex-col _u_gap-15px">
      <u-input
        placeholder="请输入内容"
        border="surround"
        type="number"
        clearable
      />
    </view>

    <u-text text="密码类型" type="info" margin="10px 0" />
    <view class="_u_flex _u_flex-col _u_gap-15px">
      <u-input placeholder="请输入内容" border="surround" password clearable />
    </view>

    <u-text text="显示下划线" type="info" margin="10px 0" />
    <view class="_u_flex _u_flex-col _u_gap-15px">
      <u-input placeholder="请输入内容" border="bottom" clearable />
    </view>

    <u-text text="禁用状态" type="info" margin="10px 0" />
    <view class="_u_flex _u_flex-col _u_gap-15px">
      <u-input placeholder="禁用状态" border="surround" disabled />
    </view>

    <u-text text="圆形" type="info" margin="10px 0" />
    <view class="_u_flex _u_flex-col _u_gap-15px">
      <u-input placeholder="请输入内容" border="surround" shape="circle" />
    </view>

    <u-text text="前后图标" type="info" margin="10px 0" />
    <view class="_u_flex _u_flex-col _u_gap-15px">
      <u-input
        placeholder="前置图标"
        prefixIcon="search"
        prefixIconStyle="font-size: 22px;color: #909399"
      />
      <u-input
        placeholder="后置图标"
        suffixIcon="map-fill"
        suffixIconStyle="color: #909399"
      />
    </view>

    <u-text text="前后插槽" type="info" margin="10px 0" />
    <view class="_u_flex _u_flex-col _u_gap-15px">
      <!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
      <!-- #ifndef APP-NVUE -->
      <u-input placeholder="前置插槽">
        <!-- #endif -->
        <!-- #ifdef APP-NVUE -->
        <u-input placeholder="前置插槽">
          <!-- #endif -->
          <template #prefix>
            <u-text text="http://" margin="0 3px 0 0" type="tips" />
          </template>
          <!-- #ifndef APP-NVUE -->
        </u-input>
        <!-- #endif -->
        <!-- #ifdef APP-NVUE -->
      </u-input>
      <!-- #endif -->

      <!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
      <!-- #ifndef APP-NVUE -->
      <u-input placeholder="后置插槽">
        <!-- #endif -->
        <!-- #ifdef APP-NVUE -->
        <u-input placeholder="后置插槽">
          <!-- #endif -->
          <template v-slot:suffix>
            <u-code
              ref="uCode0"
              @change="codeChange"
              seconds="20"
              changeText="X秒重新获取哈哈哈"
            />
            <u-button
              @click="getCode"
              :text="tips"
              type="success"
              size="mini"
            />
          </template>
          <!-- #ifndef APP-NVUE -->
        </u-input>
        <!-- #endif -->
        <!-- #ifdef APP-NVUE -->
      </u-input>
      <!-- #endif -->

      <u-gap height="30" />
    </view>
  </view>
</template>

<script setup lang="ts">
  import { HideLoading, Loading, Toast } from '@/utils/uniapi/prompt';
  import { ref } from 'vue';

  const tips = ref('');
  const value = ref('');

  const codeChange = (text: string) => {
    tips.value = text;
  };

  interface IUCodeComponent {
    canGetCode: boolean;
    start: Function;
  }
  const uCode0 = ref<IUCodeComponent>({} as IUCodeComponent);
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
  const change = (e: any) => {
    console.log('change', e);
  };
</script>
