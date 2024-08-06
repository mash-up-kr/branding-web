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
        'gray.50': { value: '#F8F7FC' },
        'gray.100': { value: '#EBEFF9' },
        'gray.500': { value: '#959CAC' },
        'gray.600': { value: '#686F7E' },
        'gray.800': { value: '#383E4C' },
        'gray.900': { value: '#2C3037' },
        'gray.950': { value: '#25272E' },
        'red.100': { value: '#FFEBEE' },
        'brand.100': { value: '#F5F1FF' },
        'brand.200': { value: '#E7DEFF' },
        'brand.300': { value: '#CDBFF6' },
        'brand.500': { value: '#6A36FF' },
      },
    },
    keyframes: {
      move: {
        '0%': {
          transform: 'translateX(-300%)',
        },
        '100%': {
          transform: 'translateX(300%)',
        },
      },
      fadeIn: {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
      expand: {
        '0%': {
          transform: 'scale(1)',
        },
        '50%': {
          transform: 'scale(0.97)',
        },
        '100%': {
          transform: 'scale(1.03)',
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss,
  jsxFramework: 'react',
});
