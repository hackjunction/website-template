'use strict';

/**
 * Socialmediaposts.js controller
 *
 * @description: A set of functions called "actions" for managing `Socialmediaposts`.
 */

module.exports = {

  /**
   * Retrieve socialmediaposts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.socialmediaposts.search(ctx.query);
    } else {
      return strapi.services.socialmediaposts.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a socialmediaposts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.socialmediaposts.fetch(ctx.params);
  },

  /**
   * Count socialmediaposts records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.socialmediaposts.count(ctx.query);
  },

  /**
   * Create a/an socialmediaposts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.socialmediaposts.add(ctx.request.body);
  },

  /**
   * Update a/an socialmediaposts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.socialmediaposts.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an socialmediaposts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.socialmediaposts.remove(ctx.params);
  }
};
