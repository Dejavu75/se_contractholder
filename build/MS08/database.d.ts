export type sch_configbase = {
    mscode: string;
    instancia: string;
    msdb: string;
    version: number;
    serviceType: string;
};
export declare class cnt_configbase implements sch_configbase {
    mscode: string;
    instancia: string;
    msdb: string;
    version: number;
    serviceType: string;
    static fromBody(body: any): cnt_configbase;
}
