"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitatEndpoints = exports.GeneralEndpoints = void 0;
class GeneralEndpoints {
    localNotifyListeners() {
        // Implementa esta función si necesitas notificar cambios.
    }
}
exports.GeneralEndpoints = GeneralEndpoints;
class HabitatEndpoints extends GeneralEndpoints {
    constructor(foreign, credentials, information = "") {
        super();
        this.foreign = foreign;
        this.credentials = credentials;
        this.information = information;
    }
    static fromMap(map) {
        var _a, _b, _c;
        return new HabitatEndpoints((_a = map['foreign']) !== null && _a !== void 0 ? _a : "", (_b = map['credentials']) !== null && _b !== void 0 ? _b : "", (_c = map['information']) !== null && _c !== void 0 ? _c : "");
    }
    static fromBody(body) {
        return HabitatEndpoints.fromMap(body);
    }
    static defaultEndpoints() {
        return new HabitatEndpoints("", "");
    }
    toString() {
        return `HabitatEndpoints{foreign: ${this.foreign}, credentials: ${this.credentials}, information: ${this.information}}`;
    }
}
exports.HabitatEndpoints = HabitatEndpoints;
class InternalEndpoints extends GeneralEndpoints {
    constructor(heartbeatMonitor) {
        super();
        this.heartbeatMonitor = heartbeatMonitor;
    }
    static fromMap(map) {
        var _a;
        return new InternalEndpoints((_a = map['heartbeatMonitor']) !== null && _a !== void 0 ? _a : "");
    }
    static fromBody(body) {
        return InternalEndpoints.fromMap(body);
    }
    static defaultEndpoints() {
        return new InternalEndpoints("");
    }
    toString() {
        return `InternalEndpoints{heartbeatMonitor: ${this.heartbeatMonitor}}`;
    }
}
class EcosystemEndpoints {
    constructor(habitatEndpoints = HabitatEndpoints.defaultEndpoints(), internalEndpoints = InternalEndpoints.defaultEndpoints()) {
        this.habitatEndpoints = habitatEndpoints;
        this.internalEndpoints = internalEndpoints;
    }
    asignarfromBody(body) {
        this.habitatEndpoints = HabitatEndpoints.fromBody(body['habitatEndpoints']);
        this.internalEndpoints = InternalEndpoints.fromBody(body['internalEndpoints']);
    }
}
