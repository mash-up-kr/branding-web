import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  html: {
    /** 1rem = 10px */
    fontSize: '62.5%',
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './app/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
    './ui/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  /** @see {@link https://panda-css.com/docs/guides/minimal-setup#removing-default-tokens} */
  presets: [],
  theme: {
    tokens: {
      colors: {
        'gray.100': { value: '#EBEFF9' },
        'gray.800': { value: '#383E4C' },
        'gray.900': { value: '#2C3037' },
        'gray.600': { value: '#686F7E' },
        'brand.500': { value: '#6A36FF' },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss,
  jsxFramework: 'react',
});
