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
    static okResponse(message: string=""): Cnt_ProcessResponse {
        return new Cnt_ProcessResponse(
            ProcessResultType.Ok,
            message,
            ""
        );
    }

    // Crea una respuesta indicando que el proceso falló o no se realizó
    static errorResponse(message: string=""): Cnt_ProcessResponse {
        return new Cnt_ProcessResponse(
            ProcessResultType.Error,
            message,
            ""
        );
    }

    // Crea una respuesta indicando que no hay autorización
    static noAuthResponse(message: string="Not authorized"): Cnt_ProcessResponse {
        return new Cnt_ProcessResponse(
            ProcessResultType.NoAuth,
            message,
            ""
        );
    }

    // Crea una respuesta para casos específicos o personalizados
    // Se le puede pasar un código y/o mensaje adicional que describa el resultado
    static customResponse(customCode: string, message?: string): Cnt_ProcessResponse {
        return new Cnt_ProcessResponse(
            ProcessResultType.Custom,
            message || "",
            customCode
        );
    }

    // Crea una respuesta a partir de un body genérico (por ejemplo, un request HTTP)
    static fromBody(body: any): Cnt_ProcessResponse {
        // Se espera que body tenga la estructura 
        // { result: ResultType, message: string, customCode: string }
        return new Cnt_ProcessResponse(
            body?.result || ProcessResultType.Error,
            body?.message || "",
            body?.customCode || ""
        );
    }
}
