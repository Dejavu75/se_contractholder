export type sch_configbase = {
    mscode: string;
    instancia: string;
    msdb: string;
    version: number;
};
export declare class cnt_configbase implements sch_configbase {
    mscode: string;
    instancia: string;
    msdb: string;
    version: number;
    static fromBody(body: any): cnt_configbase;
}
