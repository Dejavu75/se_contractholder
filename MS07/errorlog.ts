export type sch_errorLog = {
    mscode: string;
    instance: string;
    userId: number;
    type: number;
    message: string;
    sessionId: string;
    transactionId: string;
    errorMessage: string;
    extraData: string;
    executableName: string;
    executableVersion: string;
    programLine: string;
    dataSession: number;
    openFile: string;
    databasePath: string;
    defaultFolder: string;
    notes: string;
    createdAt?: Date;
};

export class cnt_errorLog implements sch_errorLog {
    mscode: string = "";
    instance: string = "";
    userId: number = 0;
    type: number = 0;
    message: string = "";
    sessionId: string = "";
    transactionId: string = "";
    errorMessage: string = "";
    extraData: string = "";
    executableName: string = "";
    executableVersion: string = "";
    programLine: string = "";
    dataSession: number = 0;
    openFile: string = "";
    databasePath: string = "";
    defaultFolder: string = "";
    notes: string = "";
    createdAt?: Date;

    // Constructor with default values
    constructor(
        mscode: string = "",
        instance: string = "",
        userId: number = 0,
        type: number = 0,
        message: string = "",
        sessionId: string = "",
        transactionId: string = "",
        errorMessage: string = "",
        extraData: string = "",
        executableName: string = "",
        executableVersion: string = "",
        programLine: string = "",
        dataSession: number = 0,
        openFile: string = "",
        databasePath: string = "",
        defaultFolder: string = "",
        notes: string = "",
        createdAt?: Date
    ) {
        this.mscode = mscode;
        this.instance = instance;
        this.userId = userId;
        this.type = type;
        this.message = message;
        this.sessionId = sessionId;
        this.transactionId = transactionId;
        this.errorMessage = errorMessage;
        this.extraData = extraData;
        this.executableName = executableName;
        this.executableVersion = executableVersion;
        this.programLine = programLine;
        this.dataSession = dataSession;
        this.openFile = openFile;
        this.databasePath = databasePath;
        this.defaultFolder = defaultFolder;
        this.notes = notes;
        this.createdAt = createdAt;
    }

    static fromRow(oRow: any): cnt_errorLog {
        return new cnt_errorLog(
            oRow.mscode || "",
            oRow.instance || "",
            oRow.userId || 0,
            oRow.type || 0,
            oRow.message || "",
            oRow.sessionId || "",
            oRow.transactionId || "",
            oRow.errorMessage || "",
            oRow.extraData || "",
            oRow.executableName || "",
            oRow.executableVersion || "",
            oRow.programLine || "",
            oRow.dataSession || 0,
            oRow.openFile || "",
            oRow.databasePath || "",
            oRow.defaultFolder || "",
            oRow.notes || "",
            oRow.createdAt ? new Date(oRow.createdAt) : undefined
        );
    }

    static fromBody(body: any): cnt_errorLog {
        return new cnt_errorLog(
            body.msCode || "",
            body.instance || "",
            body.userId || 0,
            body.type || 0,
            body.message || "",
            body.sessionId || "",
            body.transactionId || "",
            body.errorMessage || "",
            body.extraData || "",
            body.executableName || "",
            body.executableVersion || "",
            body.programLine || "",
            body.dataSession || 0,
            body.openFile || "",
            body.databasePath || "",
            body.defaultFolder || "",
            body.notes || "",
            body.createdAt ? new Date(body.createdAt) : undefined
        );
    }
}
