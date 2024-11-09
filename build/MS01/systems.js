"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_system = void 0;
const uuid_1 = require("uuid");
class cnt_system {
    // Constructor with default values
    constructor(systemUUID = "", centralKey = "", systemKey = "", instance = "", localization = 0, systemName = "", systemType = "", instanceType = "", status = 0, devEnviroment = 0) {
        this.systemUUID = "";
        this.centralKey = "";
        this.systemKey = "";
        this.instance = "";
        this.localization = 0;
        this.systemName = "";
        this.systemType = "";
        this.instanceType = "";
        this.status = 0;
        this.devEnviroment = 0;
        this.systemUUID = systemUUID;
        this.centralKey = cnt_system.recrearcentraKey(centralKey, systemKey, instance, localization);
        this.systemKey = systemKey;
        this.instance = instance;
        this.localization = localization;
        this.systemName = systemName;
        this.systemType = systemType;
        this.instanceType = instanceType;
        this.status = status;
        this.devEnviroment = devEnviroment;
    }
    static fromSystemsData(oRow) {
        return new cnt_system(oRow.systemUUID, oRow.centralKey, oRow.systemKey, oRow.instance, oRow.localization, oRow.systemName, oRow.systemType, oRow.instanceType, oRow.status, oRow.devEnviroment);
    }
    static fromBody(body) {
        return new cnt_system(body.systemUUID || "", body.centralKey || "", body.systemKey || "", body.instance || "", body.localization || 0, body.systemName || "", body.systemType || "", body.instanceType || "", body.status || 1, body.devEnviroment || 0);
    }
    static fromEG(oEG) {
        return new cnt_system("", "", // Assuming centralKey is empty in fromEG
        oEG.id_sistema || "", oEG.subsistema || "", oEG.localization || 1, oEG.nombre || "", "GES", // default systemType in fromEG
        "op", // default instanceType in fromEG
        oEG.status || 1, oEG.dev || 0);
    }
    agesKeySistema() {
        return cnt_system.agesKeySistema(this.systemKey, this.instance, this.localization);
    }
    static agesKeySistema(systemKey, instance, localization) {
        return systemKey.trim() + " " + localization + " " + instance.trim();
    }
    recrearcentraKey() {
        this.centralKey = cnt_system.recrearcentraKey(this.centralKey, this.systemKey, this.instance, this.localization);
        return this.centralKey;
    }
    static recrearcentraKey(centralKey, systemKey, instance, localization) {
        return centralKey === "" ? systemKey + " " + instance + " " + (localization == 0 ? "" : localization) : centralKey;
    }
    asignarUUID() {
        this.systemUUID = cnt_system.asignarUUID(this.systemType, this.instanceType);
        return this.systemUUID;
    }
    static asignarUUID(systemType, instanceType) {
        return (0, uuid_1.v4)();
    }
}
exports.cnt_system = cnt_system;
