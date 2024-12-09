import type { NextConfig } from 'next';

// import {
//   ExperimentalConfig,
//   NextJsWebpackConfig,
// } from 'next/dist/server/config-shared';

// const experimentalConfig: ExperimentalConfig = {
//   turbo: {
//     moduleIdStrategy: 'named',
//     rules: {
//       '*.svg': {
//         loaders: ['@svgr/webpack'],
//         as: '*.ts',
//       },
//     },
//   },
// };

const nextConfig: NextConfig = {
  // experimental: experimentalConfig,
  // /* config options here */
  // webpack(config: any): NextJsWebpackConfig {
  //   config.infrastructureLogging = {
  //     level: 'error',
  //   };
  //   interface FileLoaderRule {
  //     test?: RegExp;
  //     issuer?: any;
  //     exclude?: RegExp;
  //     resourceQuery?: any;
  //   }
  //   const fileLoaderRule: FileLoaderRule | undefined = config.module.rules.find(
  //     (rule: FileLoaderRule) => rule.test?.test?.('.svg'),
  //   );
  //   if (fileLoaderRule) {
  //     // Exclude SVGs from the existing rule
  //     fileLoaderRule.exclude = /\.svg$/i;
  //     // Add new rule for handling SVGs with `@svgr/webpack`
  //     config.module.rules.push({
  //       test: /\.svg$/i,
  //       issuer: fileLoaderRule.issuer,
  //       resourceQuery: { not: [/url/] },
  //       use: ['@svgr/webpack'],
  //     });
  //     // Add or adjust rule for using SVGs as URLs
  //     config.module.rules.push({
  //       ...fileLoaderRule,
  //       test: /\.svg$/i,
  //       resourceQuery: /url/,
  //     });
  //   }
  //   return config;
  // },
};

export default nextConfig;
