"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const healthmonitor_1 = require("./MS07/healthmonitor");
let cnt = new healthmonitor_1.cnt_heartbeat();
cnt.heartbeatAt = new Date();
cnt.expectedInterval = 10;
console.log(cnt);
console.log(cnt.down);
console.log(cnt.alert);
