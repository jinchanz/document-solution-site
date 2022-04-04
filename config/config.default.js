/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
const { ossConfig, yuqueSecret } = require('./secret');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.middleware = [ 'errorHandler' ];

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586592205046_9870';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),

    mapping: {
      '.nj': 'nunjucks',
    },

    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  // add your user config here
  const userConfig = {
    yuqueViewer: {
      npm: '@ablula/document-client@0.2.9-beta.3',
      onlyDoc: false,
      noHeader: false,
      showSearch: true,
      showEditor: true,
      darkMode: false,
      lightColor: '#ffffff00',
      headerHeight: 60,
      blackColor: 'black',
      token: yuqueSecret.token,
      documents: {
        help: {
          baseUrl: 'https://www.yuque.com/api/v2',
          namespace: 'mark.ck/ds',
          search: '/documents/search',
          homepage: '/doc',
          title: '文档体系解决方案',
          hideTitle: true,
          prefix: '/api/documents',
          view: '/doc',
        },
        spec: {
          baseUrl: 'https://www.yuque.com/api/v2',
          namespace: 'mark.ck/spec',
          search: '/spec/search',
          homepage: '/doc',
          title: '规范协议',
          hideTitle: true,
          prefix: '/api/spec',
          view: '/spec',
        },
      },
      menuDataSource: [
        {
          label: '文档',
          target: '_self',
          url: '/doc',
        },
        {
          label: '协议',
          target: '_self',
          url: '/spec',
        },
      ],
    },
  };

  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
  };

  exports.oss = {
    client: {
      ...ossConfig
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
