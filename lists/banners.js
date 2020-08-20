let { Relationship, File } = require("@keystonejs/fields");
let { fileAdapter } = require("../store/index");
let { public } = require("./config/access");

module.exports = {
  ref: "Banner",
  config: {
    fields: {
      file: {
        type: File,
        adapter: fileAdapter,
        hooks: {
          beforeChange: ({ existingItem = {} }) => {
            if (existingItem) fileAdapter.delete(existingItem);
          },
        },
        isRequired: true,
      },
      // create by
      seller: {
        type: Relationship,
        ref: "User",
      },
    },

    hooks: {
      afterDelete: async ({ existingItem = {} }) => {
        fileAdapter.delete(existingItem);
      },
      resolveInput: async ({ resolvedData, context }) => {
        if (resolvedData.file && !resolvedData.name)
          resolvedData.name = resolvedData.file.originalFilename;
        if (context.authedItem && !context.authedItem.isAdmin)
          resolvedData.seller = context.authedItem.id;
        return resolvedData;
      },
    },
    label: "Bìa",
    access: public,
  },
};
