"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_errorLog = void 0;
class cnt_errorLog {
    // Constructor with default values
    constructor(mscode = "", instance = "", userId = 0, type = 0, message = "", sessionId = "", transactionId = "", errorMessage = "", extraData = "", executableName = "", executableVersion, callStack = "", program = "", dataSession = 0, openFile = "", databasePath = "", defaultFolder = "", notes = "", createdAt) {
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
        this.executableVersion = new Date();
        this.callStack = "";
        this.program = "";
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
        this.callStack = callStack;
        this.program = program;
        this.dataSession = dataSession;
        this.openFile = openFile;
        this.databasePath = databasePath;
        this.defaultFolder = defaultFolder;
        this.notes = notes;
        this.createdAt = createdAt;
    }
    static fromRow(oRow) {
        return new cnt_errorLog(oRow.mscode || "", oRow.instance || "", oRow.userId || 0, oRow.type || 0, oRow.message || "", oRow.sessionId || "", oRow.transactionId || "", oRow.errorMessage || "", oRow.extraData || "", oRow.executableName || "", oRow.executableVersion || "", oRow.callStack || "", oRow.program || "", oRow.dataSession || 0, oRow.openFile || "", oRow.databasePath || "", oRow.defaultFolder || "", oRow.notes || "", oRow.createdAt ? new Date(oRow.createdAt) : undefined);
    }
    static fromBody(body) {
        return new cnt_errorLog(body.msCode || "", body.instance || "", body.userId || 0, body.type || 0, body.message || "", body.sessionId || "", body.transactionId || "", body.errorMessage || "", body.extraData || "", body.executableName || "", body.executableVersion || "", body.callStack || "", body.program || "", body.dataSession || 0, body.openFile || "", body.databasePath || "", body.defaultFolder || "", body.notes || "", body.createdAt ? new Date(body.createdAt) : undefined);
    }
    fillErrorLog(errorText) {
        // Extraemos los datos del mensaje de error
        const parsedError = parseErrorMessage(errorText);
        this.errorMessage = parsedError.errorMessage;
        this.extraData = parsedError.extraData;
        this.executableName = parsedError.executableName;
        this.executableVersion = parsedError.executableVersion;
        this.callStack = parsedError.callStack;
        this.program = parsedError.program;
        this.dataSession = parsedError.dataSession;
        this.openFile = parsedError.openFile;
        this.databasePath = parsedError.databasePath;
        this.defaultFolder = parsedError.defaultFolder;
        this.notes = parsedError.notes;
        return this;
    }
}
exports.cnt_errorLog = cnt_errorLog;
function parseErrorMessage(errorText) {
    const userMatch = errorText.match(/Usuario:\s*:\s*(.+)/);
    const errorMessageMatch = errorText.match(/Mensaje de Error\s*:\s*(.+)/);
    const extraDataMatch = errorText.match(/Extra data\s*:\s*(.+)/);
    const executableVersionMatch = errorText.match(/Version Ejecutable:\s*([^\s]+)\s*:\s*(.+)/);
    const callStackMatch = errorText.match(/Programa \/ Línea\s*:\s*(.+)/);
    const dataSessionMatch = errorText.match(/Datasession\s*:\s*(\d+)/);
    const openFileMatch = errorText.match(/Archivo Abierto\s*:\s*(.+)/);
    const databasePathMatch = errorText.match(/Database\s*:\s*(.+)/);
    const defaultFolderMatch = errorText.match(/Carpeta x Defecto\s*:\s*(.+)/);
    const transactionIdMatch = errorText.match(/Transacción ID\s*:\s*(.+)/);
    const notesMatch = errorText.match(/Notas\s*:\s*(.+)/);
    const executableName = executableVersionMatch ? executableVersionMatch[1].trim() : "";
    const exever = executableVersionMatch ? executableVersionMatch[2].trim() : "";
    const executableVersion = parseDTFox(exever);
    // Extraer callStack y program
    let callStack = callStackMatch ? callStackMatch[1].trim() : "";
    callStack = callStack.replace("ON...  ERR_HAND DISP_ERROR REPORTAR", "").trim();
    callStack = callStack.replace(/\s+/g, " | ");
    const program = callStack ? callStack.split(" | ").pop() || "" : "";
    return {
        user: userMatch ? userMatch[1].trim() : "",
        errorMessage: errorMessageMatch ? errorMessageMatch[1].trim() : "",
        extraData: extraDataMatch ? extraDataMatch[1].trim() : "",
        executableName: executableName,
        executableVersion: executableVersion || new Date(1980, 1, 1),
        callStack: callStack,
        program: program,
        dataSession: dataSessionMatch ? parseInt(dataSessionMatch[1].trim()) : 0,
        openFile: openFileMatch ? openFileMatch[1].trim() : "",
        databasePath: databasePathMatch ? databasePathMatch[1].trim() : "",
        defaultFolder: defaultFolderMatch ? defaultFolderMatch[1].trim() : "",
        transactionId: transactionIdMatch ? transactionIdMatch[1].trim() : "",
        notes: notesMatch ? notesMatch[1].trim() : ""
    };
}
function parseDTFox(dateString) {
    const dateMatch = dateString.match(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/);
    if (!dateMatch)
        return null;
    const day = parseInt(dateMatch[1], 10);
    const month = parseInt(dateMatch[2], 10) - 1; // Meses en JS van de 0 a 11
    const year = parseInt(dateMatch[3], 10);
    const hours = parseInt(dateMatch[4], 10);
    const minutes = parseInt(dateMatch[5], 10);
    const seconds = parseInt(dateMatch[6], 10);
    // Creamos la fecha en UTC y aplicamos el desfase horario de -3 horas
    const utcDate = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
    utcDate.setHours(utcDate.getHours() - 3);
    return utcDate;
}
