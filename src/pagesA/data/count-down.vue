<template>
  <view class="_u_px-15px">
    <u-text text="基础用法" type="info" margin="10px 0" />
    <view class="_u_flex">
      <u-count-down
        :time="30 * 60 * 60 * 1000"
        format="HH:mm:ss"
        autoStart
        millisecond
        @finish="finish"
      />
    </view>

    <u-text text="自定义格式" type="info" margin="10px 0" />
    <view class="_u_flex">
      <u-count-down
        :time="30 * 60 * 60 * 1000"
        format="DD:HH:mm:ss"
        autoStart
        millisecond
        @change="onChange"
      >
        <view class="time">
          <text class="time__item">{{ timeData.days }}&nbsp;天</text>
          <text class="time__item"
            >{{
              timeData.hours > 10 ? timeData.hours : '0' + timeData.hours
            }}&nbsp;时</text
          >
          <text class="time__item">{{ timeData.minutes }}&nbsp;分</text>
          <text class="time__item">{{ timeData.seconds }}&nbsp;秒</text>
        </view>
      </u-count-down>
    </view>

    <u-text text="毫秒级渲染" type="info" margin="10px 0" />
    <view class="_u_flex">
      <u-count-down
        :time="30 * 60 * 60 * 1000"
        format="HH:mm:ss:SSS"
        autoStart
        millisecond
      />
    </view>

    <u-text text="自定义样式" type="info" margin="10px 0" />
    <view class="_u_flex">
      <u-count-down
        :time="30 * 60 * 60 * 1000"
        format="HH:mm:ss"
        autoStart
        millisecond
        @change="onChange"
      >
        <view class="time">
          <view class="time__custom">
            <text class="time__custom__item">{{
              timeData.hours > 10 ? timeData.hours : '0' + timeData.hours
            }}</text>
          </view>
          <text class="time__doc">:</text>
          <view class="time__custom">
            <text class="time__custom__item">{{ timeData.minutes }}</text>
          </view>
          <text class="time__doc">:</text>
          <view class="time__custom">
            <text class="time__custom__item">{{ timeData.seconds }}</text>
          </view>
        </view>
      </u-count-down>
    </view>

    <u-text text="手动控制" type="info" margin="10px 0" />
    <view class="_u_flex">
      <u-count-down
        ref="countDown1"
        :time="3 * 1000"
        format="ss:SSS"
        :autoStart="false"
        millisecond
      />
    </view>
    <u-grid :border="true" :customStyle="{ marginTop: 10 + 'px' }">
      <u-grid-item @click="reset">
        <view class="count-down__grid-item">
          <u-icon name="reload" :size="22"></u-icon>
          <text class="count-down__grid-item__grid-text">重置</text>
        </view>
      </u-grid-item>
      <u-grid-item @click="start">
        <view class="count-down__grid-item">
          <view class="count-down__grid-item__circle">
            <u-icon color="#fff" name="play-right-fill" :size="22"></u-icon>
          </view>
          <text class="count-down__grid-item__grid-text">开始</text>
        </view>
      </u-grid-item>
      <u-grid-item @click="pause">
        <view class="count-down__grid-item">
          <u-icon name="pause-circle" :size="22"></u-icon>
          <text class="count-down__grid-item__grid-text">暂停</text>
        </view>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';

  interface IComponent {
    start: Function;
    pause: Function;
    reset: Function;
  }

  const countDown1 = ref<IComponent>({} as IComponent);
  let timeData = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  //开始
  const start = () => {
    countDown1.value.start();
  };
  // 暂停
  const pause = () => {
    countDown1.value.pause();
  };
  // 重置
  const reset = () => {
    countDown1.value.reset();
  };
  const onChange = (e: any) => {
    timeData = e;
  };
  const finish = () => {
    console.log('finish');
  };
</script>

<style lang="scss">
  .time {
    @include flex;
    align-items: center;

    &__custom {
      margin-top: 4px;
      width: 22px;
      height: 22px;
      background-color: $u-primary;
      border-radius: 4px;
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */
      justify-content: center;
      align-items: center;

      &__item {
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
    }

    &__doc {
      color: $u-primary;
      padding: 0px 4px;
    }

    &__item {
      color: #606266;
      font-size: 15px;
      margin-right: 4px;
    }
  }

  .u-view {
    padding: 40px 20px 0px 20px;

    &__title {
      font-size: 14px;
      color: rgb(143, 156, 162);
      margin-bottom: 10px;
    }
  }

  // 手动控制的btn样式
  .count-down {
    &__grid-item {
      width: 70px;
      height: 70px;
      @include flex;
      justify-content: center;
      align-items: center;

      &__circle {
        width: 32px;
        height: 32px;
        border-radius: 32px;
        background-color: $u-primary;
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 4px rgba(155, 191, 255, 0.7);
      }

      &__grid-text {
        font-size: 14px;
        color: #909399;
        /* #ifndef APP-PLUS */
        box-sizing: border-box;
        /* #endif */
        margin-left: 6px;
      }
    }
  }
</style>
