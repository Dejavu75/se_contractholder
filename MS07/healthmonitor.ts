export type sch_heartbeat = {
    mscode: string;
    instance: string;
    status: string;
    version?:number;
    created_at?: Date;
    update_at?: Date;
    url?: string;
    expectedInterval:number;
    action: string;
    serviceType: string;
}

export class cnt_heartbeat implements sch_heartbeat {
    mscode: string = "";
    instance: string = "";
    status: string = "";
    version?: number;
    created_at?: Date;
    update_at?: Date;
    url?: string = "";
    expectedInterval: number = 0;
    action: string = "";
    serviceType: string = "";
    static fromBody(body: any): cnt_heartbeat {
        const heartbeat: cnt_heartbeat = {
            mscode: body.mscode || "",
            instance: body.instance || "",
            status: body?.status || "",
            version: body?.version || 0,
            created_at: body?.created_at ? new Date(body.created_at) : undefined,
            update_at: body?.update_at ? new Date(body.update_at) : undefined,
            url: body?.url || "",
            expectedInterval: body?.expectedInterval || 0,
            action: body.action || "",
            serviceType: body.serviceType || ""
        };
        return heartbeat;
    }
    static fromMSIdentity(msIdentity: any): cnt_heartbeat {
        const heartbeat: cnt_heartbeat = {
            mscode: msIdentity.mscode,
            instance: msIdentity.msinstance,
            version: msIdentity.version  || 0,
            url:  msIdentity.url || "",
            expectedInterval: msIdentity.expectedInterval || 0,
            action: "",
            status: "",
            serviceType: msIdentity.serviceType || ""
        };
        return heartbeat;
    }
    
}