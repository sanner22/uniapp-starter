<template>
  <view class="uno-px-15px uno-pb-500px">
    <u-text type="info" margin="10px 0" text="基础演示" />
    <view>
      <u-tabs :list="list1" @click="click" :current="3" />
    </view>

    <u-text type="info" margin="10px 0" text="粘性布局" />
    <u-sticky bgColor="#fff">
      <u-tabs :list="list1" />
    </u-sticky>

    <u-text type="info" margin="10px 0" text="显示徽标" />
    <view>
      <u-tabs :list="list2" />
    </view>

    <u-text type="info" margin="10px 0" text="禁止滚动" />
    <view>
      <u-tabs :list="list6" :scrollable="false" />
    </view>

    <u-text type="info" margin="10px 0" text="禁用菜单" />
    <view>
      <u-tabs :list="list3" />
    </view>

    <u-text type="info" margin="10px 0" text="自定义样式" />
    <view>
      <u-tabs
        :list="list4"
        lineWidth="30"
        lineColor="#f56c6c"
        :activeStyle="{
          color: '#303133',
          fontWeight: 'bold',
          transform: 'scale(1.05)',
        }"
        :inactiveStyle="{
          color: '#606266',
          transform: 'scale(1)',
        }"
        itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
      >
      </u-tabs>
    </view>

    <u-text type="info" margin="10px 0" text="滑块设置背景图" />
    <view>
      <u-tabs
        :list="list4"
        lineWidth="20"
        lineHeight="7"
        :lineColor="`url(${lineBg}) 100% 100%`"
        :activeStyle="{
          color: '#303133',
          fontWeight: 'bold',
          transform: 'scale(1.05)',
        }"
        :inactiveStyle="{
          color: '#606266',
          transform: 'scale(1)',
        }"
        itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
      >
      </u-tabs>
    </view>

    <u-text type="info" margin="10px 0" text="右侧自定义插槽" />
    <view>
      <u-tabs :list="list1">
        <template #right>
          <view style="padding-left: 4px" @click="click2">
            <u-icon name="list" size="21" bold></u-icon>
          </view>
        </template>
      </u-tabs>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { Toast } from '@/utils/uniapi/prompt';

  const lineBg =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=';
  const list1 = [
    {
      name: '关注',
    },
    {
      name: '推荐',
    },
    {
      name: '电影',
    },
    {
      name: '科技',
    },
    {
      name: '音乐',
    },
    {
      name: '美食',
    },
    {
      name: '文化',
    },
    {
      name: '财经',
    },
    {
      name: '手工',
    },
  ];
  const list2 = [
    {
      name: '关注',
    },
    {
      name: '推荐',
      badge: {
        isDot: true,
      },
    },
    {
      name: '电影',
      badge: {
        value: 5,
      },
    },
    {
      name: '科技',
    },
    {
      name: '音乐',
    },
    {
      name: '美食',
    },
    {
      name: '文化',
    },
    {
      name: '财经',
    },
    {
      name: '手工',
    },
  ];
  const list3 = [
    {
      name: '关注',
    },
    {
      name: '推荐',
    },
    {
      name: '电影',
      disabled: true,
    },
    {
      name: '科技',
    },
    {
      name: '音乐',
    },
    {
      name: '美食',
    },
    {
      name: '文化',
    },
    {
      name: '财经',
    },
    {
      name: '手工',
    },
  ];
  const list4 = [
    {
      name: '关注',
    },
    {
      name: '推荐',
      badge: {
        isDot: true,
      },
    },
    {
      name: '电影',
    },
    {
      name: '科技',
    },
    {
      name: '音乐',
    },
    {
      name: '美食',
    },
    {
      name: '文化',
    },
    {
      name: '财经',
    },
    {
      name: '手工',
    },
  ];
  const list6 = [
    {
      name: '关注',
    },
    {
      name: '推荐',
    },
    {
      name: '电影',
    },
    {
      name: '科技',
    },
  ];

  const click = (item: any) => {
    console.log('item', item);
  };

  const click2 = () => {
    Toast('插槽被点击');
  };
</script>
