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
export type sch_dbconnection = {
    engine: "mysql" | "mssql";
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    instance?: string;
    encrypt?: boolean;
    trustServerCertificate?: boolean;
};
export declare class cnt_dbconnection implements sch_dbconnection {
    engine: "mysql" | "mssql";
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    instance?: string;
    encrypt?: boolean;
    trustServerCertificate?: boolean;
    static fromBody(body: any): cnt_dbconnection;
}
export type sch_dbconnectiontable = sch_dbconnection & {
    tableName: string;
};
export declare class cnt_dbconnectiontable extends cnt_dbconnection implements sch_dbconnectiontable {
    tableName: string;
    static fromBody(body: any): cnt_dbconnectiontable;
}
