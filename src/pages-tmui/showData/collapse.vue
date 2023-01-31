<template>
  <tm-app>
    <tm-collapse :defaultActiveKey="['2']">
      <tm-collapse-item title="面板标题1" name="1">
        <view class="pa-24">
          <tm-text
            :font-size="28"
            _class="font-weight-b"
            label="这是折叠面板这是折叠面板这是折叠面板这是折叠面板这是折叠面板"
          ></tm-text>
        </view>
      </tm-collapse-item>
      <tm-collapse-item title="面板标题2" name="2">
        <view class="pa-24">
          <tm-text
            :font-size="28"
            _class="font-weight-b"
            label="这是折叠面板这是折叠面板这是折叠面板这是折叠面板这是折叠面板"
          ></tm-text>
        </view>
      </tm-collapse-item>
      <tm-collapse-item left-icon="tmicon-check-circle-fill" title="面板标题3，允许嵌套使用，展开嵌套面板" name="3">
        <view class="pa-24">
          <tm-collapse iconPos="right" :defaultActiveKey="['1']">
            <tm-collapse-item title="面板标题1" name="1">
              <tm-text
                :font-size="28"
                _class="font-weight-b"
                label="这是折叠面板这是折叠面板这是折叠面板这是折叠面板这是折叠面板"
              >
              </tm-text>
            </tm-collapse-item>
            <tm-collapse-item left-icon="tmicon-times-circle" left-icon-color="red" title="面板标题2" name="2">
              <tm-text
                :font-size="28"
                _class="font-weight-b"
                label="这是折叠面板这是折叠面板这是折叠面板这是折叠面板这是折叠面板"
              >
              </tm-text>
            </tm-collapse-item>
            <tm-collapse-item left-icon="tmicon-gem" left-icon-color="green" title="面板标题3" name="3">
              <tm-text
                :font-size="28"
                _class="font-weight-b"
                label="这是折叠面板这是折叠面板这是折叠面板这是折叠面板这是折叠面板"
              >
              </tm-text>
            </tm-collapse-item>
          </tm-collapse>
        </view>
      </tm-collapse-item>
    </tm-collapse>

    <tm-sheet color="primary">
      <tm-text :font-size="24" _class="font-weight-b" label="只允许单个展开"></tm-text>
    </tm-sheet>

    <tm-collapse :accordion="true" :defaultActiveKey="['1']">
      <tm-collapse-item title="只能展开一个1" name="1">
        <view class="pa-24">
          <tm-text
            :font-size="28"
            _class="font-weight-b"
            label="这是折叠面板这是折叠面板这是折叠面板这是折叠面板这是折叠面板"
          ></tm-text>
        </view>
      </tm-collapse-item>
      <tm-collapse-item color="red" linear="bottom" activeColor="yellow" title="随便更改背景" name="2">
        <view class="pa-24">
          <tm-text
            :font-size="28"
            _class="font-weight-b"
            label="这是折叠面板这是折叠面板这是折叠面板这是折叠面板这是折叠面板"
          ></tm-text>
        </view>
      </tm-collapse-item>
      <tm-collapse-item title="只能展开一个3" name="3">
        <view class="pa-24">
          <tm-text
            :font-size="28"
            _class="font-weight-b"
            label="这是折叠面板这是折叠面板这是折叠面板这是折叠面板这是折叠面板"
          ></tm-text>
        </view>
      </tm-collapse-item>
    </tm-collapse>
  </tm-app>
</template>

<script lang="ts" setup></script>
