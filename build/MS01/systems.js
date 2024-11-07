"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_systems = void 0;
class cnt_systems {
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
        this.centralKey = centralKey;
        this.systemKey = systemKey;
        this.instance = instance;
        this.localization = localization;
        this.systemName = systemName;
        this.systemType = systemType;
        this.instanceType = instanceType;
    }
    static fromSystemsData(oRow) {
        const systems = {
            systemUID: oRow.systemUID,
            centralKey: oRow.centralKey,
            systemKey: oRow.systemKey,
            instance: oRow.instance,
            localization: oRow.localization,
            systemName: oRow.systemName,
            systemType: oRow.systemType,
            instanceType: oRow.instanceType
        };
        return systems;
    }
    static fromBody(body) {
        const systems = {
            systemUID: body.systemUID || "",
            centralKey: body.centralKey || "",
            systemKey: body.systemKey || "",
            instance: body.instance || "",
            localization: body.localization || 0,
            systemName: body.systemName || "",
            systemType: body.systemType || "",
            instanceType: body.instanceType || ""
        };
        return systems;
    }
}
exports.cnt_systems = cnt_systems;
