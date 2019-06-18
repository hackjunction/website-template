'use strict';

/**
 * Technology.js controller
 *
 * @description: A set of functions called "actions" for managing `Technology`.
 */

module.exports = {

  /**
   * Retrieve technology records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.technology.search(ctx.query);
    } else {
      return strapi.services.technology.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a technology record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.technology.fetch(ctx.params);
  },

  /**
   * Count technology records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.technology.count(ctx.query);
  },

  /**
   * Create a/an technology record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.technology.add(ctx.request.body);
  },

  /**
   * Update a/an technology record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.technology.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an technology record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.technology.remove(ctx.params);
  }
};
