'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('to-do')
      .service('myService')
      .getWelcomeMessage();
  },
});
