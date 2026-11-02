const assert = require('node:assert/strict');
const test = require('node:test');

test('the shipped contract entrypoint loads and retains its public exports', () => {
  const api = require('../build/index.js');
  assert.deepEqual(Object.keys(api).sort(), [
    'Cnt_ProcessResponse', 'GeneralEndpoints', 'PermissionStatus', 'PermissionType',
    'ProcessResultType', 'cnt_AccountHolder', 'cnt_ECEndpoints', 'cnt_HAEndpoints',
    'cnt_MSEndpoints', 'cnt_Permission', 'cnt_SessionHolder', 'cnt_accesspoint',
    'cnt_backup', 'cnt_configbase', 'cnt_dbconnection', 'cnt_dbconnectiontable',
    'cnt_errorLog', 'cnt_habitat', 'cnt_heartbeat', 'cnt_hello',
    'cnt_installation_key_lookup', 'cnt_installation_system', 'cnt_mantErrorHolder',
    'cnt_mantenimientoHolder', 'cnt_system', 'cnt_uniquenessErrorHolder',
    'cnt_uniquenessHolder', 'heartbeatServiceType', 'modelBase', 'sessionStatus'
  ].sort());
});

test('the lock cannot install removed configuration aliases or runtime compilers', () => {
  const lock = require('../package-lock.json');
  for (const [location, entry] of Object.entries(lock.packages)) {
    assert.doesNotMatch(location, /node_modules\/(?:se_configbase|@types\/se_configbase|nodemailer)$/);
    if (/node_modules\/(?:ts-node-dev|tsc)$/.test(location)) assert.equal(entry.dev, true);
  }
});
