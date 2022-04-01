'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/admin/lowcode', controller.admin.lowcode);
  router.get('/admin/schema.json', controller.admin.schema);
  router.get('/api/v1/schemas/1', controller.admin.schema);
  router.get('/admin/preview.html', controller.admin.preview);
  router.post('/api/v1/schemas', controller.admin.saveSchema);
};
