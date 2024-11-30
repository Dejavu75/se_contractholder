export type sch_Permission = {
    id: number;
    description: string;
    status: "hide" | "disabled" | "enabled";
};
export type sch_AccountHolder = {
    id: number;
    username: string;
    email: string;
    permissions: sch_Permission[];
};
export type sch_SessionHolder = {
    token: string;
    expirationTime: Date;
    accountHolder: sch_AccountHolder;
};
export declare class cnt_Permission implements sch_Permission {
    id: number;
    description: string;
    status: "hide" | "disabled" | "enabled";
    constructor(id: number, description: string, status: "hide" | "disabled" | "enabled");
    toString(): string;
}
export declare class cnt_AccountHolder implements sch_AccountHolder {
    id: number;
    username: string;
    email: string;
    private password;
    private passwordHash;
    permissions: cnt_Permission[];
    constructor(id: number, username: string, email: string, password: string, permissions: cnt_Permission[]);
    static defaultAccountHolder(): cnt_AccountHolder;
    private generatePasswordHash;
    getPasswordHash(): string;
    updatePassword(newPassword: string): void;
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
