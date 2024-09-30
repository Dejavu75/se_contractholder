export type sch_heartbeat = {
    id: string;
    status: string;
    fecha: string;
    url: string;
    action: string;
}

export class cnt_heartbeat implements sch_heartbeat {
    id: string="";
    status: string="";
    fecha: string="";
    url: string="";
    action: string="";
    static fromBody(body: any) {

        const heartbeat: cnt_heartbeat = {
            id: body?.id || "",
            status: body?.status || "",
            fecha: body?.fecha || new Date(),
            url: body?.url || "",
            action: body?.certificado || ""
        };
        return heartbeat;
    }
}