const CryptoJS = require("crypto-js");
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
    executableVersion: Date;
    callStack: string;
    program: string;
    dataSession: number;
    openFile: string;
    databasePath: string;
    defaultFolder: string;
    notes: string;
    createdAt?: Date;
    origin: string;
    status: string;
    hash: string;
    erridu:string;
    errcount: number;
    user: string;
    company: string;
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
    executableVersion: Date = new Date();
    callStack: string = "";
    program: string = "";
    dataSession: number = 0;
    openFile: string = "";
    databasePath: string = "";
    defaultFolder: string = "";
    notes: string = "";
    createdAt?: Date;
    origin: string;
    status: string;
    hash: string = "";
    erridu:string = "";
    errcount: number=0;
    user: string = "";
    company: string = "";

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
        executableVersion: Date ,
        callStack: string = "",
        program: string = "",
        dataSession: number = 0,
        openFile: string = "",
        databasePath: string = "",
        defaultFolder: string = "",
        notes: string = "",
        createdAt?: Date, 
        readerrorMessage: boolean = true,
        origin: string = "",
        status: string = "",
        hash: string = "", 
        erridu:string = "",
        errcount: number=0,
        user: string = "",
        company: string = ""
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
        this.callStack = callStack;
        this.program = program;
        this.dataSession = dataSession;
        this.openFile = openFile;
        this.databasePath = databasePath;
        this.defaultFolder = defaultFolder;
        this.notes = notes;
        this.createdAt = createdAt;
        this.hash = hash;
        if (readerrorMessage) this.fillErrorLog(errorMessage);
        this.origin = origin;
        this.status = status;
        this.erridu = erridu;  
        this.errcount = errcount;  
        this.user = user;
        this.company = company;    
    }

    static fromRow(oRow: any, readerrorMessage: boolean=true): cnt_errorLog {
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
            oRow.callStack || "",
            oRow.program || "",            
            oRow.dataSession || 0,
            oRow.openFile || "",
            oRow.databasePath || "",
            oRow.defaultFolder || "",
            oRow.notes || "",
            oRow.createdAt ? new Date(oRow.createdAt) : undefined,
            readerrorMessage,
            oRow.origin || "",
            oRow.status || "",
            oRow.hash || "", 
            oRow.erridu || "",
            oRow.errcount || 0,
            oRow.user || "",
            oRow.company || ""

        );
    }

    static fromBody(body: any, readerrorMessage: boolean=true): cnt_errorLog {
        return new cnt_errorLog(
            body.mscode || "",
            body.instance || "",
            body.userId || body.userid || 0,
            body.type || 0,
            body.message || "",
            body.sessionId || body.sessionid || "",
            body.transactionId || body.transactionid ||"",
            body.errorMessage || body.errormessage || "",
            body.extraData || body.extradata || "",
            body.executableName || body.executablename || "",
            body.executableVersion || body.executableversion || "",
            body.callStack || body.callstack || "",
            body.program || "",
            body.dataSession || body.datasession || 0,
            body.openFile || body.openfile || "",
            body.databasePath || body.databasepath || "",
            body.defaultFolder || body.defaultfolder || "",
            body.notes || "",
            body.createdAt ? new Date(body.createdAt) : undefined,
            readerrorMessage,
            body.origin || "",
            body.status || "",
            body.hash || "",
            body.erridu || "",
            body.errcount || 0,
            body.user || "",
            body.company || ""
        );
    }
    
    fillErrorLog(errorText: string): cnt_errorLog {
        // Extraemos los datos del mensaje de error
        const parsedError = parseErrorMessage(errorText);   
        this.errorMessage=errorText== "" ? this.errorMessage: errorText;
        this.message=parsedError.message== "" ? this.errorMessage:parsedError.message;
        this.extraData=parsedError.extraData== "" ? this.extraData:parsedError.extraData;
        this.executableName=parsedError.executableName== "" ? this.executableName:parsedError.executableName;
        this.executableVersion  = parsedError.executableVersion== null ? this.executableVersion:parsedError.executableVersion;
        this.callStack=parsedError.callStack== "" ? this.callStack:parsedError.callStack;
        this.program=parsedError.program== "" ? this.program:parsedError.program;
        this.dataSession=parsedError.dataSession;
        this.openFile=parsedError.openFile== "" ? this.openFile:parsedError.openFile;
        this.databasePath=parsedError.databasePath== "" ? this.databasePath:parsedError.databasePath;
        this.defaultFolder=parsedError.defaultFolder== "" ? this.defaultFolder:parsedError.defaultFolder;
        this.notes=parsedError.notes== "" ? this.notes:parsedError.notes;   
        this.hash = parsedError.hash == "" ? this.hash : parsedError.hash; 
        return this;
    }
}



type ParsedError = {
    user: string;
    errorMessage: string;
    message: string;
    extraData: string;
    executableName: string;
    executableVersion: Date;
    callStack: string;
    program: string;    
    dataSession: number;
    openFile: string;
    databasePath: string;
    defaultFolder: string;
    transactionId: string;
    notes: string;
    hash: string;
    
};

function parseErrorMessage(errorText: string): ParsedError {
    const userMatch = errorText.match(/Usuario:\s*:\s*(.+)/);
    const messageMatch = errorText.match(/Mensaje de Error\s*:\s*(.+)/);
    const extraDataMatch = errorText.match(/Extra data\s*:\s*(.+)/);
    const executableVersionMatch = errorText.match(/Version Ejecutable:\s*([^\s]+)\s*:\s*(.+)/);
    const callStackMatch = errorText.match(/Stack\s*:\s*(.+)/);
    const programMatch = errorText.match(/Programa \/ L.nea\s*:\s*(.+)/);
    const dataSessionMatch = errorText.match(/Datasession\s*:\s*(\d+)/);
    const openFileMatch = errorText.match(/Archivo Abierto\s*:\s*(.+)/);
    const databasePathMatch = errorText.match(/Database\s*:\s*(.+)/);
    const defaultFolderMatch = errorText.match(/Carpeta x Defecto\s*:\s*(.+)/);
    const transactionIdMatch = errorText.match(/Transacción ID\s*:\s*(.+)/);
    const notesMatch = errorText.match(/Notas\s*:\s*(.+)/);
    const executableName = executableVersionMatch ? executableVersionMatch[1].trim() : "";
    const exever: string=executableVersionMatch ? executableVersionMatch[2].trim() : ""
    const executableVersion:Date | null = parseDTFox(exever)
    
    const program = programMatch ? programMatch[1].trim() : "";
    const callStack = callStackMatch ? callStackMatch[1].trim() : "";
    const hashtext = obtenerHash(callStack, messageMatch ? messageMatch[1].trim() : "", program );

    return {
        user: userMatch ? userMatch[1].trim() : "",
        errorMessage: errorText,
        message: messageMatch ? messageMatch[1].trim() : "",
        extraData: extraDataMatch ? extraDataMatch[1].trim() : "",
        executableName: executableName,
        executableVersion: executableVersion || new Date(1980,1,1),
        callStack: callStack,
        program: program,
        dataSession: dataSessionMatch ? parseInt(dataSessionMatch[1].trim()) : 0,
        openFile: openFileMatch ? openFileMatch[1].trim() : "",
        databasePath: databasePathMatch ? databasePathMatch[1].trim() : "",
        defaultFolder: defaultFolderMatch ? defaultFolderMatch[1].trim() : "",
        transactionId: transactionIdMatch ? transactionIdMatch[1].trim() : "",
        notes: notesMatch ? notesMatch[1].trim() : "",
        hash: hashtext ? hashtext : ""
    };
}
function parseDTFox(dateString: string): Date | null {
    const dateMatch = dateString.match(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/);

    if (!dateMatch) return null;

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

function obtenerHash(callStack: string, message: string, program: string): string {
    const hash = CryptoJS.SHA256(callStack + message).toString(CryptoJS.enc.Hex);
    const hashText = hash.slice(-16);
    return hashText
}