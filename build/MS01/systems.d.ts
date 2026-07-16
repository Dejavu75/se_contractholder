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
export type sch_installation_key_lookup = {
    installationKey: string;
};
export type sch_installation_system = {
    systemUUID: string;
    systemKey: string;
    systemName: string;
};
export declare class cnt_installation_key_lookup implements sch_installation_key_lookup {
    installationKey: string;
    constructor(installationKey?: string);
    static fromBody(body: any): cnt_installation_key_lookup;
}
export declare class cnt_installation_system implements sch_installation_system {
    systemUUID: string;
    systemKey: string;
    systemName: string;
    constructor(systemUUID?: string, systemKey?: string, systemName?: string);
    static fromSystem(system: Pick<sch_system, "systemUUID" | "systemKey" | "systemName">): cnt_installation_system;
}
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
