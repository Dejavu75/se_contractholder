import { cnt_heartbeat } from "./MS07/healthmonitor";

let cnt: cnt_heartbeat = new cnt_heartbeat();
cnt.heartbeatAt = new Date();
cnt.expectedInterval = 10;
console.log(cnt);
console.log(cnt.down);
console.log(cnt.alert);