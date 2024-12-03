export type sch_Permission = {
    id: number;
    name: string;
    description: string;
    status: "hide" | "disabled" | "enabled" | "default";
    type: "permissive" | "restrictive";
    domain: string;
};
export declare class cnt_Permission implements sch_Permission {
    id: number;
    name: string;
    description: string;
    status: "hide" | "disabled" | "enabled" | "default";
    type: "permissive" | "restrictive";
    domain: string;
    constructor(id: number, name: string, description: string, status: ("hide" | "disabled" | "enabled" | "default") | undefined, type: ("permissive" | "restrictive") | undefined, domain: string);
    toString(): string;
    static fromMap(map: sch_Permission): cnt_Permission;
}
export type sch_AccountHolder = {
    id: number;
    idges: number;
    username: string;
    email: string;
    permissions: sch_Permission[];
    password_ges: string;
};
export declare class cnt_AccountHolder implements sch_AccountHolder {
    id: number;
    username: string;
    email: string;
    private password;
    private passwordHash;
    permissions: cnt_Permission[];
    idges: number;
    password_ges: string;
    constructor(id: number, idges: number, username: string, email: string, password: string, permissions: cnt_Permission[], password_ges: string);
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
    ages_token: string;
    expirationTime: Date;
    accountHolder: cnt_AccountHolder;
    domain: string;
    status: sessionStatus;
    devicehash: string;
};
export declare class cnt_SessionHolder implements sch_SessionHolder {
    token: string;
    ages_token: string;
    expirationTime: Date;
    accountHolder: cnt_AccountHolder;
    domain: string;
    status: sessionStatus;
    devicehash: string;
    constructor(token: string, ages_token: string, expirationTime: Date, accountHolder: cnt_AccountHolder, domain?: string, status?: sessionStatus, devicehash?: string);
    static defaultSession(): cnt_SessionHolder;
    static fromMap(map: cnt_SessionHolder): cnt_SessionHolder;
    static fromBody(body: any): cnt_SessionHolder;
    static fromRow(row: any): cnt_SessionHolder;
    static fromRequest(req: any): cnt_SessionHolder;
    static fromHeader(headers: any): cnt_SessionHolder;
    static fromCookie(cookies: any): cnt_SessionHolder;
    static toHeader(res: any, session: cnt_SessionHolder): any;
    toHeader(res: any): any;
    static toCookie(res: any, session: cnt_SessionHolder): any;
    toCookie(res: any): any;
    isSessionValid(): boolean;
    toString(): string;
}
