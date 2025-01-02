export class GeneralEndpoints {
    localNotifyListeners(): void {
        // Implementa esta función si necesitas notificar cambios.
    }
}

export class HabitatEndpoints extends GeneralEndpoints {
    foreign: string;
    credentials: string;
    information: string;

    constructor(foreign: string, credentials: string, information: string = "") {
        super();
        this.foreign = foreign;
        this.credentials = credentials;
        this.information = information;
    }

    static fromMap(map: Record<string, any>): HabitatEndpoints {
        return new HabitatEndpoints(
            map['foreign'] ?? "",
            map['credentials'] ?? "",
            map['information'] ?? ""
        );
    }

    static fromBody(body: Record<string, any>): HabitatEndpoints {
        return HabitatEndpoints.fromMap(body);
    }

    static defaultEndpoints(): HabitatEndpoints {
        return new HabitatEndpoints("", "");
    }

    toString(): string {
        return `HabitatEndpoints{foreign: ${this.foreign}, credentials: ${this.credentials}, information: ${this.information}}`;
    }
}

class InternalEndpoints extends GeneralEndpoints {
    heartbeatMonitor: string;

    constructor(heartbeatMonitor: string) {
        super();
        this.heartbeatMonitor = heartbeatMonitor;
    }

    static fromMap(map: Record<string, any>): InternalEndpoints {
        return new InternalEndpoints(map['heartbeatMonitor'] ?? "");
    }

    static fromBody(body: Record<string, any>): InternalEndpoints {
        return InternalEndpoints.fromMap(body);
    }

    static defaultEndpoints(): InternalEndpoints {
        return new InternalEndpoints("");
    }

    toString(): string {
        return `InternalEndpoints{heartbeatMonitor: ${this.heartbeatMonitor}}`;
    }
}

class EcosystemEndpoints {
    habitatEndpoints: HabitatEndpoints;
    internalEndpoints: InternalEndpoints;

    constructor(
        habitatEndpoints: HabitatEndpoints = HabitatEndpoints.defaultEndpoints(),
        internalEndpoints: InternalEndpoints = InternalEndpoints.defaultEndpoints()
    ) {
        this.habitatEndpoints = habitatEndpoints;
        this.internalEndpoints = internalEndpoints;
    }

     asignarfromBody(body: Record<string, any>): void {
        this.habitatEndpoints = HabitatEndpoints.fromBody(body['habitatEndpoints']);
        this.internalEndpoints = InternalEndpoints.fromBody(body['internalEndpoints']);
    }
}
