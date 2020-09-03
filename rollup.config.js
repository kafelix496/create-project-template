import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { string } from 'rollup-plugin-string';

const dist = 'dist';
const bundle = 'customLibrary';

const common = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
    string({
      include: '**/*.css',
    }),
  ],
};

const outputs = [{
  file: `${dist}/${bundle}.esm.js`,
  format: 'esm',
}, {
  file: `${dist}/${bundle}.js`,
  format: 'umd',
  name: `${bundle}`,
  globals: {
    react: 'React',
  },
}];

export default outputs.map((output) => ({
  ...common,
  output,
}));
