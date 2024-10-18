"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_configbase = void 0;
class cnt_configbase {
    constructor() {
        this.mscode = "";
        this.instancia = "";
        this.msdb = "";
        this.version = 0;
    }
    static fromBody(body) {
        const configbase = {
            mscode: (body === null || body === void 0 ? void 0 : body.mscode) || "",
            instancia: (body === null || body === void 0 ? void 0 : body.instancia) || "",
            msdb: (body === null || body === void 0 ? void 0 : body.msdb) || "",
            version: (body === null || body === void 0 ? void 0 : body.version) || 0
        };
        return configbase;
    }
}
exports.cnt_configbase = cnt_configbase;
