const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// Add more module if needed
const appIncludes = [resolveApp("src"), resolveApp("../core/src")];

module.exports = function override(config, env) {
  config.resolve.alias["deepmerge$"] = "deepmerge/dist/umd.js";

  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== "ModuleScopePlugin"
  );

  config.module.rules[0].include = appIncludes;
  config.module.rules[1] = null;
  config.module.rules[2].oneOf[1].include = appIncludes;
  config.module.rules[2].oneOf[1].options.plugins = [
    require.resolve("babel-plugin-react-native-web")
  ].concat(config.module.rules[2].oneOf[1].options.plugins);
  config.module.rules = config.module.rules.filter(Boolean);

  config.plugins.push(
    new webpack.DefinePlugin({ __DEV__: env !== "production" })
  );

  return config;
};
