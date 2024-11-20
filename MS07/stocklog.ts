export type sch_mantenimientoHolder = {
    mscode: string;
    instance: string;
    mantId: string;
    errores: sch_mantErrorHolder[];
    date: Date;
};

export class cnt_mantenimientoHolder implements sch_mantenimientoHolder {
    mscode: string = "";
    instance: string = "";
    mantId: string = "";
    errores: sch_mantErrorHolder[] = [];
    date: Date = new Date();
    constructor(
        mscode: string = "",
        instance: string = "",
        mantId: string = "",
        errores: sch_mantErrorHolder[] = [],
        date: Date = new Date()
    ) {
        this.mscode = mscode;
        this.instance = instance;
        this.mantId = mantId;
        this.errores = errores;
        this.date = date;
    }

    static fromBody(body: any): cnt_mantenimientoHolder {
        let errores: sch_mantErrorHolder[] = [];
        if (Array.isArray(body?.errores)) errores=body.errores.map((error: any) => cnt_mantErrorHolder.fromBody(error))
        if (Array.isArray(body?.errores_kl_collection?.collectionitems)) {
            errores=body?.errores_kl_collection?.collectionitems.map((error: any) => cnt_mantErrorHolder.fromBody(error))
        }
        return new cnt_mantenimientoHolder(
            body.mscode || "",
            body.instance || "",
            body.mantId || body.mantid || "",
            errores,
            new Date(body.date || new Date())
        );
    }
    static fromJson(json: any): cnt_mantenimientoHolder {
        const errores = Array.isArray(json.errores)
            ? json.errores.map((error: any) => cnt_mantErrorHolder.fromBody(error))
            : [];
        return new cnt_mantenimientoHolder(
            json.mscode || "",
            json.instance || "",
            json.mantId || json.mantid || "",
            errores,
            new Date(json.date || new Date())
        );
    }


}
export type sch_mantErrorHolder = {
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
};

export class cnt_mantErrorHolder implements sch_mantErrorHolder {
    mantId: string = "";
    errorId: string = "";
    origin: string = "";
    code: string = "";
    bul: string = "";
    atr: string = "";
    deposit: string = "";
    lot: string = "";
    quantity: number = 0;
    quantityRequested: number = 0;
    type: number = 0;

    constructor(
        mantId: string = "",
        errorId: string = "",
        origin: string = "",
        type: number = 0,
        code: string = "",
        bul: string = "",
        atr: string = "",
        deposit: string = "",
        lot: string = "",
        quantity: number = 0,
        quantityRequested: number = 0,
        errorid: string = ""
    ) {
        this.mantId = mantId || this.mantId;
        this.errorId = errorId || this.errorId;
        this.type = type || this.type;
        this.origin = origin || this.origin;
        this.code = code || this.code;
        this.bul = bul || this.bul;
        this.atr = atr || this.atr;
        this.deposit = deposit || this.deposit;
        this.lot = lot || this.lot;
        this.quantity = quantity || this.quantity;
        this.quantityRequested = quantityRequested || this.quantityRequested;
        this.errorId = errorid || this.errorId;
    }

    static fromRow(row: any): cnt_mantErrorHolder {
        return new cnt_mantErrorHolder(
            row.mantId || "",
            row.errorId || "",
            row.origin || "",
            row.type || 0,
            row.code || "",
            row.bul || "",
            row.atr || "",
            row.deposit || "",
            row.lot || "",
            row.quantity || 0,
            row.quantityRequested || 0,
            row.errorid || ""
        );
    }

    static fromBody(body: any): cnt_mantErrorHolder {
        return new cnt_mantErrorHolder(
            body.origin || body.origen || "",
            body.type || body.tipo || 0,
            body.code || body.codigo || "",
            body.bul || "",
            body.atr || "",
            body.deposit || body.deposito || "",
            body.lot || body.lote || "",
            body.quantity || body.cantidad || 0,
            body.quantityRequested || body.quantityrequested || body.cant_ped || 0,
            body.errorid || body.errorId || "",
            body.mantId || body.mantid || ""
        );
    }

}
