'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {

  async profile() {
    const { ctx } = this;
    ctx.body = {
      username: 'admin',
      gender: 3,
      avatar: 'https://img.alicdn.com/imgextra/i4/O1CN013w2bmQ25WAIha4Hx9_!!6000000007533-55-tps-137-26.svg',
      phone: 123456,
    };
  }

}

module.exports = AdminController;
