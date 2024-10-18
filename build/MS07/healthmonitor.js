"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_heartbeat = void 0;
class cnt_heartbeat {
    constructor() {
        this.mscode = "";
        this.instance = "";
        this.status = "";
        this.url = "";
        this.expectedInterval = 0;
        this.action = "";
        this.serviceType = "";
    }
    static fromBody(body) {
        const heartbeat = {
            mscode: body.mscode || "",
            instance: body.instance || "",
            status: (body === null || body === void 0 ? void 0 : body.status) || "",
            version: (body === null || body === void 0 ? void 0 : body.version) || 0,
            created_at: (body === null || body === void 0 ? void 0 : body.created_at) ? new Date(body.created_at) : undefined,
            update_at: (body === null || body === void 0 ? void 0 : body.update_at) ? new Date(body.update_at) : undefined,
            url: (body === null || body === void 0 ? void 0 : body.url) || "",
            expectedInterval: (body === null || body === void 0 ? void 0 : body.expectedIntervar) || 0,
            action: body.action || "",
            serviceType: body.type || ""
        };
        return heartbeat;
    }
    static fromMSIdentity(msIdentity) {
        const heartbeat = {
            mscode: msIdentity.mscode,
            instance: msIdentity.msinstance,
            version: msIdentity.version || 0,
            url: msIdentity.url || "",
            expectedInterval: msIdentity.expectedInterval || 0,
            action: "",
            status: "",
            serviceType: msIdentity.serviceType || ""
        };
        return heartbeat;
    }
}
exports.cnt_heartbeat = cnt_heartbeat;
