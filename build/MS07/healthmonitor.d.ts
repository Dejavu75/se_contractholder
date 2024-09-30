export type sch_heartbeat = {
    id: string;
    status: string;
    fecha: string;
    url: string;
    action: string;
};
export declare class cnt_heartbeat implements sch_heartbeat {
    id: string;
    status: string;
    fecha: string;
    url: string;
    action: string;
    static fromBody(body: any): cnt_heartbeat;
}
