"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cnt_ProcessResponse = exports.ProcessResultType = void 0;
// Define el enumerado para los tipos de resultado (con nombres en estilo ProperCase)
var ProcessResultType;
(function (ProcessResultType) {
    ProcessResultType["Ok"] = "Ok";
    ProcessResultType["Error"] = "Error";
    ProcessResultType["NoAuth"] = "NoAuth";
    ProcessResultType["Custom"] = "Custom";
})(ProcessResultType || (exports.ProcessResultType = ProcessResultType = {}));
// Define la clase para la respuesta genérica de un proceso
class Cnt_ProcessResponse {
    constructor(result = ProcessResultType.Error, message = "", customCode = "") {
        this.result = result;
        this.message = message;
        this.customCode = customCode;
    }
    // Crea una respuesta indicando que el proceso se realizó exitosamente
    static okResponse(message = "") {
        return new Cnt_ProcessResponse(ProcessResultType.Ok, message, "");
    }
    // Crea una respuesta indicando que el proceso falló o no se realizó
    static errorResponse(message = "") {
        return new Cnt_ProcessResponse(ProcessResultType.Error, message, "");
    }
    // Crea una respuesta indicando que no hay autorización
    static noAuthResponse(message = "Not authorized") {
        return new Cnt_ProcessResponse(ProcessResultType.NoAuth, message, "");
    }
    // Crea una respuesta para casos específicos o personalizados
    // Se le puede pasar un código y/o mensaje adicional que describa el resultado
    static customResponse(customCode, message) {
        return new Cnt_ProcessResponse(ProcessResultType.Custom, message || "", customCode);
    }
    // Crea una respuesta a partir de un body genérico (por ejemplo, un request HTTP)
    static fromBody(body) {
        // Se espera que body tenga la estructura 
        // { result: ResultType, message: string, customCode: string }
        return new Cnt_ProcessResponse((body === null || body === void 0 ? void 0 : body.result) || ProcessResultType.Error, (body === null || body === void 0 ? void 0 : body.message) || "", (body === null || body === void 0 ? void 0 : body.customCode) || "");
    }
}
exports.Cnt_ProcessResponse = Cnt_ProcessResponse;
