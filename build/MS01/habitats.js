"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_accesspoint = exports.cnt_habitat = void 0;
const uuid_1 = require("uuid");
class cnt_habitat {
    constructor(habitatUUID = "", systemUUID = "", status = "disabled", devEnviroment = 0, habitatName = "", accessKey = "") {
        this.habitatUUID = "";
        this.systemUUID = "";
        this.status = "disabled";
        this.devEnviroment = 0;
        this.habitatName = "";
        this.accessKey = "";
        this.habitatUUID = habitatUUID;
        this.systemUUID = systemUUID;
        this.status = status;
        this.devEnviroment = devEnviroment;
        this.habitatName = habitatName;
        this.accessKey = accessKey;
    }
    static fromRow(row) {
        return new cnt_habitat(row.habitatUUID || "", row.systemUUID || "", row.status || "disabled", row.devEnviroment || 0, row.habitatName || "", row.accessKey || "");
    }
    static fromResults(rows) {
        return rows.map(r => cnt_habitat.fromRow(r));
    }
    static fromBody(body) {
        return new cnt_habitat(body.habitatUUID || "", body.systemUUID || "", body.status || "disabled", body.devEnviroment || 0, body.habitatName || "", body.accessKey || "");
    }
    asignarUUID() {
        this.habitatUUID = (0, uuid_1.v4)();
        return this.habitatUUID;
    }
}
exports.cnt_habitat = cnt_habitat;
class cnt_accesspoint {
    constructor(accessPointUUID = "", habitatUUID = "", url = "", accessType = "external", description = "", status = "disabled") {
        this.accessPointUUID = "";
        this.habitatUUID = "";
        this.url = "";
        this.accessType = "external";
        this.description = "";
        this.status = "disabled";
        this.accessPointUUID = accessPointUUID;
        this.habitatUUID = habitatUUID;
        this.url = url;
        this.accessType = accessType;
        this.description = description;
        this.status = status;
    }
    static fromRow(row) {
        return new cnt_accesspoint(row.accessPointUUID || "", row.habitatUUID || "", row.url || "", row.accessType || "external", row.description || "", row.status || "disabled");
    }
    static fromResults(rows) {
        return rows.map(r => cnt_accesspoint.fromRow(r));
    }
    static fromBody(body) {
        return new cnt_accesspoint(body.accessPointUUID || "", body.habitatUUID || "", body.url || "", body.accessType || "external", body.description || "", body.status || "disabled");
    }
    asignarUUID() {
        this.accessPointUUID = (0, uuid_1.v4)();
        return this.accessPointUUID;
    }
}
exports.cnt_accesspoint = cnt_accesspoint;
