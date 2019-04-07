'use strict';

/**
 * Mediafield.js controller
 *
 * @description: A set of functions called "actions" for managing `Mediafield`.
 */

module.exports = {

  /**
   * Retrieve mediafield records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.mediafield.search(ctx.query);
    } else {
      return strapi.services.mediafield.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a mediafield record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.mediafield.fetch(ctx.params);
  },

  /**
   * Count mediafield records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.mediafield.count(ctx.query);
  },

  /**
   * Create a/an mediafield record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mediafield.add(ctx.request.body);
  },

  /**
   * Update a/an mediafield record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mediafield.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mediafield record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mediafield.remove(ctx.params);
  }
};
