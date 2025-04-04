import { cnt_ECEndpoints } from "./endpoints";
export declare enum PermissionStatus {
    hide = "hide",
    disabled = "disabled",
    enabled = "enabled",
    default = "default"
}
export declare enum PermissionType {
    permissive = "permissive",
    restrictive = "restrictive"
}
export type sch_Permission = {
    id: number;
    domainId: string;
    name: string;
    description: string;
    status: PermissionStatus;
    type: PermissionType;
    domain: string;
};
export declare class cnt_Permission implements sch_Permission {
    id: number;
    domainId: string;
    name: string;
    description: string;
    status: PermissionStatus;
    type: PermissionType;
    domain: string;
    constructor(id: number, domainId: string, name: string, description: string, status: PermissionStatus, type: PermissionType | undefined, domain: string);
    toString(): string;
    static fromMap(map: sch_Permission): cnt_Permission;
    static fromRow(row: any): cnt_Permission;
}
export type sch_AccountHolder = {
    id: number;
    idGes: number;
    username: string;
    email: string;
    permissions: sch_Permission[];
    passwordGes: string;
};
export declare class cnt_AccountHolder implements sch_AccountHolder {
    id: number;
    username: string;
    email: string;
    private password;
    private passwordHash;
    permissions: cnt_Permission[];
    idGes: number;
    passwordGes: string;
    constructor(id: number, idGes: number, username: string, email: string, password: string, permissions: cnt_Permission[], passwordGes: string);
    static fromBody(body: any): cnt_AccountHolder;
    static fromMap(map: cnt_AccountHolder): cnt_AccountHolder;
    static defaultAccountHolder(): cnt_AccountHolder;
    private generatePasswordHash;
    getPasswordHash(): string;
    updatePassword(newPassword: string): string;
    verifyPassword(password: string): boolean;
    toString(): string;
}
export declare enum sessionStatus {
    active = "active",
    inactive = "inactive",
    expired = "expired",
    unknow = "unknow"
}
export type sch_SessionHolder = {
    token: string;
    agesToken: string;
    expirationTime: Date;
    accountHolder: cnt_AccountHolder;
    domain: string;
    status: sessionStatus;
    deviceHash: string;
    accountId: number;
    endpoints: cnt_ECEndpoints;
};
export declare class cnt_SessionHolder implements sch_SessionHolder {
    token: string;
    agesToken: string;
    expirationTime: Date;
    accountHolder: cnt_AccountHolder;
    domain: string;
    status: sessionStatus;
    deviceHash: string;
    accountId: number;
    endpoints: cnt_ECEndpoints;
    constructor(token: string, agesToken: string, expirationTime: Date, accountHolder: cnt_AccountHolder, domain?: string, status?: sessionStatus, deviceHash?: string, accountId?: number, endpoints?: cnt_ECEndpoints);
    static defaultSession(): cnt_SessionHolder;
    static fromMap(map: cnt_SessionHolder): cnt_SessionHolder;
    static fromBody(body: any): cnt_SessionHolder;
    static fromRow(row: any): cnt_SessionHolder;
    static fromRequest(req: any): cnt_SessionHolder;
    static fromHeader(headers: any): cnt_SessionHolder;
    static fromCookie(cookies: any): cnt_SessionHolder;
    static fromAgesToken(agesToken: string): cnt_SessionHolder;
    static toHeader(res: any, session: cnt_SessionHolder): any;
    toHeader(res: any): any;
    static toCookie(res: any, session: cnt_SessionHolder): any;
    toCookie(res: any): any;
    isSessionValid(): boolean;
    toString(): string;
}
