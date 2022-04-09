'use strict';

const needLogin = async (ctx, next) => {
  if (ctx.session.username) {
    await next();
  } else {
    ctx.redirect(`/login?redirectUrl=${ctx.request.path}`);
  }
};

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/admin/lowcode', needLogin, controller.admin.lowcode);
  router.get('/admin/schema.json', controller.admin.schema);
  router.get('/api/v1/schemas/1', controller.admin.schema);
  router.get('/admin/preview.html', controller.admin.preview);
  router.get('/admin/preview.html/*', controller.admin.preview);
  router.post('/api/v1/schemas', controller.admin.saveSchema);

  /** login start */

  router.get('/login', controller.admin.loginView);
  router.get('/logout', controller.admin.logout);
  router.post('/api/login', controller.admin.login);

  /** login end */

  router.get('/api/v1/profile', needLogin, controller.user.profile);

  /** lowcode file start */
  router.get('/api/v1/files', controller.file.listFiles);
  router.get('/api/v1/files/:id', controller.file.getFile);
  router.post('/api/v1/files', controller.file.createFile);
  router.patch('/api/v1/files/:id', controller.file.updateFile);
  router.delete('/api/v1/files/:id', controller.file.deleteFile);
  /** lowcode file end */

};
