'use strict';

/**
 * Interview.js controller
 *
 * @description: A set of functions called "actions" for managing `Interview`.
 */

module.exports = {

  /**
   * Retrieve interview records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.interview.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a interview record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.interview.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an interview record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.interview.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an interview record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.interview.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an interview record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.interview.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
