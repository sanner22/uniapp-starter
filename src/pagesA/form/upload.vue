<template>
  <view class="uno-px-15px">
    <u-text text="基础用法" type="info" margin="10px 0"></u-text>
    <view>
      <u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple :maxCount="10" />
    </view>

    <u-text text="上传视频" type="info" margin="10px 0"></u-text>
    <view>
      <u-upload
        :fileList="fileList2"
        @afterRead="afterRead"
        @delete="deletePic"
        name="2"
        multiple
        :maxCount="10"
        accept="video"
      />
    </view>

    <u-text text="文件预览" type="info" margin="10px 0"></u-text>
    <view>
      <u-upload
        :fileList="fileList3"
        @afterRead="afterRead"
        @delete="deletePic"
        name="3"
        multiple
        :maxCount="10"
        :previewFullImage="true"
      />
    </view>

    <u-text text="隐藏上传按钮" type="info" margin="10px 0"></u-text>
    <view>
      <u-upload :fileList="fileList4" @afterRead="afterRead" @delete="deletePic" name="4" multiple :maxCount="2" />
    </view>

    <u-text text="限制上传数量" type="info" margin="10px 0"></u-text>
    <view>
      <u-upload :fileList="fileList5" @afterRead="afterRead" @delete="deletePic" name="5" multiple :maxCount="3" />
    </view>

    <u-text text="自定义上传样式" type="info" margin="10px 0"></u-text>
    <view>
      <u-upload
        :fileList="fileList6"
        @afterRead="afterRead"
        @delete="deletePic"
        name="6"
        multiple
        :maxCount="1"
        width="250"
        height="150"
      >
        <u-image
          src="https://cdn.uviewui.com/uview/demo/upload/positive.png"
          mode="widthFix"
          width="250"
          height="150"
        />
      </u-upload>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const fileList1 = ref([]);
  const fileList2 = ref([]);
  const fileList3 = ref([
    {
      url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
    },
  ]);
  const fileList4 = ref([
    {
      url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
    },
    {
      url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
    },
  ]);
  const fileList5 = ref([]);
  const fileList6 = ref([]);

  // 删除图片
  const deletePic = (event: any) => {
    [`fileList${event.name}`].splice(event.index, 1);
  };

  // 新增图片
  const afterRead = async (event: any) => {
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    let lists = [].concat(event.file);
    let fileListLen = [`fileList${event.name}`].length;
    lists.map((item: any) => {
      [`fileList${event.name}`].push({
        ...item,
        status: 'uploading',
        message: '上传中',
      });
    });
    for (let i = 0; i < lists.length; i++) {
      const result = await uploadFilePromise((lists[i] as any).url);
      let item = [`fileList${event.name}`][fileListLen];
      [`fileList${event.name}`].splice(
        fileListLen,
        1,
        Object.assign(item, {
          status: 'success',
          message: '',
          url: result,
        }),
      );
      fileListLen++;
    }
  };

  const uploadFilePromise = (url: string) => {
    return new Promise(resolve => {
      uni.uploadFile({
        url: 'http://www.example.com/upload', // 仅为示例，非真实的接口地址
        filePath: url,
        name: 'file',
        formData: {
          user: 'test',
        },
        success: res => {
          setTimeout(() => {
            resolve((res.data as any).data);
          }, 1000);
        },
      });
    });
  };
</script>
