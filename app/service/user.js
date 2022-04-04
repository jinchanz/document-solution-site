'use strict';

const md5 = require('md5');
const { Service } = require('egg');

const users = [
  {
    username: 'admin',
    password: md5('123456'),
  },
];

class UserService extends Service {
  async find(username) {
    const user = await users.find(user => {
      return user.username === username;
    });
    return user;
  }

  async login(username, password) {
    const { ctx } = this;
    console.log('session: ', ctx.session);
    if (ctx.session.username === username) {
      return true;
    }
    const user = await this.find(username);
    const result = user && (password === user.password);
    if (result) {
      ctx.session = user;
      return true;
    }
    return false;
  }

}

module.exports = UserService;
