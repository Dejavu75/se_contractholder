export declare class GeneralEndpoints {
    localNotifyListeners(): void;
}
export declare class HabitatEndpoints extends GeneralEndpoints {
    foreign: string;
    credentials: string;
    information: string;
    constructor(foreign: string, credentials: string, information?: string);
    static fromMap(map: Record<string, any>): HabitatEndpoints;
    static fromBody(body: Record<string, any>): HabitatEndpoints;
    static defaultEndpoints(): HabitatEndpoints;
    toString(): string;
}
