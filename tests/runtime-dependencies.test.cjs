const assert = require('node:assert/strict');
const test = require('node:test');
const pkg = require('../package.json');

test('runtime contracts do not install development runners or the fake tsc shim', () => {
  assert.equal(pkg.dependencies['ts-node-dev'], undefined);
  assert.equal(pkg.dependencies.tsc, undefined);
  assert.equal(pkg.devDependencies['ts-node-dev'], '^2.0.0');
  assert.ok(pkg.devDependencies.typescript);
  assert.equal(pkg.scripts.tsc, 'node node_modules/typescript/bin/tsc');
  assert.equal(pkg.scripts.dev, 'ts-node-dev index.ts');
});

test('unused configuration aliases cannot reintroduce the runtime Git cycle', () => {
  assert.equal(pkg.dependencies.se_configbase, undefined);
  assert.equal(pkg.devDependencies['@types/se_configbase'], undefined);
});
