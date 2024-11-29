export type sch_uniquenessHolder = {
    mscode: string;
    instance: string;
    uniqueId: string;
    verificationId: string;
    errors: sch_uniquenessErrorHolder[];
    timestamp: Date;
    user: string;
    company: string;
};
export declare class cnt_uniquenessHolder implements sch_uniquenessHolder {
    mscode: string;
    instance: string;
    uniqueId: string;
    verificationId: string;
    errors: sch_uniquenessErrorHolder[];
    timestamp: Date;
    user: string;
    company: string;
    constructor(mscode?: string, instance?: string, uniqueId?: string, verificationId?: string, errors?: sch_uniquenessErrorHolder[], timestamp?: Date, user?: string, company?: string);
    static fromBody(body: any): cnt_uniquenessHolder;
}
export type sch_uniquenessErrorHolder = {
    uniqueId: string;
    errorId: string;
    origin: string;
    code: string;
    duplicates: number;
};
export declare class cnt_uniquenessErrorHolder implements sch_uniquenessErrorHolder {
    uniqueId: string;
    errorId: string;
    origin: string;
    code: string;
    duplicates: number;
    constructor(uniqueId?: string, errorId?: string, origin?: string, code?: string, duplicates?: number);
    static fromBody(body: any): cnt_uniquenessErrorHolder;
}
