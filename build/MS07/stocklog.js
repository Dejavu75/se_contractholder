"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_mantErrorHolder = exports.cnt_mantenimientoHolder = void 0;
class cnt_mantenimientoHolder {
    constructor(mscode = "", instance = "", mantId = "", errores = [], date = new Date()) {
        this.mscode = "";
        this.instance = "";
        this.mantId = "";
        this.errores = [];
        this.date = new Date();
        this.mscode = mscode;
        this.instance = instance;
        this.mantId = mantId;
        this.errores = errores;
        this.date = date;
    }
    static fromBody(body) {
        var _a, _b;
        let errores = [];
        if (Array.isArray(body === null || body === void 0 ? void 0 : body.errores))
            errores = body.errores.map((error) => cnt_mantErrorHolder.fromBody(error));
        if (Array.isArray((_a = body === null || body === void 0 ? void 0 : body.errores_kl_collection) === null || _a === void 0 ? void 0 : _a.collectionitems)) {
            errores = (_b = body === null || body === void 0 ? void 0 : body.errores_kl_collection) === null || _b === void 0 ? void 0 : _b.collectionitems.map((error) => cnt_mantErrorHolder.fromBody(error));
        }
        return new cnt_mantenimientoHolder(body.mscode || "", body.instance || "", body.mantId || body.mantid || "", errores, new Date(body.date || new Date()));
    }
    static fromJson(json) {
        const errores = Array.isArray(json.errores)
            ? json.errores.map((error) => cnt_mantErrorHolder.fromBody(error))
            : [];
        return new cnt_mantenimientoHolder(json.mscode || "", json.instance || "", json.mantId || json.mantid || "", errores, new Date(json.date || new Date()));
    }
}
exports.cnt_mantenimientoHolder = cnt_mantenimientoHolder;
class cnt_mantErrorHolder {
    constructor(mantId = "", errorId = "", origin = "", type = 0, code = "", bul = "", atr = "", deposit = "", lot = "", quantity = 0, quantityRequested = 0) {
        this.mantId = "";
        this.errorId = "";
        this.origin = "";
        this.code = "";
        this.bul = "";
        this.atr = "";
        this.deposit = "";
        this.lot = "";
        this.quantity = 0;
        this.quantityRequested = 0;
        this.type = 0;
        this.mantId = mantId || this.mantId;
        this.errorId = errorId || this.errorId;
        this.origin = origin || this.origin;
        this.type = type || this.type;
        this.code = code || this.code;
        this.bul = bul || this.bul;
        this.atr = atr || this.atr;
        this.deposit = deposit || this.deposit;
        this.lot = lot || this.lot;
        this.quantity = quantity || this.quantity;
        this.quantityRequested = quantityRequested || this.quantityRequested;
    }
    static fromRow(row) {
        return new cnt_mantErrorHolder(row.mantId || "", row.errorId || "", row.origin || "", row.type || 0, row.code || "", row.bul || "", row.atr || "", row.deposit || "", row.lot || "", row.quantity || 0, row.quantityRequested || 0);
    }
    static fromBody(body) {
        return new cnt_mantErrorHolder(body.mantId || body.mantid || "", body.errorid || body.errorId || "", body.origin || body.origen || "", body.type || body.tipo || 0, body.code || body.codigo || "", body.bul || "", body.atr || "", body.deposit || body.deposito || "", body.lot || body.lote || "", body.quantity || body.cantidad || 0, body.quantityRequested || body.quantityrequested || body.cant_ped || 0);
    }
}
exports.cnt_mantErrorHolder = cnt_mantErrorHolder;
