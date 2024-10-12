"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_configbase = void 0;
class cnt_configbase {
    constructor() {
        this.mscode = "";
        this.instancia = "";
        this.database = "";
        this.version = 0;
    }
    static fromBody(body) {
        const configbase = {
            mscode: (body === null || body === void 0 ? void 0 : body.mscode) || "",
            instancia: (body === null || body === void 0 ? void 0 : body.instancia) || "",
            database: (body === null || body === void 0 ? void 0 : body.database) || "",
            version: (body === null || body === void 0 ? void 0 : body.version) || 0
        };
        return configbase;
    }
}
exports.cnt_configbase = cnt_configbase;
