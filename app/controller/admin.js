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
    const { page = 'home', schema } = ctx.request.body;
    const filename = `${page}.json`;
    ctx.response.set('Access-Control-Allow-Origin', '*');
    const res = await ctx.oss.putStream(`portal/${filename}`, stringToStream(JSON.stringify(schema)));
    ctx.body = res || 'ok';
  }

  async loginView() {
    const { ctx } = this;
    const { redirectUrl = '/' } = ctx.request.query;
    if (ctx.session.username) {
      ctx.redirect(redirectUrl);
      return;
    }
    await ctx.render('renderer.nj', {
      data: {
        schemaUrl: 'https://i.ablula.tech/portal/login.json',
        fullScreen: true,
      },
    });
  }

  async logout() {
    const { ctx } = this;
    ctx.session = null;
    ctx.redirect(ctx.get('referer') || '/');
  }

  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const result = await ctx.service.user.login(username, password);
    console.log('result: ', result);
    ctx.body = {
      status: result ? 'success' : 'failed',
    };
  }

}

module.exports = AdminController;
