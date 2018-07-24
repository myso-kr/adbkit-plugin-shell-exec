import Promise from 'bluebird';

import ADB from 'adbkit';
import Client from 'adbkit/lib/adb/client';

Client.prototype.shellExec = async function(...args) {
  return this.shell(...args).then(ADB.util.readAll).then((resp)=>resp.toString().trim());
}