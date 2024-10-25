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
    extraData?: string = "";
    downMissed: number = 3;
    alertMissed: number = 2;
    get alert(): Date | null {
        if (this.heartbeatAt && this.expectedInterval) {
            return new Date(this.heartbeatAt.getTime() + this.expectedInterval * this.alertMissed * 1000);
        }
        return null;
    }
    get down(): Date | null {
        if (this.heartbeatAt && this.expectedInterval) {
            return new Date(this.heartbeatAt.getTime() + this.expectedInterval * this.downMissed * 1000);
        }
        return null;
    }
    // Constructor con valores por defecto
    constructor(
        mscode: string = "",
        instance: string = "",
        status: string = "",
        version?: number,
        createdAt?: Date,
        updateAt?: Date,
        url: string = "",
        expectedInterval: number = 0,
        action: string = "",
        serviceType: string = "",
        heartbeatAt?: Date,
        extraData: string = ""
    ) {
        this.mscode = mscode;
        this.instance = instance;
        this.status = status;
        this.version = version;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.url = url;
        this.expectedInterval = expectedInterval;
        this.action = action;
        this.serviceType = serviceType;
        this.heartbeatAt = heartbeatAt;
        this.extraData = extraData;
    }
    static fromMicroservices(oRow: any): cnt_heartbeat {
        const heartbeat: cnt_heartbeat = {
            mscode: oRow.mscode,
            instance: oRow.instance,
            status: oRow.status,
            version: oRow.version,
            expectedInterval: oRow.expectedInterval,
            url: oRow.url,
            action: "reading",
            serviceType: oRow.serviceType,
            createdAt: oRow.createdAt,
            updateAt: oRow.updatedAt,
            heartbeatAt: oRow.heartbeatAt,
            down: oRow.down ?? null,
            downMissed: oRow.downMissed ?? 3,
            alert: oRow.alert ?? null,
            alertMissed: oRow.alertMissed ?? 2,
            extraData: oRow.extraData ?? ""


        };
        return heartbeat;
    }

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
            extraData: body?.extraData || "",
            down: body?.down ?? null,
            downMissed: body?.downMissed ?? 3,
            alert: body?.alert ?? null,
            alertMissed: body?.alertMissed ?? 2
        };
        return heartbeat;
    }
    static fromMSIdentity(msIdentity: any): cnt_heartbeat {
        const heartbeat: cnt_heartbeat = {
            mscode: msIdentity.mscode,
            instance: msIdentity.msinstance,
            version: msIdentity.version || 0,
            url: msIdentity.url || "",
            expectedInterval: msIdentity.expectedInterval || 0,
            action: "",
            status: "",
            serviceType: msIdentity.serviceType || "",
            extraData: msIdentity.extraData || "",
            down: msIdentity.down ?? null,
            downMissed: msIdentity.downMissed ?? 3,
            alert: msIdentity.alert ?? null,
            alertMissed: msIdentity.alertMissed ?? 2
        };
        return heartbeat;
    }


}
