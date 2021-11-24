const path = require("path");

module.exports = {
  stories: [
    "../projects/syonet_eight_www/components/pages/index/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@www": path.resolve(__dirname, "../projects/syonet_eight_www"),
      "@design_system": path.resolve(
        __dirname,
        "../projects/syonet_eight_design_system"
      ),
    };
    return config;
  },
};
