export type sch_mantenimientoHolder = {
    mscode: string;
    instance: string;
    mantId: string;
    errores: sch_mantErrorHolder[];
    date: Date;
    user: string;
    company: string;
};
export declare class cnt_mantenimientoHolder implements sch_mantenimientoHolder {
    mscode: string;
    instance: string;
    mantId: string;
    errores: sch_mantErrorHolder[];
    date: Date;
    user: string;
    company: string;
    constructor(mscode?: string, instance?: string, mantId?: string, errores?: sch_mantErrorHolder[], date?: Date, user?: string, company?: string);
    static fromBody(body: any): cnt_mantenimientoHolder;
    static fromJson(json: any): cnt_mantenimientoHolder;
}
export type sch_mantErrorHolder = {
    mantId: string;
    errorId: string;
    origin: string;
    type: number;
    code: string;
    bul: string;
    atr: string;
    deposit: string;
    lot: string;
    quantity: number;
    quantityRequested: number;
};
export declare class cnt_mantErrorHolder implements sch_mantErrorHolder {
    mantId: string;
    errorId: string;
    origin: string;
    code: string;
    bul: string;
    atr: string;
    deposit: string;
    lot: string;
    quantity: number;
    quantityRequested: number;
    type: number;
    constructor(mantId?: string, errorId?: string, origin?: string, type?: number, code?: string, bul?: string, atr?: string, deposit?: string, lot?: string, quantity?: number, quantityRequested?: number);
    static fromRow(row: any): cnt_mantErrorHolder;
    static fromBody(body: any): cnt_mantErrorHolder;
}
