# generator-vue-impression

> Vue + Vuex + Vue Router + Vue Impression + Webpack 3

## Installation

First, install Yeoman and generator-vue-impression:

```bash
yarn global add yo generator-vue-impression
```

Then generate your new project:

```bash
yo vue-impression
```

**_OR_** upgrade existed project:

```bash
cd YOUR_PROJECT_FOLDER
yo vue-impression --upgrade
```

## Development

First, run following command in your project folder:

```bash
yarn start
```

Then, open your browser with http://localhost:8080.

## Deploy

First, add your Qiniu key to `package.json`:

```json
{
  "deploy": {
    "ACCESS_KEY": "",
    "SECRET_KEY": ""
  }
}
```

Then run following command to release `patch` version:

```bash
npm version patch -m 'Release version %s'
```

**_OR_** release `minor` version:

```bash
npm version minor -m 'Release version %s'
```

## Best Practice

- Proxy API request

  First, update proxy table in `package.json`. For example:

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

  Then restart development server:

  ```bash
  yarn start
  ```

- Folloing standard of [style-guide][style-guide]
- Divide store by using [Vuex#Module][vuex-module]
- Update nested state by using [Ramda#assocPath][ramda-assocpath]
- Write styles with [CSS Modules][css-modules]

## License

MIT

[style-guide]: https://github.com/NewDadaFE/style-guide
[vuex-module]: https://vuex.vuejs.org/zh/guide/modules.html
[ramda-assocpath]: https://ramdajs.com/docs/#assocPath
[css-modules]: https://github.com/css-modules/css-modules
