"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_errorLog = void 0;
class cnt_errorLog {
    // Constructor with default values
    constructor(mscode = "", instance = "", userId = 0, type = 0, message = "", sessionId = "", transactionId = "", errorMessage = "", extraData = "", executableName = "", executableVersion = "", programLine = "", dataSession = 0, openFile = "", databasePath = "", defaultFolder = "", notes = "", createdAt) {
        this.mscode = "";
        this.instance = "";
        this.userId = 0;
        this.type = 0;
        this.message = "";
        this.sessionId = "";
        this.transactionId = "";
        this.errorMessage = "";
        this.extraData = "";
        this.executableName = "";
        this.executableVersion = "";
        this.programLine = "";
        this.dataSession = 0;
        this.openFile = "";
        this.databasePath = "";
        this.defaultFolder = "";
        this.notes = "";
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
    static fromRow(oRow) {
        return new cnt_errorLog(oRow.mscode || "", oRow.instance || "", oRow.userId || 0, oRow.type || 0, oRow.message || "", oRow.sessionId || "", oRow.transactionId || "", oRow.errorMessage || "", oRow.extraData || "", oRow.executableName || "", oRow.executableVersion || "", oRow.programLine || "", oRow.dataSession || 0, oRow.openFile || "", oRow.databasePath || "", oRow.defaultFolder || "", oRow.notes || "", oRow.createdAt ? new Date(oRow.createdAt) : undefined);
    }
    static fromBody(body) {
        return new cnt_errorLog(body.msCode || "", body.instance || "", body.userId || 0, body.type || 0, body.message || "", body.sessionId || "", body.transactionId || "", body.errorMessage || "", body.extraData || "", body.executableName || "", body.executableVersion || "", body.programLine || "", body.dataSession || 0, body.openFile || "", body.databasePath || "", body.defaultFolder || "", body.notes || "", body.createdAt ? new Date(body.createdAt) : undefined);
    }
}
exports.cnt_errorLog = cnt_errorLog;
