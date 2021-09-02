// // import { terser } from 'rollup-plugin-terser'
// import { babel } from "@rollup/plugin-babel";
// // import resolve from '@rollup/plugin-node-resolve'
// // import commonjs from '@rollup/plugin-commonjs'

// const output = (input, file, format, plugins) => ({
//   input,
//   output: {
//     name: file,
//     file,
//     format,
//   },
//   external: ["pbf"],
//   plugins,
// });

// export default [
//   output(
//     "./src/main.js",
//     "./dist/mapbox-gl-arcgis-featureserver.min.js",
//     "umd",
//     [babel({ babelHelpers: "bundled" })]
//   ),
// ];

import { babel } from "@rollup/plugin-babel";

const config = {
  input: "src/main.js",
  output: {
    file: "./dist/mapbox-gl-arcgis-featureserver.min.js",
    format: "esm",
  },
  plugins: [babel({ exclude: "node_modules/**", extensions: [".js", ".ts"] })],
};

export default config;
