## 简介

uni-app Vue3 Vite2 TypeScript 基础框架

## 特性

- **最新技术栈**：使用 Vue3/Vite2/pinia ,TypeScript 等前端前沿技术开发
- **Eslint/Prettier**: 规范代码格式,统一编码
- **路由拦截**: 基于uni.addInterceptor进行路由拦截
- **请求拦截**: 核心使用 [luch-request]("https://ext.dcloud.net.cn/plugin?id=392"),支持请求和响应拦截等
- **缓存加密**: 使用AES加密缓存,可设置区分在开发或生成环境中是否加密

## 目录结构

```shell
.
├─ src
│   ├─assets # 静态资源目录
│   │   └─ style
│   │        └─main.scss # 公共样式
│   │
│   ├─components # 组件目录
│   │   ├─ BasicButton
│   │   │    ├─index.vue
│   │   │    └─prpos.ts
│   │   └─...
│   │ 
│   ├─enums # 枚举/常量
│   │   ├─ cacheEnum.ts
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
│       ├─ catch # 缓存相关目录
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
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tree.txt
├─ tsconfig.json
└─ vite.config.ts

```



## 预览

- H5

  ![h5](https://api-catch.ranesuangyu.top/images/20220621/364f2b47d91ae5ae82a33d33854e2540.png
  ) 

[//]: # (- 小程序&#40;暂未发布&#41;)

[//]: # (  ![小程序]&#40;http://api-catch.ranesuangyu.top/images/20220621/8d4388315ef5b8630d0c0b3963d1ba6b.jpg&#41;)

  

## 安装使用

- 安装依赖

```bash
pnpm install
```

- 运行

```bash
# 其他端请查看 webpage.json script
pnpm dev:h5
```

- 打包

```bash
# 其他端请查看 webpage.json script
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