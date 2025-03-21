export declare enum ProcessResultType {
    Ok = "Ok",
    Error = "Error",
    NoAuth = "NoAuth",
    Custom = "Custom"
}
export type Sch_ProcessResponse = {
    result: ProcessResultType;
    message: string;
    customCode: string;
};
export declare class Cnt_ProcessResponse implements Sch_ProcessResponse {
    result: ProcessResultType;
    message: string;
    customCode: string;
    constructor(result?: ProcessResultType, message?: string, customCode?: string);
    static okResponse(message?: string): Cnt_ProcessResponse;
    static errorResponse(message?: string): Cnt_ProcessResponse;
    static noAuthResponse(message?: string): Cnt_ProcessResponse;
    static customResponse(customCode: string, message?: string): Cnt_ProcessResponse;
    static fromBody(body: any): Cnt_ProcessResponse;
}
