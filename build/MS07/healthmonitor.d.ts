export type sch_heartbeat = {
    mscode: string;
    instance: string;
    status: string;
    version?: number;
    createdAt?: Date;
    updateAt?: Date;
    url?: string;
    expectedInterval: number;
    action: string;
    serviceType: string;
    heartbeatAt?: Date;
    extraData?: string;
};
export declare class cnt_heartbeat implements sch_heartbeat {
    mscode: string;
    instance: string;
    status: string;
    version?: number;
    createdAt?: Date;
    updateAt?: Date;
    url?: string;
    expectedInterval: number;
    action: string;
    serviceType: string;
    heartbeatAt?: Date;
    extraData?: string;
    static fromMicroservices(oRow: any): cnt_heartbeat;
    static fromBody(body: any): cnt_heartbeat;
    static fromMSIdentity(msIdentity: any): cnt_heartbeat;
}
