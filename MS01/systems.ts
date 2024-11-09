import { v4 as uuidv4 } from 'uuid';

export type sch_system = {
    systemUUID: string;
    centralKey: string;
    systemKey: string;
    instance: string;
    localization: number;
    systemName: string;
    systemType: string;
    instanceType: string;
    status: number;
    devEnviroment: number;
};

export class cnt_system implements sch_system {
    systemUUID: string = "";
    centralKey: string = "";
    systemKey: string = "";
    instance: string = "";
    localization: number = 0;
    systemName: string = "";
    systemType: string = "";
    instanceType: string = "";
    status: number = 0;
    devEnviroment: number = 0;
    


    // Constructor with default values
    constructor(
        systemUUID: string = "",
        centralKey: string = "",
        systemKey: string = "",
        instance: string = "",
        localization: number = 0,
        systemName: string = "",
        systemType: string = "",
        instanceType: string = "",
        status: number = 0,
        devEnviroment: number = 0
    ) {
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


    static fromSystemsData(oRow: any): cnt_system {
        return new cnt_system(
            oRow.systemUUID,
            oRow.centralKey,
            oRow.systemKey,
            oRow.instance,
            oRow.localization,
            oRow.systemName,
            oRow.systemType,
            oRow.instanceType,
            oRow.status,
            oRow.devEnviroment
        );
    }

    static fromBody(body: any): cnt_system {
        return new cnt_system(
            body.systemUUID || "",
            body.centralKey || "",
            body.systemKey || "",
            body.instance || "",
            body.localization || 0,
            body.systemName || "",
            body.systemType || "",
            body.instanceType || "",
            body.status || 0,
            body.devEnviroment || 0
        );
    }

    static fromEG(oEG: any): cnt_system {
        return new cnt_system(
            "",
            "", // Assuming centralKey is empty in fromEG
            oEG.id_sistema || "",
            oEG.subsistema || "",
            oEG.localization || 1,
            oEG.nombre || "",
            "GES", // default systemType in fromEG
            "op",   // default instanceType in fromEG
            oEG.status || 0,
        );
    }
    agesKeySistema(): string {
        return cnt_system.agesKeySistema(this.systemKey, this.instance, this.localization);
    }
    static agesKeySistema(systemKey: string, instance: string, localization: number): string {
        return systemKey.trim() + " " + localization + " " + instance.trim();
    }
    recrearcentraKey(): string {
        this.centralKey= cnt_system.recrearcentraKey(this.centralKey, this.systemKey, this.instance, this.localization);
        return this.centralKey;
    }
    static recrearcentraKey(centralKey: string, systemKey: string, instance: string, localization: number): string {
        return centralKey === "" ? systemKey + " "+ instance + " " + (localization==0 ? "" : localization) : centralKey;
    }
    asignarUID(): string {
        this.systemUUID= cnt_system.asignarUID(this.systemType, this.instanceType);
        return this.systemUUID
    }
    static asignarUID(systemType: string, instanceType:string): string {
        return  uuidv4()
    }
}


