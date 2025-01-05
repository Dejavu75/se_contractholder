// Definición del tipo sch_hello
export type sch_hello = {
    status: string;
    mscode: string;
    message: string;
};

// Implementación de la clase cnt_hello basada en sch_hello
export class cnt_hello implements sch_hello {
    status: string = "";
    mscode: string = "";
    message: string = "";

    // Constructor con valores por defecto
    constructor(status: string = "", mscode: string = "", message: string = "") {
        this.status = status;
        this.mscode = mscode;
        this.message = message;
    }

    // Método estático para crear una instancia desde un objeto genérico
    static fromObject(obj: any): cnt_hello {
        const hello: cnt_hello = {
            status: obj.status || "",
            mscode: obj.mscode || "",
            message: obj.message || "",
        };
        return hello;
    }

    // Método estático para crear una instancia desde el cuerpo de una solicitud
    static fromBody(body: any): cnt_hello {
        const hello: cnt_hello = {
            status: body?.status || "error",
            mscode: body?.mscode || "",
            message: body?.message || "Not from body.",
        };
        return hello;
    }
}
