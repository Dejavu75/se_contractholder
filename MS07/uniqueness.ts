export type sch_uniquenessHolder = {
    mscode: string;
    instance: string;
    uniqueId: string;
    verificationId: string;
    errors: sch_uniquenessErrorHolder[];
    timestamp: Date;
};

export class cnt_uniquenessHolder implements sch_uniquenessHolder {
    mscode: string = "";
    instance: string = "";
    uniqueId: string = "";
    verificationId: string = "";
    errors: sch_uniquenessErrorHolder[] = [];
    timestamp: Date = new Date();

    constructor(
        mscode: string = "",
        instance: string = "",
        uniqueId: string = "",
        verificationId: string = "",
        errors: sch_uniquenessErrorHolder[] = [],
        timestamp: Date = new Date()
    ) {
        this.mscode = mscode;
        this.instance = instance;
        this.uniqueId = uniqueId;
        this.verificationId = verificationId;
        this.errors = errors;
        this.timestamp = timestamp;
    }

    static fromBody(body: any): cnt_uniquenessHolder {
        let errors: sch_uniquenessErrorHolder[] = [];
            if (Array.isArray(body?.errors)) errors=body.errors.map((error: any) => cnt_uniquenessErrorHolder.fromBody(error))
            if (Array.isArray(body?.errors_kv_collection?.collectionitems)) {
                errors=body?.errors_kv_collection?.collectionitems.map((error: any) => cnt_uniquenessErrorHolder.fromBody(error))
            }            
        return new cnt_uniquenessHolder(
            body?.mscode || "",
            body?.instance || "",
            body?.uniqueId || body?.uniqueid || "",
            body?.verificationId ||  body?.verificationid || "",
            errors,
            new Date(body?.timestamp || Date.now())
        );
    }
}

export type sch_uniquenessErrorHolder = {
    uniqueId: string;
    errorId: string;    
    origin: string;
    code: string;
    duplicates: number;
};

export class cnt_uniquenessErrorHolder implements sch_uniquenessErrorHolder {
    uniqueId: string = "";
    errorId: string = "";
    origin: string = "";
    code: string = "";
    duplicates: number = 0;

    constructor(
            uniqueId: string = "",
            errorId: string = "",
            origin: string = "",
            code: string = "",
            duplicates: number = 0) 
    {
        this.uniqueId = uniqueId;
        this.errorId = errorId;
        this.origin = origin;
        this.code = code;
        this.duplicates = duplicates;
    }

    static fromBody(body: any): cnt_uniquenessErrorHolder {
        return new cnt_uniquenessErrorHolder(
            body?.uniqueId || body?.uniqueid || "",
            body?.errorId || body?.errorid || "",
            body?.origin || "",
            body?.code || "",
            body?.duplicates || 0
        );
    }
}
