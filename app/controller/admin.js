'use strict';
const stringToStream = require('string-to-stream');

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async lowcode() {
    const { ctx } = this;
    await ctx.render('lowcode.nj');
  }

  async preview() {
    const { ctx } = this;
    await ctx.render('preview.nj');
  }

  async schema() {
    const { ctx } = this;
    const res = await ctx.oss.get('portal/schema.json');
    console.log('res: ', res);
    ctx.response.set('content-type', 'json');
    ctx.body = res.content;
  }

  async saveSchema() {
    const { ctx } = this;
    const schema = ctx.request.body;
    ctx.response.set('Access-Control-Allow-Origin', '*');
    const res = await ctx.oss.putStream('portal/schema.json', stringToStream(JSON.stringify(schema)));
    ctx.body = res || 'ok';
  }

}

module.exports = AdminController;
