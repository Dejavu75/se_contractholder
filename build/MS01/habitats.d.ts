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
export declare class cnt_habitat implements sch_habitat {
    habitatUUID: string;
    systemUUID: string;
    status: HAStatusType;
    devEnviroment: number;
    habitatName: string;
    accessKey: string;
    constructor(habitatUUID?: string, systemUUID?: string, status?: HAStatusType, devEnviroment?: number, habitatName?: string, accessKey?: string);
    static fromRow(row: any): cnt_habitat;
    static fromResults(rows: any[]): cnt_habitat[];
    static fromBody(body: any): cnt_habitat;
    asignarUUID(): string;
}
export declare class cnt_accesspoint implements sch_accesspoint {
    accessPointUUID: string;
    habitatUUID: string;
    url: string;
    accessType: APAccessType;
    description: string;
    status: HAStatusType;
    constructor(accessPointUUID?: string, habitatUUID?: string, url?: string, accessType?: APAccessType, description?: string, status?: HAStatusType);
    static fromRow(row: any): cnt_accesspoint;
    static fromResults(rows: any[]): cnt_accesspoint[];
    static fromBody(body: any): cnt_accesspoint;
    asignarUUID(): string;
}
