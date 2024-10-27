// import { cnt_heartbeat } from "./MS07/healthmonitor";

// let cnt: cnt_heartbeat = new cnt_heartbeat();
// cnt.heartbeatAt = new Date();
// cnt.expectedInterval = 10;
// console.log(cnt);
// console.log(cnt.down);
// console.log(cnt.alert);

import { cnt_errorLog } from "./MS07/errorlog";

const ErrorMSG: string = `
Usuario:          : SUPERUSUARIO
Mensaje de Error  : 12  Variable 'QWEQWE' is not found.
Extra data               : QWEQWE
Version Ejecutable: GES :17/10/2024 18:02:14
Programa / Línea  :  CLEANUP2 CLEANUP2 COMIENZO MODULO_FACTURACION.COMMAND8.CLICK VE_CONTROL_DE_PEDIDOS CONTROL_DE_PEDIDOS.CONTAINER1.COMMAND34.RIGHTCLICK ON...  ERR_HAND DISP_ERROR REPORTAR
Datasession       : 2
Archivo Abierto   : DS:2 F:0X0NBT8P.DBF (Alias: PEDIDOS_PENDIENTES)
Database          : GES.DBC
Carpeta x Defecto : asdasdasdasdas
Transacción ID    : ID:    Nivel: 0
Notas             : Error en la línea 2 que dice asd=qweqwe  . El archivo en el area actual era F:/asdasdasdSISTEMA\ [PEDIDO]. 
Extra data        : QWEQWE
Por favor comunique al soporte técnico que al realizar esta operación se ha producido un error.
`

let cnt: cnt_errorLog = new cnt_errorLog( "",
    "",
    0,
     0,
     "",
     "",
     "",
     "",
     "",
     "",
    new Date() ,
     "",
     "",
     0,
     "",
     "",
     "",
     "");

cnt.mscode = "MS07";
cnt.instance = "instance";
cnt.userId = 1;
cnt.createdAt = new Date();
cnt.type = 1;
cnt.message = "Error base";
cnt.errorMessage = ErrorMSG
cnt.sessionId = "sessionId";
cnt.transactionId = "transactionId";
cnt.fillErrorLog(ErrorMSG);
console.log(cnt);
