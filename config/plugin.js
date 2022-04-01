'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  yuqueViewer: {
    enable: true,
    package: '@ablula/egg-yuque-viewer',
  },
  oss: {
    enable: true,
    package: 'egg-oss',
  },
};
