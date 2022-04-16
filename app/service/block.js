'use strict';

const { Service } = require('egg');

class BlockService extends Service {

  constructor(app) {
    super(app);
    const { ctx } = this;
    this.Block = ctx.model.Block;
  }

  async listBlock() {
    const { ctx } = this;
    return this.Block.findAll();
  }
  async getBlockByPk(id) {
    return this.Block.findByPk(id);
  }
  async createBlock(file) {
    const { ctx } = this;
    return this.Block.create(file);
  }
  async updateBlock(id, file) {
    const { ctx } = this;
    return this.Block.update(file, { where: { id } });
  }
  async deleteBlock(id) {
    const { ctx } = this;
    return this.Block.destroy({ where: { id } });
  }

}

module.exports = BlockService;
