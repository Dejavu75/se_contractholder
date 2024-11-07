export type sch_systems = {
    systemUID: string;
    centralKey: string;
    systemKey: string;
    instance: string;
    localization: number;
    systemName: string;
    systemType: string;
    instanceType: string;
};
export declare class cnt_systems implements sch_systems {
    systemUID: string;
    centralKey: string;
    systemKey: string;
    instance: string;
    localization: number;
    systemName: string;
    systemType: string;
    instanceType: string;
    constructor(systemUID?: string, centralKey?: string, systemKey?: string, instance?: string, localization?: number, systemName?: string, systemType?: string, instanceType?: string);
    static fromSystemsData(oRow: any): cnt_systems;
    static fromBody(body: any): cnt_systems;
}
