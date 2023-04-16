module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  compiler: {
    emotion: {
      autoLabel: 'dev-only',
      labelFormat: '[local]',
    },
  },
};
