# vue-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 目录结构

```bash
├─ public                     # 静态资源 不参与打包
│   ├─ plug                   # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   │   ├─ apiList            # 模块化Api接口
│   │   ├─ index.js           # 请求封装
│   │   └─ statusCode.js      # 请求响应状态码处理
│   ├─ assets                 # 图片、图标、字体、主题等静态资源
│   ├─ common                 # 全局公用方法
│   │   ├─ chart              # echats二次封装
│   │   ├─ directives         # 自定义指令
│   │   ├─ filters            # 过滤器
│   │   ├─ mixins             # 混入
│   │   ├─ utils              # 公用方法
│   │   └─ index.js           # 全局公用方法入口
│   ├─ components             # 全局公用组件
│   ├─ constants              # 全局公用常量
│   ├─ doc                    # 文档
│   ├─ layout                 # 布局页面
│   ├─ plugins                # 插件注册
│   ├─ router                 # 路由文件
│   ├─ store                  # 全局状态管理
│   ├─ views                  # views 所有页面
│   ├─ App.js                 # 入口页面
│   ├─ main.js                # 源码入口
│   └─ permission.js          # 路由权限
├── theme                     # 主题样式文件
├── .browserslistrc           # 浏览器兼容配置
├── .editorconfig             # 编码文件格式
├── .env.development          # 开发环境变量配置
├── .env.prod                 # 生产环境变量配置
├── .env.test                 # 测试环境变量配置
├── .eslintrc.js              # eslint配置
├── .gitignore                # git配置
├── README.md                 # 项目自述
├── package-lock.json         # 依赖包 锁文件
├── package.json              # package.json
└── vue.config.js             # vue配置
```