import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import postcssmodules from 'postcss-modules';

export const config: Config = {
  namespace: 'jam-ui',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],

  globalStyle: 'src/globals/styles.scss',

  plugins: [
    sass(),
    postcss({
      plugins: [
        postcssmodules({
          camelCase: true,
          generateScopedName: '[name]_[local]__[hash:base64:5]',
        }),
      ],
    }),
  ],

  copy: [
    { src: 'components/common/fonts/jam-font/*' },
  ]
};
