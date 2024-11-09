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
export declare class cnt_system implements sch_system {
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
    constructor(systemUUID?: string, centralKey?: string, systemKey?: string, instance?: string, localization?: number, systemName?: string, systemType?: string, instanceType?: string, status?: number, devEnviroment?: number);
    static fromResults(oRows: any): cnt_system[];
    static fromRow(oRow: any): cnt_system;
    static fromBody(body: any): cnt_system;
    static fromEG(oEG: any): cnt_system;
    agesKeySistema(): string;
    static agesKeySistema(systemKey: string, instance: string, localization: number): string;
    recrearcentraKey(): string;
    static recrearcentraKey(centralKey: string, systemKey: string, instance: string, localization: number): string;
    asignarUUID(): string;
    static asignarUUID(systemType: string, instanceType: string): string;
}
