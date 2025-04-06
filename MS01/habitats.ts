import { v4 as uuidv4 } from 'uuid';
export type APAccessType = "local" | "external" | "vpn" | "api";
export type HAStatusType = "enabled" | "disabled";

export type sch_habitat = {
    habitatUUID: string;
    systemUUID: string;
    status: HAStatusType;
    devEnviroment: number;
    habitatName: string;
    accessKey: string;
};
export type sch_accesspoint = {
    accessPointUUID: string;
    habitatUUID: string;
    url: string;
    accessType: APAccessType;
    description: string;
    status: HAStatusType;
};

export class cnt_habitat implements sch_habitat {
    habitatUUID: string = "";
    systemUUID: string = "";
    status: HAStatusType = "disabled";
    devEnviroment: number = 0;
    habitatName: string = "";
    accessKey: string = "";

    constructor(
        habitatUUID: string = "",
        systemUUID: string = "",
        status: HAStatusType = "disabled",
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
            row.status || "disabled",
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
            body.status || "disabled",
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
    accessType: APAccessType = "external";
    description: string = "";
    status: HAStatusType = "disabled";

    constructor(
        accessPointUUID: string = "",
        habitatUUID: string = "",
        url: string = "",
        accessType: APAccessType = "external",
        description: string = "",
        status: HAStatusType = "disabled"
    ) {
        this.accessPointUUID = accessPointUUID;
        this.habitatUUID = habitatUUID;
        this.url = url;
        this.accessType = accessType;
        this.description = description;
        this.status = status;
    }

    static fromRow(row: any): cnt_accesspoint {
        return new cnt_accesspoint(
            row.accessPointUUID || "",
            row.habitatUUID || "",
            row.url || "",
            row.accessType || "external",
            row.description || "",
            row.status || "disabled"
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
            body.description || "",
            body.status || "disabled"
        );
    }

    asignarUUID(): string {
        this.accessPointUUID = uuidv4();
        return this.accessPointUUID;
    }
}

