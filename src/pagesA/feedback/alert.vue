<template>
  <view class="uno-px-15px">
    <u-text type="info" text="基础功能" margin="10px 0" />
    <view class="uno-flex uno-flex-col uno-gap-10px">
      <u-alert description="山不在于高，有了神仙就出名" type="warning" />
      <u-alert description="水不在深，有龙则灵" type="primary" />
      <u-alert description="斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青" type="error" />
      <u-alert description="谈笑有鸿儒，往来无白丁" type="info" />
      <u-alert description="可以调素琴，阅金经" type="success" />
    </view>

    <u-text type="info" text="深浅色" margin="10px 0" />
    <view class="uno-flex uno-flex-col uno-gap-10px">
      <u-alert description="无丝竹之乱耳，无案牍之劳形" type="warning" />
      <u-alert description="南阳诸葛庐，西蜀子云亭。孔子云：何陋之有" type="warning" effect="dark" />
    </view>

    <u-text type="info" text="显示图标" margin="10px 0" />
    <view class="uno-flex uno-flex-col uno-gap-10px">
      <u-alert description="六王毕，四海一；蜀山兀，阿房出" type="error" showIcon />
      <u-alert
        description="覆压三百余里，隔离天日。骊山北构而西折，直走咸阳，二川溶溶，流入宫墙"
        type="error"
        effect="dark"
        showIcon
      />
    </view>

    <u-text type="info" text="可关闭" margin="10px 0" />
    <view class="uno-flex uno-flex-col uno-gap-10px">
      <u-alert
        description="五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角"
        type="success"
        showIcon
        closable
      />
      <u-alert
        description="盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落"
        type="success"
        effect="dark"
        closable
        showIcon
      />
    </view>

    <u-text type="info" text="带标题" margin="10px 0" />
    <view class="uno-flex uno-flex-col uno-gap-10px">
      <u-alert
        title="妃嫔媵嫱，王子皇孙，辞楼下殿"
        description="长桥卧波，未云何龙？复道行空，不霁何虹"
        type="info"
        showIcon
        closable
      />
      <u-alert
        title="辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也"
        description="高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐"
        type="info"
        effect="dark"
        closable
        showIcon
      />
    </view>
  </view>
</template>

<script setup lang="ts"></script>
