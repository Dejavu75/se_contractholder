"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_heartbeat = void 0;
class cnt_heartbeat {
    constructor() {
        this.id = "";
        this.status = "";
        this.fecha = "";
        this.url = "";
        this.action = "";
    }
    static fromBody(body) {
        const heartbeat = {
            id: (body === null || body === void 0 ? void 0 : body.id) || "",
            status: (body === null || body === void 0 ? void 0 : body.status) || "",
            fecha: (body === null || body === void 0 ? void 0 : body.fecha) || new Date(),
            url: (body === null || body === void 0 ? void 0 : body.url) || "",
            action: (body === null || body === void 0 ? void 0 : body.certificado) || ""
        };
        return heartbeat;
    }
}
exports.cnt_heartbeat = cnt_heartbeat;
