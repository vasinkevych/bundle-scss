#!/usr/bin/env node

'use strict';

const program = require('commander');
const cfg = require('../../package.json');
const bundleScss = require('../index');

program
  .version(cfg.version)
  .option('-d, --dest <dest>', 'destination of bundled file')
  .option('-m, --mask <mask>', 'mask for files like ./src/**/*.theme.scss')
  .option(
    '-s, --sort <sort>',
    `Optional. Sort priority for files.
    Example: 'variable' - will pass all variables at beginning.
    Default priority ['theme-variable', 'variable', 'mixin']`
  )
  .option(
    '-c, --config',
    'true or false, try to get params from package.json or bundle-style.json'
  )
  .parse(process.argv);

const app = program.opts();

if (typeof app === 'object') {
  for (const key in app) {
    if (Object.prototype.hasOwnProperty.call(app, key)) {
      const element = app[key];
      console.log(`${key} ${element}`);
    }
  }
}
if ((app.mask && app.dest) || app.config) {
  bundleScss(app.mask, app.dest, app.sort, app.config);
} else {
  throw new Error(
    'Please check options: -m, -d. \nLooks like some of them are not specified'
  );
}
