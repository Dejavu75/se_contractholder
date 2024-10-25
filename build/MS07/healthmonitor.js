"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_heartbeat = void 0;
class cnt_heartbeat {
    get alert() {
        if (this.heartbeatAt && this.expectedInterval) {
            return new Date(this.heartbeatAt.getTime() + this.expectedInterval * this.alertMissed * 1000);
        }
        return null;
    }
    get down() {
        if (this.heartbeatAt && this.expectedInterval) {
            return new Date(this.heartbeatAt.getTime() + this.expectedInterval * this.downMissed * 1000);
        }
        return null;
    }
    // Constructor con valores por defecto
    constructor(mscode = "", instance = "", status = "", version, createdAt, updateAt, url = "", expectedInterval = 0, action = "", serviceType = "", heartbeatAt, extraData = "") {
        this.mscode = "";
        this.instance = "";
        this.status = "";
        this.url = "";
        this.expectedInterval = 0;
        this.action = "";
        this.serviceType = "";
        this.extraData = "";
        this.downMissed = 3;
        this.alertMissed = 2;
        this.mscode = mscode;
        this.instance = instance;
        this.status = status;
        this.version = version;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.url = url;
        this.expectedInterval = expectedInterval;
        this.action = action;
        this.serviceType = serviceType;
        this.heartbeatAt = heartbeatAt;
        this.extraData = extraData;
    }
    static fromMicroservices(oRow) {
        var _a, _b, _c, _d, _e;
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
            heartbeatAt: oRow.heartbeatAt,
            down: (_a = oRow.down) !== null && _a !== void 0 ? _a : null,
            downMissed: (_b = oRow.downMissed) !== null && _b !== void 0 ? _b : 3,
            alert: (_c = oRow.alert) !== null && _c !== void 0 ? _c : null,
            alertMissed: (_d = oRow.alertMissed) !== null && _d !== void 0 ? _d : 2,
            extraData: (_e = oRow.extraData) !== null && _e !== void 0 ? _e : ""
        };
        return heartbeat;
    }
    static fromBody(body) {
        var _a, _b, _c, _d;
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
            extraData: (body === null || body === void 0 ? void 0 : body.extraData) || "",
            down: (_a = body === null || body === void 0 ? void 0 : body.down) !== null && _a !== void 0 ? _a : null,
            downMissed: (_b = body === null || body === void 0 ? void 0 : body.downMissed) !== null && _b !== void 0 ? _b : 3,
            alert: (_c = body === null || body === void 0 ? void 0 : body.alert) !== null && _c !== void 0 ? _c : null,
            alertMissed: (_d = body === null || body === void 0 ? void 0 : body.alertMissed) !== null && _d !== void 0 ? _d : 2
        };
        return heartbeat;
    }
    static fromMSIdentity(msIdentity) {
        var _a, _b, _c, _d;
        const heartbeat = {
            mscode: msIdentity.mscode,
            instance: msIdentity.msinstance,
            version: msIdentity.version || 0,
            url: msIdentity.url || "",
            expectedInterval: msIdentity.expectedInterval || 0,
            action: "",
            status: "",
            serviceType: msIdentity.serviceType || "",
            extraData: msIdentity.extraData || "",
            down: (_a = msIdentity.down) !== null && _a !== void 0 ? _a : null,
            downMissed: (_b = msIdentity.downMissed) !== null && _b !== void 0 ? _b : 3,
            alert: (_c = msIdentity.alert) !== null && _c !== void 0 ? _c : null,
            alertMissed: (_d = msIdentity.alertMissed) !== null && _d !== void 0 ? _d : 2
        };
        return heartbeat;
    }
}
exports.cnt_heartbeat = cnt_heartbeat;
