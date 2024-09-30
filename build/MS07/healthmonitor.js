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
        const certificado = {
            id: body.id || "",
            status: body.status || "",
            timestamp: body.timestamp || new Date().toDateString(),
            url: body.url || "",
            action: body.certificado || ""
        };
        return certificado;
    }
}
exports.cnt_heartbeat = cnt_heartbeat;
