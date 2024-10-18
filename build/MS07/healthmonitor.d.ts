export type sch_heartbeat = {
    mscode: string;
    instance: string;
    status: string;
    version?: number;
    created_at?: Date;
    update_at?: Date;
    url?: string;
    expectedInterval: number;
    action: string;
    serviceType: string;
};
export declare class cnt_heartbeat implements sch_heartbeat {
    mscode: string;
    instance: string;
    status: string;
    version?: number;
    created_at?: Date;
    update_at?: Date;
    url?: string;
    expectedInterval: number;
    action: string;
    serviceType: string;
    static fromBody(body: any): cnt_heartbeat;
    static fromMSIdentity(msIdentity: any): cnt_heartbeat;
}
