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
export declare class cnt_system implements sch_system {
    systemUID: string;
    centralKey: string;
    systemKey: string;
    instance: string;
    localization: number;
    systemName: string;
    systemType: string;
    instanceType: string;
    constructor(systemUID?: string, centralKey?: string, systemKey?: string, instance?: string, localization?: number, systemName?: string, systemType?: string, instanceType?: string);
    static fromSystemsData(oRow: any): cnt_system;
    static fromBody(body: any): cnt_system;
    static fromEG(oEG: any): cnt_system;
    agesKeySistema(): string;
    static agesKeySistema(systemKey: string, instance: string, localization: number): string;
    recrearcentraKey(): string;
    static recrearcentraKey(centralKey: string, systemKey: string, instance: string, localization: number): string;
    asignarUID(): string;
    static asignarUID(systemType: string, instanceType: string): string;
}
