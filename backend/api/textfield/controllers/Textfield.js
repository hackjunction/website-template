'use strict';

/**
 * Textfield.js controller
 *
 * @description: A set of functions called "actions" for managing `Textfield`.
 */

module.exports = {

  /**
   * Retrieve textfield records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.textfield.search(ctx.query);
    } else {
      return strapi.services.textfield.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a textfield record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.textfield.fetch(ctx.params);
  },

  /**
   * Count textfield records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.textfield.count(ctx.query);
  },

  /**
   * Create a/an textfield record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.textfield.add(ctx.request.body);
  },

  /**
   * Update a/an textfield record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.textfield.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an textfield record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.textfield.remove(ctx.params);
  }
};
