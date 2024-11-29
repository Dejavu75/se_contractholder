export type sch_UniquenessHolder = {
    mscode: string;
    instance: string;
    uniqueId: string;
    verificationId: string;
    errors: sch_uniquenessErrorHolder[];
    timestamp: Date;
};
export declare class cnt_UniquenessHolder implements sch_UniquenessHolder {
    mscode: string;
    instance: string;
    uniqueId: string;
    verificationId: string;
    errors: sch_uniquenessErrorHolder[];
    timestamp: Date;
    constructor(mscode?: string, instance?: string, uniqueId?: string, verificationId?: string, errors?: sch_uniquenessErrorHolder[], timestamp?: Date);
    static fromBody(body: any): cnt_UniquenessHolder;
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
