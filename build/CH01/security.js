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
exports.cnt_SessionHolder = exports.cnt_AccountHolder = exports.cnt_Permission = void 0;
const crypto = __importStar(require("crypto"));
// Classes implementing the types with cnt_ prefix
class cnt_Permission {
    constructor(id, description, status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }
    toString() {
        return `Permission{id: ${this.id}, description: ${this.description}, status: ${this.status}}`;
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
    static defaultAccountHolder() {
        return new cnt_AccountHolder(0, 0, "", "", "", [], "");
    }
    generatePasswordHash(password) {
        const salt = "solges";
        return crypto.createHash("sha256").update(password + salt).digest("base64");
    }
    getPasswordHash() {
        return this.passwordHash;
    }
    updatePassword(newPassword) {
        this.password = newPassword;
        this.passwordHash = this.generatePasswordHash(newPassword);
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
class cnt_SessionHolder {
    constructor(token, expirationTime, accountHolder) {
        this.token = token;
        this.expirationTime = expirationTime;
        this.accountHolder = accountHolder;
    }
    static defaultSession() {
        return new cnt_SessionHolder("defaultToken", new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
        cnt_AccountHolder.defaultAccountHolder());
    }
    isSessionValid() {
        return new Date() < this.expirationTime;
    }
    toString() {
        return `SessionHolder{token: ${this.token}, expirationTime: ${this.expirationTime.toISOString()}, accountHolder: ${this.accountHolder}}`;
    }
}
exports.cnt_SessionHolder = cnt_SessionHolder;
