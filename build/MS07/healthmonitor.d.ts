export type sch_heartbeat = {
    mscode: string;
    instance: string;
    status: string;
    version?: number;
    created_at?: Date;
    update_at?: Date;
    url?: string;
    expected_intervar: number;
    action: string;
};
export declare class cnt_heartbeat implements sch_heartbeat {
    mscode: string;
    instance: string;
    status: string;
    version?: number;
    created_at?: Date;
    update_at?: Date;
    url?: string;
    expected_intervar: number;
    action: string;
    static fromBody(body: any): cnt_heartbeat;
}
