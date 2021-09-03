import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = {
  input: 'src/main.js',
  output: {
    file: './dist/mapbox-gl-arcgis-featureserver.min.js',
    format: 'esm',
  },
  external: ['pbf'],
  plugins: [
    commonjs(),
    babel({ exclude: 'node_modules/**', extensions: ['.js'], babelHelpers: 'bundled' }),
    resolve(),
    terser(),
  ],
};

export default config;
