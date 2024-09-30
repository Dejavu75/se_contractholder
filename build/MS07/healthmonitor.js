"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_heartbeat = void 0;
class cnt_heartbeat {
    constructor() {
        this.id = "";
        this.status = "";
        this.timestamp = "";
        this.url = "";
        this.action = "";
    }
    static fromBody(body) {
        const heartbeat = {
            id: (body === null || body === void 0 ? void 0 : body.id) || "",
            status: (body === null || body === void 0 ? void 0 : body.status) || "",
            timestamp: (body === null || body === void 0 ? void 0 : body.timestamp) || new Date().toDateString(),
            url: (body === null || body === void 0 ? void 0 : body.url) || "",
            action: (body === null || body === void 0 ? void 0 : body.certificado) || ""
        };
        return heartbeat;
    }
}
exports.cnt_heartbeat = cnt_heartbeat;
