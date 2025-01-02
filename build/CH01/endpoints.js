"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_ECEndpoints = exports.cnt_MSEndpoints = exports.cnt_HAEndpoints = exports.GeneralEndpoints = void 0;
class GeneralEndpoints {
    localNotifyListeners() {
        // Implementa esta función si necesitas notificar cambios.
    }
}
exports.GeneralEndpoints = GeneralEndpoints;
class cnt_HAEndpoints extends GeneralEndpoints {
    constructor(foreign, credentials, information = "") {
        super();
        this.foreign = foreign;
        this.credentials = credentials;
        this.information = information;
    }
    static fromMap(map) {
        var _a, _b, _c;
        return new cnt_HAEndpoints((_a = map['foreign']) !== null && _a !== void 0 ? _a : "", (_b = map['credentials']) !== null && _b !== void 0 ? _b : "", (_c = map['information']) !== null && _c !== void 0 ? _c : "");
    }
    static fromBody(body) {
        return cnt_HAEndpoints.fromMap(body);
    }
    static defaultEndpoints() {
        return new cnt_HAEndpoints("", "");
    }
    toString() {
        return `HabitatEndpoints{foreign: ${this.foreign}, credentials: ${this.credentials}, information: ${this.information}}`;
    }
}
exports.cnt_HAEndpoints = cnt_HAEndpoints;
class cnt_MSEndpoints extends GeneralEndpoints {
    constructor(heartbeatMonitor) {
        super();
        this.heartbeatMonitor = heartbeatMonitor;
    }
    static fromMap(map) {
        var _a;
        return new cnt_MSEndpoints((_a = map['heartbeatMonitor']) !== null && _a !== void 0 ? _a : "");
    }
    static fromBody(body) {
        return cnt_MSEndpoints.fromMap(body);
    }
    static defaultEndpoints() {
        return new cnt_MSEndpoints("");
    }
    toString() {
        return `InternalEndpoints{heartbeatMonitor: ${this.heartbeatMonitor}}`;
    }
}
exports.cnt_MSEndpoints = cnt_MSEndpoints;
class cnt_ECEndpoints extends GeneralEndpoints {
    constructor(habitatEndpoints = cnt_HAEndpoints.defaultEndpoints(), internalEndpoints = cnt_MSEndpoints.defaultEndpoints()) {
        super();
        this.habitatEndpoints = habitatEndpoints;
        this.internalEndpoints = internalEndpoints;
    }
    static fromMap(map) {
        return new cnt_ECEndpoints(cnt_HAEndpoints.fromMap(map['habitatEndpoints']), cnt_MSEndpoints.fromMap(map['internalEndpoints']));
    }
    static fromBody(body) {
        return new cnt_ECEndpoints(cnt_HAEndpoints.fromBody(body['habitatEndpoints']), cnt_MSEndpoints.fromBody(body['internalEndpoints']));
    }
    static fromRow(row) {
        return new cnt_ECEndpoints(cnt_HAEndpoints.fromBody(row['habitatEndpoints']), cnt_MSEndpoints.fromBody(row['internalEndpoints']));
    }
    asignarfromBody(body) {
        this.habitatEndpoints = cnt_HAEndpoints.fromBody(body['habitatEndpoints']);
        this.internalEndpoints = cnt_MSEndpoints.fromBody(body['internalEndpoints']);
    }
}
exports.cnt_ECEndpoints = cnt_ECEndpoints;
