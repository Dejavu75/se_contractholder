export type sch_configbase = {
    mscode: string;
    instancia: string;
    msdb: string;
    version:number;
    serviceType: string;
}
export class cnt_configbase implements sch_configbase {
    mscode: string="";
    instancia: string="";
    msdb: string="";
    version:number=0;   
    serviceType: string=""; 
    static fromBody(body: any) {

        const configbase: cnt_configbase = {
            mscode: body?.mscode || "",
            instancia: body?.instancia || "",
            msdb: body?.msdb || "",
            version:body?.version || 0,
            serviceType: body?.serviceType || ""
        };
        return configbase;
    }

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
}

export class cnt_dbconnection implements sch_dbconnection {
    engine: "mysql" | "mssql" = "mysql";
    host: string = "";
    port: number = 0;
    database: string = "";
    username: string = "";
    password: string = "";
    instance?: string = "";
    encrypt?: boolean = false;
    trustServerCertificate?: boolean = false;

    static fromBody(body: any) {
        const engine = body?.engine === "mssql" ? "mssql" : "mysql";

        const connection: cnt_dbconnection = {
            engine,
            host: body?.host || "",
            port: body?.port || (engine === "mssql" ? 1433 : 3306),
            database: body?.database || "",
            username: body?.username || "",
            password: body?.password || "",
            instance: body?.instance || "",
            encrypt: body?.encrypt ?? false,
            trustServerCertificate: body?.trustServerCertificate ?? false
        };

        return connection;
    }
}
 export type sch_dbconnectiontable = sch_dbconnection & {
    tableName: string;
}

export class cnt_dbconnectiontable extends cnt_dbconnection implements sch_dbconnectiontable {
    tableName: string = "";

    static fromBody(body: any) {
        const connection = cnt_dbconnection.fromBody(body);

        const connectionTable: cnt_dbconnectiontable = {
            ...connection,
            tableName: body?.tableName || ""
        };

        return connectionTable;
    }
}