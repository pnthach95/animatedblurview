const { getDefaultConfig } = require('@react-native/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

module.exports = withUniwindConfig(
  { ...config, resolver: { ...config.resolver, blockList: /\b.yaml/ } },
  {
    // relative path to your global.css file (from previous step)
    cssEntryFile: './global.css',
    // (optional) path where we gonna auto-generate typings
    // defaults to project's root
    dtsFile: './uniwind-types.d.ts',
  },
);
