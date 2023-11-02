const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    publicPath: "auto", // we setup the `publicHost` in `angular.json` file
    uniqueName: "sales",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    // Allow output javascript files as module source type.
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "sales",
      filename: "remoteEntry.js",
      //   library: {
      //     // because Angular v14 will output ESModule
      //     type: "module",
      //   },
      exposes: {
        "./SalesBoot": "/src/bootstrap",
      },
      /**
       * shared can be an object of type SharedConfig
       * you can change this to select something can be shared
       */
    }),
  ],
};
