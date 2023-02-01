<template>
  <tm-app>
    <view v-if="loading" class="uno-p-15px">
      <tm-skeleton :rows="3"></tm-skeleton>
    </view>

    <template v-else>
      <tm-text color="grey-darken-1" class="uno-m-15px">通用：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell
          v-for="(item, index) in commonList"
          :key="index"
          bottom-border
          :margin="[0, 0]"
          :title="item.title"
          :url="item.path"
        />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">布局：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell
          v-for="(item, index) in layoutList"
          :key="index"
          bottom-border
          :margin="[0, 0]"
          :title="item.title"
          :url="item.path"
        />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">展示：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell
          v-for="(item, index) in showDataList"
          :key="index"
          bottom-border
          :margin="[0, 0]"
          :title="item.title"
          :url="item.path"
        />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">表单：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell
          v-for="(item, index) in formList"
          :key="index"
          bottom-border
          :margin="[0, 0]"
          :title="item.title"
          :url="item.path"
        />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">反馈：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell
          v-for="(item, index) in feedbackList"
          :key="index"
          bottom-border
          :margin="[0, 0]"
          :title="item.title"
          :url="item.path"
        />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">导航：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell
          v-for="(item, index) in navList"
          :key="index"
          bottom-border
          :margin="[0, 0]"
          :title="item.title"
          :url="item.path"
        />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">其他：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell
          v-for="(item, index) in otherList"
          :key="index"
          bottom-border
          :margin="[0, 0]"
          :title="item.title"
          :url="item.path"
        />
      </view>

      <tm-text color="grey-darken-1" class="uno-m-15px">业务：</tm-text>
      <view class="uno-mx-15px uno-rounded-3px uno-overflow-hidden">
        <tm-cell
          v-for="(item, index) in businessList"
          :key="index"
          bottom-border
          :margin="[0, 0]"
          :title="item.title"
          :url="item.path"
        />
      </view>
    </template>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { componentsList as commonList } from '../../pages-tmui/common/index';
  import { componentsList as layoutList } from '../../pages-tmui/layout/index';
  import { componentsList as showDataList } from '../../pages-tmui/showData/index';
  import { componentsList as formList } from '../../pages-tmui/form/index';
  import { componentsList as feedbackList } from '../../pages-tmui/feedback/index';
  import { componentsList as navList } from '../../pages-tmui/nav/index';
  import { componentsList as otherList } from '../../pages-tmui/other/index';
  import { componentsList as businessList } from '../../pages-tmui/business/index';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 100);
</script>

<style lang="scss" scoped></style>
