'use strict';

const { Service } = require('egg');

class FileService extends Service {

  constructor(app) {
    super(app);
    const { ctx } = this;
    this.File = ctx.model.File;
  }

  async listFile() {
    const { ctx } = this;
    return this.File.findAll();
  }
  async createFile(file) {
    const { ctx } = this;
    return this.File.create(file);
  }
  async updateFile(id, file) {
    const { ctx } = this;
    return this.File.update(file, { where: { id } });
  }
  async deleteFile(id) {
    const { ctx } = this;
    return this.File.destroy({ where: { id } });
  }

}

module.exports = FileService;
