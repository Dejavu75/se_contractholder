export type sch_heartbeat = {
    mscode: string;
    instance: string;
    status: string;
    version?:number;
    createdAt?: Date;
    updateAt?: Date;
    url?: string;
    expectedInterval:number;
    action: string;
    serviceType: string;
    heartbeatAt?: Date;
}
export class cnt_heartbeat implements sch_heartbeat {
    mscode: string = "";
    instance: string = "";
    status: string = "";
    version?: number;
    createdAt?: Date;
    updateAt?: Date;
    url?: string = "";
    expectedInterval: number = 0;
    action: string = "";
    serviceType: string = "";
    heartbeatAt?: Date;
    static fromBody(body: any): cnt_heartbeat {
        const heartbeat: cnt_heartbeat = {
            mscode: body.mscode || "",
            instance: body.instance || "",
            status: body?.status || "",
            version: body?.version || 0, 
            createdAt: body?.createdAt ? new Date(body.createdAt) : undefined,
            updateAt: body?.updateAt ? new Date(body.updateAt) : undefined,
            url: body?.url || "",
            expectedInterval: body?.expectedInterval || 0,
            action: body.action || "",
            serviceType: body.serviceType || "",
            heartbeatAt: body?.heartbeatAt ? new Date(body.heartbeatAt) : undefined,
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
