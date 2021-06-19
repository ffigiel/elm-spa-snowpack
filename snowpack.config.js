// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    '.elm-spa': '/.elm-spa',
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  plugins: [
    'snowpack-plugin-elm',
  ],
  optimize: {
    bundle: true,
    sourcemap: false,
    splitting: false,
    treeshake: true,
    minify: true,
  },
  devOptions: {
    open: "none", // don't open a browser with the dev server
  },
  buildOptions: {
    out: "dist",
  },
};
