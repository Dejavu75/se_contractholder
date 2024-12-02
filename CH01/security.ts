import * as crypto from "crypto";

// Define types with sch_ prefix
export type sch_Permission = {
  id: number;
  description: string;
  status: "hide" | "disabled" | "enabled";
};

export type sch_AccountHolder = {
  id: number;
  idges: number;
  username: string;
  email: string;
  permissions: sch_Permission[];
  password_ges: string;
};

export type sch_SessionHolder = {
  token: string;
  expirationTime: Date;
  accountHolder: sch_AccountHolder;
};

// Classes implementing the types with cnt_ prefix
export class cnt_Permission implements sch_Permission {
  id: number;
  description: string;
  status: "hide" | "disabled" | "enabled";

  constructor(id: number, description: string, status: "hide" | "disabled" | "enabled") {
    this.id = id;
    this.description = description;
    this.status = status;
  }

  toString(): string {
    return `Permission{id: ${this.id}, description: ${this.description}, status: ${this.status}}`;
  }
  static fromMap(map: sch_Permission): cnt_Permission {
    return new cnt_Permission(map.id, map.description, map.status);
  }
}

export class cnt_AccountHolder implements sch_AccountHolder {
  id: number;
  username: string;
  email: string;
  private password: string; // Original password (private)
  private passwordHash: string; // Hashed password
  permissions: cnt_Permission[];
  idges: number;
  password_ges: string;
  constructor(
    id: number,
    idges: number,
    username: string,
    email: string,
    password: string,
    permissions: cnt_Permission[],
    password_ges: string
  ) {
    this.id = id;
    this.idges = idges;
    this.username = username;
    this.email = email;
    this.password = password;
    this.passwordHash = this.generatePasswordHash(password);
    this.permissions = permissions;
    this.password_ges = password_ges;
  }
  static fromBody(body: any): cnt_AccountHolder { 
    return new cnt_AccountHolder(
      body.id ||0,
      body.idges||0,
      body.username,
      body.email||"",
      body.password||"",
      body.permissions?.map((p: any) => cnt_Permission.fromMap(p)),
      body.password_ges||""
    );
  }
  static fromMap(map: cnt_AccountHolder): cnt_AccountHolder {
    return new cnt_AccountHolder(
      map.id,
      map.idges,
      map.username,
      map.email,
      "",
      map.permissions?.map((p) => cnt_Permission.fromMap(p)),
      map.password_ges
    );
  }
  static defaultAccountHolder(): cnt_AccountHolder {
    return new cnt_AccountHolder(0, 0,"", "", "", [],"");
  }

  private generatePasswordHash(password: string): string {
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

export class cnt_SessionHolder implements sch_SessionHolder {
  token: string;
  expirationTime: Date;
  accountHolder: cnt_AccountHolder;

  constructor(token: string, expirationTime: Date, accountHolder: cnt_AccountHolder) {
    this.token = token;
    this.expirationTime = expirationTime;
    this.accountHolder = accountHolder;
  }

  static defaultSession(): cnt_SessionHolder {
    return new cnt_SessionHolder(
      "defaultToken",
      new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
      cnt_AccountHolder.defaultAccountHolder()
    );
  }

  isSessionValid(): boolean {
    return new Date() < this.expirationTime;
  }

  toString(): string {
    return `SessionHolder{token: ${this.token}, expirationTime: ${this.expirationTime.toISOString()}, accountHolder: ${this.accountHolder}}`;
  }
}
