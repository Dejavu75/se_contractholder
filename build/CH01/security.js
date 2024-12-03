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
exports.cnt_SessionHolder = exports.sessionStatus = exports.cnt_AccountHolder = exports.cnt_Permission = void 0;
const crypto = __importStar(require("crypto"));
class cnt_Permission {
    constructor(id, name, description, status = "default", type = "permissive", domain) {
        this.id = id || 0;
        this.name = name || "";
        this.description = description || "";
        this.status = status || "enabled";
        this.type = type;
        this.domain = domain;
    }
    toString() {
        return `Permission{id: ${this.id}, description: ${this.description}, status: ${this.status}}`;
    }
    static fromMap(map) {
        return new cnt_Permission((map === null || map === void 0 ? void 0 : map.id) || 0, (map === null || map === void 0 ? void 0 : map.name) || "", (map === null || map === void 0 ? void 0 : map.description) || "", (map === null || map === void 0 ? void 0 : map.status) || "default", (map === null || map === void 0 ? void 0 : map.type) || "permissive", (map === null || map === void 0 ? void 0 : map.domain) || "");
    }
}
exports.cnt_Permission = cnt_Permission;
class cnt_AccountHolder {
    constructor(id, idges, username, email, password, permissions, password_ges) {
        this.id = id;
        this.idges = idges;
        this.username = username;
        this.email = email;
        this.password = password;
        this.passwordHash = this.generatePasswordHash(password);
        this.permissions = permissions;
        this.password_ges = password_ges;
    }
    static fromBody(body) {
        var _a;
        return new cnt_AccountHolder(body.id || 0, body.idges || 0, body.username, body.email || "", body.password || "", (_a = body.permissions) === null || _a === void 0 ? void 0 : _a.map((p) => cnt_Permission.fromMap(p)), body.password_ges || "");
    }
    static fromMap(map) {
        var _a;
        return new cnt_AccountHolder(map.id, map.idges, map.username, map.email, "", (_a = map.permissions) === null || _a === void 0 ? void 0 : _a.map((p) => cnt_Permission.fromMap(p)), map.password_ges);
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
    constructor(token, ages_token, expirationTime, accountHolder, domain = "", status = sessionStatus.unknow) {
        this.token = token;
        this.ages_token = ages_token;
        this.expirationTime = expirationTime;
        this.accountHolder = accountHolder;
        this.domain = domain || "global";
        this.status = status || sessionStatus.unknow;
    }
    static defaultSession() {
        return new cnt_SessionHolder("", "", new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
        cnt_AccountHolder.defaultAccountHolder(), "global", sessionStatus.unknow);
    }
    static fromMap(map) {
        return new cnt_SessionHolder(map.token, map.ages_token, map.expirationTime, cnt_AccountHolder.fromMap(map.accountHolder), map.domain, map.status);
    }
    static fromBody(body) {
        return new cnt_SessionHolder(body.token, body.ages_token, body.expirationTime, cnt_AccountHolder.fromBody(body === null || body === void 0 ? void 0 : body.accountHolder), body.domain, body.status);
    }
    static fromRow(row) {
        return new cnt_SessionHolder(row.token, row.ages_token, row.expirationTime, cnt_AccountHolder.defaultAccountHolder(), row.domain, row.status);
    }
    ;
    isSessionValid() {
        return new Date() < this.expirationTime;
    }
    toString() {
        return `SessionHolder{token: ${this.token}, expirationTime: ${this.expirationTime.toISOString()}, accountHolder: ${this.accountHolder}}`;
    }
}
exports.cnt_SessionHolder = cnt_SessionHolder;
//#endregion "SessionHolder"
