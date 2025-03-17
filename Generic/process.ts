// Define el enumerado para los tipos de resultado (con nombres en estilo ProperCase)
export enum ProcessResultType {
    Ok = "Ok",
    Error = "Error",
    NoAuth = "NoAuth",
    Custom = "Custom"
}

// Define el tipo para la respuesta genérica de un proceso
export type Sch_ProcessResponse = {
    result: ProcessResultType;
    message: string;
    // Campo adicional para uso en el caso Custom o cualquier caso donde se necesite más detalle
    customCode: string;
};

// Define la clase para la respuesta genérica de un proceso
export class Cnt_ProcessResponse implements Sch_ProcessResponse {
    result: ProcessResultType;
    message: string;
    customCode: string;

    constructor(
        result: ProcessResultType = ProcessResultType.Error,
        message: string = "",
        customCode: string = ""
    ) {
        this.result = result;
        this.message = message;
        this.customCode = customCode;
    }

    // Crea una respuesta indicando que el proceso se realizó exitosamente
    static okResponse(): Cnt_ProcessResponse {
        return new Cnt_ProcessResponse(
            ProcessResultType.Ok,
            "El proceso se realizó correctamente.",
            ""
        );
    }

    // Crea una respuesta indicando que el proceso falló o no se realizó
    static errorResponse(): Cnt_ProcessResponse {
        return new Cnt_ProcessResponse(
            ProcessResultType.Error,
            "No se pudo realizar el proceso.",
            ""
        );
    }

    // Crea una respuesta indicando que no hay autorización
    static noAuthResponse(): Cnt_ProcessResponse {
        return new Cnt_ProcessResponse(
            ProcessResultType.NoAuth,
            "No está autorizado para realizar esta acción.",
            ""
        );
    }

    // Crea una respuesta para casos específicos o personalizados
    // Se le puede pasar un código y/o mensaje adicional que describa el resultado
    static customResponse(customCode: string, message?: string): Cnt_ProcessResponse {
        return new Cnt_ProcessResponse(
            ProcessResultType.Custom,
            message || "Resultado específico de la función.",
            customCode
        );
    }

    // Crea una respuesta a partir de un body genérico (por ejemplo, un request HTTP)
    static fromBody(body: any): Cnt_ProcessResponse {
        // Se espera que body tenga la estructura 
        // { result: ResultType, message: string, customCode: string }
        return new Cnt_ProcessResponse(
            body?.result || ProcessResultType.Error,
            body?.message || "Estado del proceso no especificado.",
            body?.customCode || ""
        );
    }
}

// Ejemplo de uso
function realizarAccion(tipo: string): Cnt_ProcessResponse {
    switch (tipo) {
        case "ok":
            return Cnt_ProcessResponse.okResponse();
        case "noauth":
            return Cnt_ProcessResponse.noAuthResponse();
        case "error":
            return Cnt_ProcessResponse.errorResponse();
        default:
            // Si el tipo es personalizado, se pasa como código
            return Cnt_ProcessResponse.customResponse(tipo, "Este es un resultado personalizado.");
    }
}

// Ejemplos de llamada
console.log(realizarAccion("ok"));
// { result: 'Ok', message: 'El proceso se realizó correctamente.', customCode: '' }

console.log(realizarAccion("error"));
// { result: 'Error', message: 'No se pudo realizar el proceso.', customCode: '' }

console.log(realizarAccion("noauth"));
// { result: 'NoAuth', message: 'No está autorizado para realizar esta acción.', customCode: '' }

console.log(realizarAccion("otro-resultado"));
// { result: 'Custom', message: 'Este es un resultado personalizado.', customCode: 'otro-resultado' }
