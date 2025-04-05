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
export declare class cnt_habitat implements sch_habitat {
    habitatUUID: string;
    systemUUID: string;
    status: number;
    devEnviroment: number;
    habitatName: string;
    accessKey: string;
    constructor(habitatUUID?: string, systemUUID?: string, status?: number, devEnviroment?: number, habitatName?: string, accessKey?: string);
    static fromRow(row: any): cnt_habitat;
    static fromResults(rows: any[]): cnt_habitat[];
    static fromBody(body: any): cnt_habitat;
    asignarUUID(): string;
}
export declare class cnt_accesspoint implements sch_accesspoint {
    accessPointUUID: string;
    habitatUUID: string;
    url: string;
    accessType: AccessType;
    description: string;
    constructor(accessPointUUID?: string, habitatUUID?: string, url?: string, accessType?: AccessType, description?: string);
    static fromRow(row: any): cnt_accesspoint;
    static fromResults(rows: any[]): cnt_accesspoint[];
    static fromBody(body: any): cnt_accesspoint;
    asignarUUID(): string;
}
