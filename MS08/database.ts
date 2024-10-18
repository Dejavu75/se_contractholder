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