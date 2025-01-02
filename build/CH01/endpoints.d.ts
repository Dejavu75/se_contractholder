export type sch_MSEndpoints = {
    heartbeatMonitor: string;
};
export type sch_HAEndpoints = {
    foreign: string;
    credentials: string;
    information: string;
};
export type sch_ECEndpoints = {
    habitatEndpoints: sch_HAEndpoints;
    internalEndpoints: sch_MSEndpoints;
};
export declare class GeneralEndpoints {
    localNotifyListeners(): void;
}
export declare class cnt_HAEndpoints extends GeneralEndpoints implements sch_HAEndpoints {
    foreign: string;
    credentials: string;
    information: string;
    constructor(foreign: string, credentials: string, information?: string);
    static fromMap(map: Record<string, any>): cnt_HAEndpoints;
    static fromBody(body: Record<string, any>): cnt_HAEndpoints;
    static defaultEndpoints(): cnt_HAEndpoints;
    toString(): string;
}
export declare class cnt_MSEndpoints extends GeneralEndpoints implements sch_MSEndpoints {
    heartbeatMonitor: string;
    constructor(heartbeatMonitor: string);
    static fromMap(map: Record<string, any>): cnt_MSEndpoints;
    static fromBody(body: Record<string, any>): cnt_MSEndpoints;
    static defaultEndpoints(): cnt_MSEndpoints;
    toString(): string;
}
export declare class cnt_ECEndpoints extends GeneralEndpoints implements sch_ECEndpoints {
    habitatEndpoints: cnt_HAEndpoints;
    internalEndpoints: cnt_MSEndpoints;
    constructor(habitatEndpoints?: cnt_HAEndpoints, internalEndpoints?: cnt_MSEndpoints);
    static fromMap(map: Record<string, any>): cnt_ECEndpoints;
    static fromBody(body: Record<string, any>): cnt_ECEndpoints;
    static fromRow(row: any): cnt_ECEndpoints;
    asignarfromBody(body: Record<string, any>): void;
}
