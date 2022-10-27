// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'num2Cn',
    },
  ],
  plugins: [
    terser(),
    typescript()
  ]

};