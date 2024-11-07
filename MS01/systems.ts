export type sch_system = {
    systemUID: string;
    centralKey: string;
    systemKey: string;
    instance: string;
    localization: number;
    systemName: string;
    systemType: string;
    instanceType: string;
};

export class cnt_system implements sch_system {
    systemUID: string = "";
    centralKey: string = "";
    systemKey: string = "";
    instance: string = "";
    localization: number = 0;
    systemName: string = "";
    systemType: string = "";
    instanceType: string = "";

    // Constructor with default values
    constructor(
        systemUID: string = "",
        centralKey: string = "",
        systemKey: string = "",
        instance: string = "",
        localization: number = 0,
        systemName: string = "",
        systemType: string = "",
        instanceType: string = ""
    ) {
        this.systemUID = systemUID;
        this.centralKey = centralKey;
        this.systemKey = systemKey;
        this.instance = instance;
        this.localization = localization;
        this.systemName = systemName;
        this.systemType = systemType;
        this.instanceType = instanceType;
    }

    static fromSystemsData(oRow: any): cnt_system {
        const systems: cnt_system = {
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

    static fromBody(body: any): cnt_system {
        const systems: cnt_system = {
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
