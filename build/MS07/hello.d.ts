export type sch_hello = {
    status: string;
    mscode: string;
    message: string;
};
export declare class cnt_hello implements sch_hello {
    status: string;
    mscode: string;
    message: string;
    constructor(status?: string, mscode?: string, message?: string);
    static fromObject(obj: any): cnt_hello;
    static fromBody(body: any): cnt_hello;
}
