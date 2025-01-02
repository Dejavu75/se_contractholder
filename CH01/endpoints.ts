export type sch_MSEndpoints = {
    heartbeatMonitor:string 
  }
  export type sch_HAEndpoints = {
    foreign:string
    credentials:string
    information: string;
  }

export class GeneralEndpoints {
    localNotifyListeners(): void {
        // Implementa esta función si necesitas notificar cambios.
    }
}
 

export class cnt_HAEndpoints extends GeneralEndpoints implements sch_HAEndpoints{
    foreign: string;
    credentials: string;
    information: string;

    constructor(foreign: string, credentials: string, information: string = "") {
        super();
        this.foreign = foreign;
        this.credentials = credentials;
        this.information = information;
    }

    static fromMap(map: Record<string, any>): cnt_HAEndpoints {
        return new cnt_HAEndpoints(
            map['foreign'] ?? "",
            map['credentials'] ?? "",
            map['information'] ?? ""
        );
    }

    static fromBody(body: Record<string, any>): cnt_HAEndpoints {
        return cnt_HAEndpoints.fromMap(body);
    }

    static defaultEndpoints(): cnt_HAEndpoints {
        return new cnt_HAEndpoints("", "");
    }

    toString(): string {
        return `HabitatEndpoints{foreign: ${this.foreign}, credentials: ${this.credentials}, information: ${this.information}}`;
    }
}

class cnt_MSEndpoints  extends GeneralEndpoints implements sch_MSEndpoints {
    heartbeatMonitor: string;

    constructor(heartbeatMonitor: string) {
        super();
        this.heartbeatMonitor = heartbeatMonitor;
    }

    static fromMap(map: Record<string, any>): cnt_MSEndpoints {
        return new cnt_MSEndpoints(map['heartbeatMonitor'] ?? "");
    }

    static fromBody(body: Record<string, any>): cnt_MSEndpoints {
        return cnt_MSEndpoints.fromMap(body);
    }

    static defaultEndpoints(): cnt_MSEndpoints {
        return new cnt_MSEndpoints("");
    }

    toString(): string {
        return `InternalEndpoints{heartbeatMonitor: ${this.heartbeatMonitor}}`;
    }
}

class EcosystemEndpoints {
    habitatEndpoints: cnt_HAEndpoints;
    internalEndpoints: cnt_MSEndpoints;

    constructor(
        habitatEndpoints: cnt_HAEndpoints = cnt_HAEndpoints.defaultEndpoints(),
        internalEndpoints: cnt_MSEndpoints = cnt_MSEndpoints.defaultEndpoints()
    ) {
        this.habitatEndpoints = habitatEndpoints;
        this.internalEndpoints = internalEndpoints;
    }

     asignarfromBody(body: Record<string, any>): void {
        this.habitatEndpoints = cnt_HAEndpoints.fromBody(body['habitatEndpoints']);
        this.internalEndpoints = cnt_MSEndpoints.fromBody(body['internalEndpoints']);
    }
}
