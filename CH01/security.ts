import * as crypto from "crypto";


//#region "Permission"
// Define types with sch_ prefix
export enum PermissionStatus {
  hide = "hide",
  disabled = "disabled",
  enabled = "enabled",
  default = "default"
}
export enum PermissionType {
  permissive= "permissive",
  restrictive= "restrictive"
}
export type sch_Permission = {
  id: number;
  domainId: string;
  name: string;
  description: string;
  status: PermissionStatus;
  type: PermissionType;
  domain: string;   
};
export class cnt_Permission implements sch_Permission {
  id: number;
  domainId: string;
  name: string;
  description: string;
  status: PermissionStatus;
  type: PermissionType;
  domain: string;


  constructor(
    id: number,
    domainId: string,
    name: string,
    description: string,
    status: PermissionStatus ,
    type: PermissionType = PermissionType.permissive,
    domain: string
  )
  {
    this.id = id || 0;
    this.domainId = domainId || "";
    this.name = name || "";
    this.description = description || "";
    this.status = status || PermissionStatus.enabled;
    this.type = type || PermissionType.permissive;
    this.domain = domain;
  }

  toString(): string {
    return `Permission{id: ${this.id}, description: ${this.description}, status: ${this.status}}`;
  }
  static fromMap(map: sch_Permission): cnt_Permission {
    return new cnt_Permission(
      map?.id ||0,
      map?.domainId || "",
      map?.name ||"",
      map?.description ||"",
      map?.status || PermissionStatus.default,
      map?.type || PermissionType.permissive,
      map?.domain ||""
    );
  }
  static fromRow(row: any): cnt_Permission {
    return new cnt_Permission(
      row?.id ||0,
      row?.domainId || row?.domainid || "",
      row?.name ||"",
      row?.description ||"",
      row?.status || PermissionStatus.default,
      row?.type || PermissionType.permissive,
      row?.domain ||""
    );
  }
}
//#endregion "Permission"

//#region "AccountHolder"
export type sch_AccountHolder = {
  id: number;
  idGes: number;
  username: string;
  email: string;
  permissions: sch_Permission[];
  passwordGes: string;
};

export class cnt_AccountHolder implements sch_AccountHolder {
  id: number;
  username: string;
  email: string;
  private password: string; // Original password (private)
  private passwordHash: string; // Hashed password
  permissions: cnt_Permission[];
  idGes: number;
  passwordGes: string;
  constructor(
    id: number,
    idGes: number,
    username: string,
    email: string,
    password: string,
    permissions: cnt_Permission[],
    passwordGes: string
  ) {
    this.id = id;
    this.idGes = idGes;
    this.username = username;
    this.email = email;
    this.password = password;
    this.passwordHash = this.generatePasswordHash(password);
    this.permissions = permissions;
    this.passwordGes = passwordGes;
  }
  static fromBody(body: any): cnt_AccountHolder { 
    return new cnt_AccountHolder(
      body.id ||0,
      body.idGes||0,
      body.username,
      body.email||"",
      body.password||"",
      body.permissions?.map((p: any) => cnt_Permission.fromMap(p)),
      body.passwordGes||""
    );
  }
  static fromMap(map: cnt_AccountHolder): cnt_AccountHolder {
    return new cnt_AccountHolder(
      map.id,
      map.idGes,
      map.username,
      map.email,
      "",
      map.permissions?.map((p) => cnt_Permission.fromMap(p)),
      map.passwordGes
    );
  }
  static defaultAccountHolder(): cnt_AccountHolder {
    return new cnt_AccountHolder(0, 0,"", "", "", [],"");
  }

  private generatePasswordHash(password: string): string {
    if (!password) {
      return "";
    }
    const salt = "solges";
    return crypto.createHash("sha256").update(password + salt).digest("base64");
  }

  getPasswordHash(): string {
    return this.passwordHash;
  }

  updatePassword(newPassword: string): string {
    this.password = newPassword;
    this.passwordHash = this.generatePasswordHash(newPassword);
    return this.passwordHash;
  }

  verifyPassword(password: string): boolean {
    const hash = this.generatePasswordHash(password);
    return hash === this.passwordHash;
  }

  toString(): string {
    return `AccountHolder{id: ${this.id}, username: ${this.username}, email: ${this.email}, permissions: ${JSON.stringify(
      this.permissions
    )}}`;
  }
}
//#endregion "AccountHolder"

//#region "SessionHolder"
export enum sessionStatus
{
  active = "active",
  inactive = "inactive",
  expired = "expired",
  unknow = "unknow"
}
export type sch_SessionHolder = {
  token: string;
  agesToken: string;
  expirationTime: Date;
  accountHolder: cnt_AccountHolder;
  domain: string;
  status: sessionStatus
  deviceHash: string;
  accountId: number;
};
export class cnt_SessionHolder implements sch_SessionHolder {
  token: string;
  agesToken: string;
  expirationTime: Date;
  accountHolder: cnt_AccountHolder;
  domain: string
  status: sessionStatus
  deviceHash: string;
  accountId: number;

  constructor(
    token: string,
    agesToken: string,
    expirationTime: Date,
    accountHolder: cnt_AccountHolder,
    domain: string = "",
    status: sessionStatus=sessionStatus.unknow,
    deviceHash: string ="",
    accountId: number = 0
  )
  {
    this.token = token;
    this.agesToken = agesToken;
    this.expirationTime = expirationTime;
    this.accountHolder = accountHolder;
    this.domain = domain || "global";
    this.status = status || sessionStatus.unknow;
    this.deviceHash = deviceHash || "";
    this.accountId = accountId || 0;
  }

  static defaultSession(): cnt_SessionHolder {
    return new cnt_SessionHolder(
      "",
      "",
      new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
      cnt_AccountHolder.defaultAccountHolder(),
      "global",
      sessionStatus.unknow,
      "",
      0
    );
  }

  static fromMap(map: cnt_SessionHolder): cnt_SessionHolder {
    return new cnt_SessionHolder(
      map.token,
      map.agesToken,
      map.expirationTime,
      cnt_AccountHolder.fromMap(map.accountHolder),
      map.domain,
      map.status,
      map.deviceHash,
      map?.accountId || 0
    );
  }
  static fromBody(body: any): cnt_SessionHolder {
    return new cnt_SessionHolder(
      body.token,
      body.agesToken || body.agestoken,
      body.expirationTime || body.expirationtime,
      cnt_AccountHolder.fromBody(body?.accountHolder),
      body.domain,
      body.status,
      body.deviceHash || body.devicehash,
      body?.accountId || 0
    );
  }
  static fromRow(row: any): cnt_SessionHolder {
    return new cnt_SessionHolder(
      row.token,
      row.agesToken ?? row.agestoken,
      row.expirationTime ?? row.expirationtime,
      cnt_AccountHolder.defaultAccountHolder(),
      row.domain,
      row.status,
      row.devicehash ?? row.deviceHash,
      row.accountid ?? row.accountId
      )
    };
  static fromRequest(req: any): cnt_SessionHolder {
    let session = cnt_SessionHolder.fromHeader(req?.headers);
    if (!session.token) {
      session = cnt_SessionHolder.fromCookie(req.cookies);
    }
    return session;
  }
  static fromHeader(headers: any): cnt_SessionHolder {
    let session = cnt_SessionHolder.defaultSession();
    session.token = headers?.["x_ha_session_token"] || session.token;
    session.deviceHash = headers?.["x_ha_session_device_hash"] || session.deviceHash;
    session.domain = headers?.["x_ha_session_domain"] || session.domain;
    return session;
  }
  static fromCookie(cookies: any): cnt_SessionHolder {
    let session = cnt_SessionHolder.defaultSession();
    session.token = cookies?.["ha_session_token"] || session.token;
    session.deviceHash = cookies?.["ha_session_device_hash"] || session.deviceHash;
    session.domain = cookies?.["ha_session_domain"] || session.domain;   
    return session;
  }
  static toHeader(res: any, session: cnt_SessionHolder): any {
    res.setHeader("x_ha_session_token", session.token);
    return res
  }
  toHeader(res: any): any {
    return cnt_SessionHolder.toHeader(res, this);
  }
  static toCookie(res: any, session: cnt_SessionHolder): any {
    res.cookie("ha_session_token", session.token, { httpOnly: true, secure: true });
    return res
  }
  toCookie(res: any): any {
    return cnt_SessionHolder.toCookie(res, this);
  }
  isSessionValid(): boolean {
    return new Date() < this.expirationTime;
  }

  toString(): string {
    return `SessionHolder{token: ${this.token}, expirationTime: ${this.expirationTime.toISOString()}, accountHolder: ${this.accountHolder}}`;
  }
}
//#endregion "SessionHolder"