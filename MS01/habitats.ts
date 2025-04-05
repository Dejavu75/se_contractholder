import { v4 as uuidv4 } from 'uuid';
export type AccessType = "local" | "external" | "vpn" | "api";
export type sch_habitat = {
    habitatUUID: string;
    systemUUID: string;
    status: number;
    devEnviroment: number;
    habitatName: string;
    accessKey: string;
};

export type sch_accesspoint = {
    accessPointUUID: string;
    habitatUUID: string;
    url: string;
    accessType: AccessType;
    description: string;
};

export class cnt_habitat implements sch_habitat {
    habitatUUID: string = "";
    systemUUID: string = "";
    status: number = 1;
    devEnviroment: number = 0;
    habitatName: string = "";
    accessKey: string = "";

    constructor(
        habitatUUID: string = "",
        systemUUID: string = "",
        status: number = 1,
        devEnviroment: number = 0,
        habitatName: string = "",
        accessKey: string = ""
    ) {
        this.habitatUUID = habitatUUID;
        this.systemUUID = systemUUID;
        this.status = status;
        this.devEnviroment = devEnviroment;
        this.habitatName = habitatName;
        this.accessKey = accessKey;
    }

    static fromRow(row: any): cnt_habitat {
        return new cnt_habitat(
            row.habitatUUID || "",
            row.systemUUID || "",
            row.status || 1,
            row.devEnviroment || 0,
            row.habitatName || "",
            row.accessKey || ""
        );
    }

    static fromResults(rows: any[]): cnt_habitat[] {
        return rows.map(r => cnt_habitat.fromRow(r));
    }

    static fromBody(body: any): cnt_habitat {
        return new cnt_habitat(
            body.habitatUUID || "",
            body.systemUUID || "",
            body.status || 1,
            body.devEnviroment || 0,
            body.habitatName || "",
            body.accessKey || ""
        );
    }

    asignarUUID(): string {
        this.habitatUUID = uuidv4();
        return this.habitatUUID;
    }
}
export class cnt_accesspoint implements sch_accesspoint {
    accessPointUUID: string = "";
    habitatUUID: string = "";
    url: string = "";
    accessType: AccessType = "external";
    description: string = "";

    constructor(
        accessPointUUID: string = "",
        habitatUUID: string = "",
        url: string = "",
        accessType: AccessType = "external",
        description: string = ""
    ) {
        this.accessPointUUID = accessPointUUID;
        this.habitatUUID = habitatUUID;
        this.url = url;
        this.accessType = accessType;
        this.description = description;
    }

    static fromRow(row: any): cnt_accesspoint {
        return new cnt_accesspoint(
            row.accessPointUUID || "",
            row.habitatUUID || "",
            row.url || "",
            row.accessType || "external",
            row.description || ""
        );
    }

    static fromResults(rows: any[]): cnt_accesspoint[] {
        return rows.map(r => cnt_accesspoint.fromRow(r));
    }

    static fromBody(body: any): cnt_accesspoint {
        return new cnt_accesspoint(
            body.accessPointUUID || "",
            body.habitatUUID || "",
            body.url || "",
            body.accessType || "external",
            body.description || ""
        );
    }

    asignarUUID(): string {
        this.accessPointUUID = uuidv4();
        return this.accessPointUUID;
    }
}
