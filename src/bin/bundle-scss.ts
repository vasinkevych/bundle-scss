#!/usr/bin/env node

'use strict';

const app = require('commander');
const cfg = require('../../package.json');
const bundleScss = require('../index');

app
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

if ((app.mask && app.dest) || app.config) {
  bundleScss(app.mask, app.dest, app.sort, app.config);
} else {
  throw new Error(
    'Please check options: -m, -d. \nLooks like some of them are not specified'
  );
}
