"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_uniquenessErrorHolder = exports.cnt_uniquenessHolder = void 0;
class cnt_uniquenessHolder {
    constructor(mscode = "", instance = "", uniqueId = "", verificationId = "", errors = [], timestamp = new Date()) {
        this.mscode = "";
        this.instance = "";
        this.uniqueId = "";
        this.verificationId = "";
        this.errors = [];
        this.timestamp = new Date();
        this.mscode = mscode;
        this.instance = instance;
        this.uniqueId = uniqueId;
        this.verificationId = verificationId;
        this.errors = errors;
        this.timestamp = timestamp;
    }
    static fromBody(body) {
        var _a, _b;
        let errors = [];
        if (Array.isArray(body === null || body === void 0 ? void 0 : body.errors))
            errors = body.errors.map((error) => cnt_uniquenessErrorHolder.fromBody(error));
        if (Array.isArray((_a = body === null || body === void 0 ? void 0 : body.errors_kv_collection) === null || _a === void 0 ? void 0 : _a.collectionitems)) {
            errors = (_b = body === null || body === void 0 ? void 0 : body.errors_kv_collection) === null || _b === void 0 ? void 0 : _b.collectionitems.map((error) => cnt_uniquenessErrorHolder.fromBody(error));
        }
        return new cnt_uniquenessHolder((body === null || body === void 0 ? void 0 : body.mscode) || "", (body === null || body === void 0 ? void 0 : body.instance) || "", (body === null || body === void 0 ? void 0 : body.uniqueId) || (body === null || body === void 0 ? void 0 : body.uniqueid) || "", (body === null || body === void 0 ? void 0 : body.verificationId) || (body === null || body === void 0 ? void 0 : body.verificationid) || "", errors, new Date((body === null || body === void 0 ? void 0 : body.timestamp) || Date.now()));
    }
}
exports.cnt_uniquenessHolder = cnt_uniquenessHolder;
class cnt_uniquenessErrorHolder {
    constructor(uniqueId = "", errorId = "", origin = "", code = "", duplicates = 0) {
        this.uniqueId = "";
        this.errorId = "";
        this.origin = "";
        this.code = "";
        this.duplicates = 0;
        this.uniqueId = uniqueId;
        this.errorId = errorId;
        this.origin = origin;
        this.code = code;
        this.duplicates = duplicates;
    }
    static fromBody(body) {
        if (body === null || body === void 0 ? void 0 : body.value)
            body = body.value;
        return new cnt_uniquenessErrorHolder((body === null || body === void 0 ? void 0 : body.uniqueId) || (body === null || body === void 0 ? void 0 : body.uniqueid) || "", (body === null || body === void 0 ? void 0 : body.errorId) || (body === null || body === void 0 ? void 0 : body.errorid) || "", (body === null || body === void 0 ? void 0 : body.origin) || "", (body === null || body === void 0 ? void 0 : body.code) || "", (body === null || body === void 0 ? void 0 : body.duplicates) || 0);
    }
}
exports.cnt_uniquenessErrorHolder = cnt_uniquenessErrorHolder;
