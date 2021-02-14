const bundleScss = require('../dist/index');
const assert = require('assert');
const read = require('fs').readFileSync;
const write = require('fs').writeFileSync;
const rimraf = require('rimraf');

describe('bundle-scss for scss files', () => {
  rimraf.sync('./__tests__/result.scss');
  test('Should concatenate SCSS into one and compare', async() => {
    const compiled = await bundleScss(['./**/*.theme.scss'], './test/result.scss')
    console.log(compiled);
     expect(compiled).toEqual(read('./__tests__/compare.scss', 'utf8'))
  });
});
