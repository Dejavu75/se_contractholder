"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_dbconnectiontable = exports.cnt_dbconnection = exports.cnt_configbase = void 0;
class cnt_configbase {
    constructor() {
        this.mscode = "";
        this.instancia = "";
        this.msdb = "";
        this.version = 0;
        this.serviceType = "";
    }
    static fromBody(body) {
        const configbase = {
            mscode: (body === null || body === void 0 ? void 0 : body.mscode) || "",
            instancia: (body === null || body === void 0 ? void 0 : body.instancia) || "",
            msdb: (body === null || body === void 0 ? void 0 : body.msdb) || "",
            version: (body === null || body === void 0 ? void 0 : body.version) || 0,
            serviceType: (body === null || body === void 0 ? void 0 : body.serviceType) || ""
        };
        return configbase;
    }
}
exports.cnt_configbase = cnt_configbase;
class cnt_dbconnection {
    constructor() {
        this.engine = "mysql";
        this.host = "";
        this.port = 0;
        this.database = "";
        this.username = "";
        this.password = "";
        this.instance = "";
        this.encrypt = false;
        this.trustServerCertificate = false;
    }
    static fromBody(body) {
        var _a, _b;
        const engine = (body === null || body === void 0 ? void 0 : body.engine) === "mssql" ? "mssql" : "mysql";
        const connection = {
            engine,
            host: (body === null || body === void 0 ? void 0 : body.host) || "",
            port: (body === null || body === void 0 ? void 0 : body.port) || (engine === "mssql" ? 1433 : 3306),
            database: (body === null || body === void 0 ? void 0 : body.database) || "",
            username: (body === null || body === void 0 ? void 0 : body.username) || "",
            password: (body === null || body === void 0 ? void 0 : body.password) || "",
            instance: (body === null || body === void 0 ? void 0 : body.instance) || "",
            encrypt: (_a = body === null || body === void 0 ? void 0 : body.encrypt) !== null && _a !== void 0 ? _a : false,
            trustServerCertificate: (_b = body === null || body === void 0 ? void 0 : body.trustServerCertificate) !== null && _b !== void 0 ? _b : false
        };
        return connection;
    }
}
exports.cnt_dbconnection = cnt_dbconnection;
class cnt_dbconnectiontable extends cnt_dbconnection {
    constructor() {
        super(...arguments);
        this.tableName = "";
    }
    static fromBody(body) {
        const connection = cnt_dbconnection.fromBody(body);
        const connectionTable = Object.assign(Object.assign({}, connection), { tableName: (body === null || body === void 0 ? void 0 : body.tableName) || "" });
        return connectionTable;
    }
}
exports.cnt_dbconnectiontable = cnt_dbconnectiontable;
