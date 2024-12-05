"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_SessionHolder = exports.sessionStatus = exports.cnt_AccountHolder = exports.cnt_Permission = exports.PermissionType = exports.PermissionStatus = void 0;
const crypto = __importStar(require("crypto"));
//#region "Permission"
// Define types with sch_ prefix
var PermissionStatus;
(function (PermissionStatus) {
    PermissionStatus["hide"] = "hide";
    PermissionStatus["disabled"] = "disabled";
    PermissionStatus["enabled"] = "enabled";
    PermissionStatus["default"] = "default";
})(PermissionStatus || (exports.PermissionStatus = PermissionStatus = {}));
var PermissionType;
(function (PermissionType) {
    PermissionType["permissive"] = "permissive";
    PermissionType["restrictive"] = "restrictive";
})(PermissionType || (exports.PermissionType = PermissionType = {}));
class cnt_Permission {
    constructor(id, domainId, name, description, status, type = PermissionType.permissive, domain) {
        this.id = id || 0;
        this.domainId = domainId || "";
        this.name = name || "";
        this.description = description || "";
        this.status = status || PermissionStatus.enabled;
        this.type = type || PermissionType.permissive;
        this.domain = domain;
    }
    toString() {
        return `Permission{id: ${this.id}, description: ${this.description}, status: ${this.status}}`;
    }
    static fromMap(map) {
        return new cnt_Permission((map === null || map === void 0 ? void 0 : map.id) || 0, (map === null || map === void 0 ? void 0 : map.domainId) || "", (map === null || map === void 0 ? void 0 : map.name) || "", (map === null || map === void 0 ? void 0 : map.description) || "", (map === null || map === void 0 ? void 0 : map.status) || PermissionStatus.default, (map === null || map === void 0 ? void 0 : map.type) || PermissionType.permissive, (map === null || map === void 0 ? void 0 : map.domain) || "");
    }
}
exports.cnt_Permission = cnt_Permission;
class cnt_AccountHolder {
    constructor(id, idGes, username, email, password, permissions, passwordGes) {
        this.id = id;
        this.idGes = idGes;
        this.username = username;
        this.email = email;
        this.password = password;
        this.passwordHash = this.generatePasswordHash(password);
        this.permissions = permissions;
        this.passwordGes = passwordGes;
    }
    static fromBody(body) {
        var _a;
        return new cnt_AccountHolder(body.id || 0, body.idGes || 0, body.username, body.email || "", body.password || "", (_a = body.permissions) === null || _a === void 0 ? void 0 : _a.map((p) => cnt_Permission.fromMap(p)), body.passwordGes || "");
    }
    static fromMap(map) {
        var _a;
        return new cnt_AccountHolder(map.id, map.idGes, map.username, map.email, "", (_a = map.permissions) === null || _a === void 0 ? void 0 : _a.map((p) => cnt_Permission.fromMap(p)), map.passwordGes);
    }
    static defaultAccountHolder() {
        return new cnt_AccountHolder(0, 0, "", "", "", [], "");
    }
    generatePasswordHash(password) {
        if (!password) {
            return "";
        }
        const salt = "solges";
        return crypto.createHash("sha256").update(password + salt).digest("base64");
    }
    getPasswordHash() {
        return this.passwordHash;
    }
    updatePassword(newPassword) {
        this.password = newPassword;
        this.passwordHash = this.generatePasswordHash(newPassword);
        return this.passwordHash;
    }
    verifyPassword(password) {
        const hash = this.generatePasswordHash(password);
        return hash === this.passwordHash;
    }
    toString() {
        return `AccountHolder{id: ${this.id}, username: ${this.username}, email: ${this.email}, permissions: ${JSON.stringify(this.permissions)}}`;
    }
}
exports.cnt_AccountHolder = cnt_AccountHolder;
//#endregion "AccountHolder"
//#region "SessionHolder"
var sessionStatus;
(function (sessionStatus) {
    sessionStatus["active"] = "active";
    sessionStatus["inactive"] = "inactive";
    sessionStatus["expired"] = "expired";
    sessionStatus["unknow"] = "unknow";
})(sessionStatus || (exports.sessionStatus = sessionStatus = {}));
class cnt_SessionHolder {
    constructor(token, agesToken, expirationTime, accountHolder, domain = "", status = sessionStatus.unknow, deviceHash = "", accountId = 0) {
        this.token = token;
        this.agesToken = agesToken;
        this.expirationTime = expirationTime;
        this.accountHolder = accountHolder;
        this.domain = domain || "global";
        this.status = status || sessionStatus.unknow;
        this.deviceHash = deviceHash || "";
        this.accountId = accountId || 0;
    }
    static defaultSession() {
        return new cnt_SessionHolder("", "", new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
        cnt_AccountHolder.defaultAccountHolder(), "global", sessionStatus.unknow, "", 0);
    }
    static fromMap(map) {
        return new cnt_SessionHolder(map.token, map.agesToken, map.expirationTime, cnt_AccountHolder.fromMap(map.accountHolder), map.domain, map.status, map.deviceHash, (map === null || map === void 0 ? void 0 : map.accountId) || 0);
    }
    static fromBody(body) {
        return new cnt_SessionHolder(body.token, body.agesToken, body.expirationTime, cnt_AccountHolder.fromBody(body === null || body === void 0 ? void 0 : body.accountHolder), body.domain, body.status, body.deviceHash, (body === null || body === void 0 ? void 0 : body.accountId) || 0);
    }
    static fromRow(row) {
        return new cnt_SessionHolder(row.token, row.agestoken, row.expirationTime, cnt_AccountHolder.defaultAccountHolder(), row.domain, row.status, row.devicehash, row.accountid);
    }
    ;
    static fromRequest(req) {
        let session = cnt_SessionHolder.fromHeader(req === null || req === void 0 ? void 0 : req.headers);
        if (!session.token) {
            session = cnt_SessionHolder.fromCookie(req.cookies);
        }
        return session;
    }
    static fromHeader(headers) {
        let session = cnt_SessionHolder.defaultSession();
        session.token = (headers === null || headers === void 0 ? void 0 : headers["x_session_token"]) || session.token;
        session.deviceHash = (headers === null || headers === void 0 ? void 0 : headers["x_session_device_hash"]) || session.deviceHash;
        session.domain = (headers === null || headers === void 0 ? void 0 : headers["x_session_domain"]) || session.domain;
        return session;
    }
    static fromCookie(cookies) {
        let session = cnt_SessionHolder.defaultSession();
        session.token = (cookies === null || cookies === void 0 ? void 0 : cookies["session_token"]) || session.token;
        session.deviceHash = (cookies === null || cookies === void 0 ? void 0 : cookies["session_device_hash"]) || session.deviceHash;
        session.domain = (cookies === null || cookies === void 0 ? void 0 : cookies["session_domain"]) || session.domain;
        return session;
    }
    static toHeader(res, session) {
        res.setHeader("x_session_token", session.token);
        return res;
    }
    toHeader(res) {
        return cnt_SessionHolder.toHeader(res, this);
    }
    static toCookie(res, session) {
        res.cookie("session_token", session.token, { httpOnly: true, secure: true });
        return res;
    }
    toCookie(res) {
        return cnt_SessionHolder.toCookie(res, this);
    }
    isSessionValid() {
        return new Date() < this.expirationTime;
    }
    toString() {
        return `SessionHolder{token: ${this.token}, expirationTime: ${this.expirationTime.toISOString()}, accountHolder: ${this.accountHolder}}`;
    }
}
exports.cnt_SessionHolder = cnt_SessionHolder;
//#endregion "SessionHolder"
