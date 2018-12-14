# generator-vue-impression

> Vue + Vuex + Vue Router + Vue Impression + Webpack 3

[English Version](./README_EN.md)

## 安装

首先, 安装`Yeoman`和`generator-vue-impression`:

```bash
yarn global add yo generator-vue-impression
```

然后创建新项目:

```bash
yo vue-impression
```

或者升级旧项目:

```bash
cd YOUR_PROJECT_FOLDER
yo vue-impression --upgrade
```

## 开发

首先, 进入项目目录并执行如下命令:

```bash
yarn start
```

然后, 打开浏览器并访问 [http://localhost:8080](http://localhost:8080)

## 发版

首先, 在`package.json`文件中修改七牛云配置并加入密钥:

```json
{
  "deploy": {
    "DOMAIN": "fe.imdada.cn",
    "BUCKET": "dada-fe",
    "ACCESS_KEY": "",
    "SECRET_KEY": ""
  }
}
```

然后执行如下命令之一:

```bash
# 小版本更新，如修复问题
npm version patch -m 'Release version %s'

# 大版本更新，如增加功能
npm version minor -m 'Release version %s'

# 手动指定版本号，如1.0.0
npm version 1.0.0 -m 'Release version %s'

# 测试版本
yarn debug
```

## 最佳实践

- 代码格式化

  如需格式化代码，执行`yarn format`命令

- 转发 API 请求

  首先, 更新`package.json`文件中的配置，比如：

  ```json
  {
    "proxy": {
      "/api": {
        "target": "http://localhost:3000",
        "changeOrigin": true
      }
    }
  }
  ```

  然后，重启服务：

  ```bash
  yarn start
  ```

- 遵守[style-guide][style-guide]规范
- 使用[Vuex#Module][vuex-module]拆分 store
- 使用[Ramda#assocPath][ramda-assocpath]更新嵌套数据
- 使用[CSS Modules][css-modules]创建模块化样式

## License

MIT

[style-guide]: https://github.com/NewDadaFE/style-guide
[vuex-module]: https://vuex.vuejs.org/zh/guide/modules.html
[ramda-assocpath]: https://ramdajs.com/docs/#assocPath
[css-modules]: https://github.com/css-modules/css-modules
