"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_hello = void 0;
// Implementación de la clase cnt_hello basada en sch_hello
class cnt_hello {
    // Constructor con valores por defecto
    constructor(status = "", mscode = "", message = "") {
        this.status = "";
        this.mscode = "";
        this.message = "";
        this.status = status;
        this.mscode = mscode;
        this.message = message;
    }
    // Método estático para crear una instancia desde un objeto genérico
    static fromObject(obj) {
        const hello = {
            status: obj.status || "",
            mscode: obj.mscode || "",
            message: obj.message || "",
        };
        return hello;
    }
    // Método estático para crear una instancia desde el cuerpo de una solicitud
    static fromBody(body) {
        const hello = {
            status: (body === null || body === void 0 ? void 0 : body.status) || "error",
            mscode: (body === null || body === void 0 ? void 0 : body.mscode) || "",
            message: (body === null || body === void 0 ? void 0 : body.message) || "Not from body.",
        };
        return hello;
    }
}
exports.cnt_hello = cnt_hello;
