export type sch_backup = {
    backupUUID: string;
    systemUID: string;
    systemKey: string;
    nameBackup: string;
    date: Date;
    size: number;
    file: string;
    data_date: Date;
    normalized: number;
    ok_data: boolean;
    ok_file: boolean;
    ok_normalized: boolean;
    ok_size: boolean;
    ok_general: boolean;
    read: boolean;
};

export class cnt_backup implements sch_backup {
    backupUUID: string;
    systemUID: string = "";
    systemKey: string = "";
    nameBackup: string = "";
    date: Date = new Date();
    size: number = 0;
    file: string = "";
    data_date: Date = new Date();
    normalized: number = 0;
    ok_data: boolean = false;
    ok_file: boolean = false;
    ok_normalized: boolean = false;
    ok_size: boolean = false;
    ok_general: boolean = false;
    read: boolean = false;

    // Constructor with default values
    constructor(
        backupUUID: string = "",
        systemUID: string = "",
        systemKey: string = "",
        nameBackup: string = "",
        date: Date = new Date(),
        size: number = 0,
        file: string = "",
        data_date: Date = new Date(),
        normalized: number = 0,
        ok_data: boolean = false,
        ok_file: boolean = false,
        ok_normalized: boolean = false,
        ok_size: boolean = false,
        ok_general: boolean = false,
        read: boolean = false
    ) {
        this.backupUUID = backupUUID;
        this.systemUID = systemUID;
        this.systemKey = systemKey;
        this.nameBackup = nameBackup;
        this.date = date;
        this.size = size;
        this.file = file;
        this.data_date = data_date;
        this.normalized = normalized;
        this.ok_data = ok_data;
        this.ok_file = ok_file;
        this.ok_normalized = ok_normalized;
        this.ok_size = ok_size;
        this.ok_general = ok_general;
        this.read = read;
    }

    static fromBackupData(oRow: any): cnt_backup {
        const backup: cnt_backup = {
            backupUUID: oRow.backupUUID,
            systemUID: oRow.systemUID,
            systemKey: oRow.system_key,
            nameBackup: oRow.nameBackup,
            date: oRow.date ? new Date(oRow.date) : new Date(),
            size: oRow.size,
            file: oRow.file,
            data_date: oRow.data_date ? new Date(oRow.data_date) : new Date(),
            normalized: oRow.normalized,
            ok_data: oRow.ok_data,
            ok_file: oRow.ok_file,
            ok_normalized: oRow.ok_normalized,
            ok_size: oRow.ok_size,
            ok_general: oRow.ok_general,
            read: oRow.read
        };
        return backup;
    }

    static fromBody(body: any): cnt_backup {
        const backup: cnt_backup = {
            backupUUID: body.backupUUID || "",
            systemUID: body.systemUID || "",
            systemKey: body.system_key || "",
            nameBackup: body.nameBackup || "",
            date: body.date ? new Date(body.date) : new Date(),
            size: body.size || 0,
            file: body.file || "",
            data_date: body.data_date ? new Date(body.data_date) : new Date(),
            normalized: body.normalized || 0,
            ok_data: body.ok_data || false,
            ok_file: body.ok_file || false,
            ok_normalized: body.ok_normalized || false,
            ok_size: body.ok_size || false,
            ok_general: body.ok_general || false,
            read: body.read || false
        };
        return backup;
    }
}
