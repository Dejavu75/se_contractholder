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
        this.extraData = "";
    }
    static fromMicroservices(oRow) {
        const heartbeat = {
            mscode: oRow.mscode,
            instance: oRow.instance,
            status: oRow.status,
            version: oRow.version,
            expectedInterval: oRow.expectedInterval,
            url: oRow.url,
            action: "reading",
            serviceType: oRow.serviceType,
            createdAt: oRow.createdAt,
            updateAt: oRow.updatedAt,
            heartbeatAt: oRow.heartbeatAt
        };
        return heartbeat;
    }
    static fromBody(body) {
        const heartbeat = {
            mscode: body.mscode || "",
            instance: body.instance || "",
            status: (body === null || body === void 0 ? void 0 : body.status) || "",
            version: (body === null || body === void 0 ? void 0 : body.version) || 0,
            createdAt: (body === null || body === void 0 ? void 0 : body.createdAt) ? new Date(body.createdAt) : undefined,
            updateAt: (body === null || body === void 0 ? void 0 : body.updateAt) ? new Date(body.updateAt) : undefined,
            url: (body === null || body === void 0 ? void 0 : body.url) || "",
            expectedInterval: (body === null || body === void 0 ? void 0 : body.expectedInterval) || 0,
            action: body.action || "",
            serviceType: body.serviceType || "",
            heartbeatAt: (body === null || body === void 0 ? void 0 : body.heartbeatAt) ? new Date(body.heartbeatAt) : undefined,
            extraData: (body === null || body === void 0 ? void 0 : body.extraData) || ""
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
            serviceType: msIdentity.serviceType || "",
            extraData: msIdentity.extraData || ""
        };
        return heartbeat;
    }
}
exports.cnt_heartbeat = cnt_heartbeat;
