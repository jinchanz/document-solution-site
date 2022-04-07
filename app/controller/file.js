'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {

  async listFile() {
    const { ctx } = this;
    const files = await ctx.service.file.listFile();
    ctx.body = {
      code: 0,
      data: files,
    };
  }
  async createFile() {
    const { ctx } = this;
    const { file } = ctx.request.body;
    const result = await ctx.service.file.createFile(file);
    ctx.logger.info('create file result: ', result);
    ctx.body = {
      code: 0,
      message: '创建文件成功',
    };
  }
  async updateFile() {
    const { ctx } = this;
    ctx.logger.info('in update file');
    const { id } = ctx.params;
    const { file } = ctx.request.body;
    ctx.logger.info('update file id: %s, file: %s', id, file);
    const result = await ctx.service.file.updateFile(id, file);
    ctx.logger.info('update file result: ', result);
    ctx.body = {
      code: 0,
      message: '更新文件成功',
    };
  }
  async deleteFile() {
    const { ctx } = this;
    const { id } = ctx.params;
    const result = await ctx.service.file.deleteFile(id);
    ctx.logger.info('delete file result: ', result);
    ctx.body = {
      code: 0,
      message: '删除文件成功',
    };
  }

}

module.exports = AdminController;
