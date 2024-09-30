export type sch_heartbeat = {
    id: string;
    status: string;
    timestamp: string;
    url: string;
    action: string;
}

export class cnt_heartbeat implements sch_heartbeat {
    id: string="";
    status: string="";
    timestamp: string="";
    url: string="";
    action: string="";
    static fromBody(body: any) {

        const certificado: cnt_heartbeat = {
            id: body.id || "",
            status: body.status || "",
            timestamp: body.timestamp || new Date().toDateString(),
            url: body.url || "",
            action: body.certificado || ""
        };
        return certificado;
    }
}