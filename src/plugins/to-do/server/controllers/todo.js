"use strict";

module.exports = {
    async find(ctx) {
        try {
            return await strapi.plugin("to-do").service("todo").find(ctx.query);
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async delete(ctx) {
        try {
            ctx.body = await strapi
                .plugin("to-do")
                .service("todo")
                .delete(ctx.params.id);
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async create(ctx) {
        try {
            ctx.body = await strapi
                .plugin("to-do")
                .service("todo")
                .create(ctx.request.body);
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async update(ctx) {
        try {
            ctx.body = await strapi
                .plugin("to-do")
                .service("todo")
                .update(ctx.params.id, ctx.request.body);
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async toggle(ctx) {
        try {
            ctx.body = await strapi
                .plugin("to-do")
                .service("todo")
                .toggle(ctx.params.id);
        } catch (err) {
            ctx.throw(500, err);
        }
    },
};
