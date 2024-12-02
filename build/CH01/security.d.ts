export type sch_Permission = {
    id: number;
    name: string;
    description: string;
    status: "hide" | "disabled" | "enabled" | "default";
    type: "permissive" | "restrictive";
    domain: string;
};
export type sch_AccountHolder = {
    id: number;
    idges: number;
    username: string;
    email: string;
    permissions: sch_Permission[];
    password_ges: string;
};
export type sch_SessionHolder = {
    token: string;
    expirationTime: Date;
    accountHolder: sch_AccountHolder;
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
export declare class cnt_SessionHolder implements sch_SessionHolder {
    token: string;
    expirationTime: Date;
    accountHolder: cnt_AccountHolder;
    constructor(token: string, expirationTime: Date, accountHolder: cnt_AccountHolder);
    static defaultSession(): cnt_SessionHolder;
    isSessionValid(): boolean;
    toString(): string;
}
