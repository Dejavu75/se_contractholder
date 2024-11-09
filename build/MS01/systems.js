"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_system = void 0;
const uuid_1 = require("uuid");
class cnt_system {
    // Constructor with default values
    constructor(systemUID = "", centralKey = "", systemKey = "", instance = "", localization = 0, systemName = "", systemType = "", instanceType = "") {
        this.systemUID = "";
        this.centralKey = "";
        this.systemKey = "";
        this.instance = "";
        this.localization = 0;
        this.systemName = "";
        this.systemType = "";
        this.instanceType = "";
        this.systemUID = systemUID;
        this.centralKey = cnt_system.recrearcentraKey(centralKey, systemKey, instance, localization);
        this.systemKey = systemKey;
        this.instance = instance;
        this.localization = localization;
        this.systemName = systemName;
        this.systemType = systemType;
        this.instanceType = instanceType;
    }
    static fromSystemsData(oRow) {
        return new cnt_system(oRow.systemUID, oRow.centralKey, oRow.systemKey, oRow.instance, oRow.localization, oRow.systemName, oRow.systemType, oRow.instanceType);
    }
    static fromBody(body) {
        return new cnt_system(body.systemUID || "", body.centralKey || "", body.systemKey || "", body.instance || "", body.localization || 0, body.systemName || "", body.systemType || "", body.instanceType || "");
    }
    static fromEG(oEG) {
        return new cnt_system("", "", // Assuming centralKey is empty in fromEG
        oEG.id_sistema || "", oEG.subsistema || "", oEG.localization || 0, oEG.nombre || "", "GES", // default systemType in fromEG
        "op" // default instanceType in fromEG
        );
    }
    agesKeySistema() {
        return cnt_system.agesKeySistema(this.systemKey, this.instance, this.localization);
    }
    static agesKeySistema(systemKey, instance, localization) {
        return systemKey.trim() + " " + localization + " " + instance.trim();
    }
    recrearcentraKey() {
        return cnt_system.recrearcentraKey(this.centralKey, this.systemKey, this.instance, this.localization);
    }
    static recrearcentraKey(centralKey, systemKey, instance, localization) {
        return centralKey === "" ? systemKey + instance + localization : centralKey;
    }
    asignarUID() {
        return cnt_system.asignarUID(this.systemType, this.instanceType);
    }
    static asignarUID(systemType, instanceType) {
        return (0, uuid_1.v3)(systemType, instanceType);
    }
}
exports.cnt_system = cnt_system;
