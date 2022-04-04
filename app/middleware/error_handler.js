'use strict';

module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (e) {
      console.log('e: ', e);
      ctx.body = {
        status: 'failed',
      };
    }
  };
};
