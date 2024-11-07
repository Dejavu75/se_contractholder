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
export declare class cnt_backup implements sch_backup {
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
    constructor(backupUUID?: string, systemUID?: string, systemKey?: string, nameBackup?: string, date?: Date, size?: number, file?: string, data_date?: Date, normalized?: number, ok_data?: boolean, ok_file?: boolean, ok_normalized?: boolean, ok_size?: boolean, ok_general?: boolean, read?: boolean);
    static fromBackupData(oRow: any): cnt_backup;
    static fromBody(body: any): cnt_backup;
}
