# uniapp vue next starter

## 简介

- **uniapp Vue3 TypeScript 快速开发框架**
- cli 创建的 Vue3/ts 项目 与 使用 HBuilderX 导入插件 的包有差异,请直接访问 [开源地址](https://gitee.com/time-network/uniapp-vue-next-starter)

### 说明

- 框架完全基于 Vue3 SFC `<script setup>` 语法糖写法(包含示例页面)，不支持 Vue2;
- 可用于学习与交流;
- 目前测试 H5、微信小程序,APP(Android),支付宝小程序通过;
- 其他平台暂未测试,后续会增加;
- 如发现问题或建议可在评论区留言, 或提 [Issues](https://gitee.com/time-network/uniapp-vue-next-starter/issues) 及 [PR](https://gitee.com/time-network/uniapp-vue-next-starter/pulls)，会及时处理;
- 如有需求亦可在评论区留言,或在此项目基础上增加;

## 特性

- **最新技术栈**：使用 Vue3/Vite4/pinia ,TypeScript 等前端前沿技术开发;
- **UI集成**: 集成 [uView-plus](https://uiadmin.net/uview-plus/) v3 UI 组件，扩展 vView 在 UNI 中的使用（后期加入 uView 更多 ts 支持）;
- **[Unocss](https://github.com/unocss/unocss)**: 原子化 CSS，[iconify](https://github.com/iconify/iconify) 图标;
- **Eslint/Prettier**: 规范代码格式,统一编码;
- **路由拦截**: 基于 uni.addInterceptor 进行路由拦截;
- **请求拦截**: 核心使用 [luch-request](https://ext.dcloud.net.cn/plugin?id=392),支持请求和响应拦截等;
- **缓存加密**: 使用 AES 加密缓存,可设置区分在开发或生成环境中是否加密;

## 目录结构

```shell
.
├─ src
│   ├─assets # 静态资源目录
│   │
│   ├─components # 组件目录
│   │   ├─ AppProvider
│   │   │    ├─index.vue
│   │   └─...
│   │
│   ├─enums # 枚举/常量
│   │   ├─ appEnum.ts
│   │   └─...
│   │
│   ├─hooks # 钩子
│   │   ├─ router.ts
│   │   └─...
│   │
│   ├─pages # 页面
│   │   ├─ index
│   │   │    └─index.vue
│   │   └─...
│   │
│   ├─services # 接口相关
│   │   ├─ api # api
│   │   │    ├─auth.ts
│   │   │    └─...
│   │   │
│   │   └─ model # 数据模型
│   │        ├─authModel.d.ts
│   │        └─...
│   │
│   ├─settings # 设置
│   │   └─ encryptionSetting # 加密设置
│   │
│   ├─state # 状态管理模式(pinia)
│   │   ├─ modules # 数据模块
│   │   │    ├─auth.ts
│   │   │    └─...
│   │   │
│   │   └─ index.ts
│   │
│   ├─static # 静态公共文件
│   │   ├─ images # 图片
│   │   │    ├─avatar.png
│   │   │    └─...
│   │   │
│   │   └─ ...
│   │
│   ├─types # 类型文件
│   │   ├─ http.d.ts
│   │   └─ ...
│   │
│   └─utils # 工具类
│       ├─ cache # 缓存相关目录
│       ├─ http  # request相关目录
│       ├─ interceptors  # 拦截器相关目录
│       └─ ...
│
├─ .env
├─ .env.development
├─ .env.production
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.js
├─ favicon.ico
├─ index.html
├─ LICENSE
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tsconfig.json
├─ unocss.config.js
└─ vite.config.ts

```

## 预览

- H5

  ![h5](./src/static/images/h5Qcode.png)

- 小程序(体验版-需申请体验)

  ![小程序](./src/static/images/wexinQcode.jpg)

## 安装使用

- 安装依赖

```bash
pnpm install
```

- 运行

```bash
# 其他端请查看 package.json script
pnpm dev:h5
```

- 打包

```bash
# 其他端请查看 package.json script
pnpm build:h5
```

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
