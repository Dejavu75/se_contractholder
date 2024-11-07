"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_backup = void 0;
class cnt_backup {
    // Constructor with default values
    constructor(backupUUID = "", systemUID = "", systemKey = "", nameBackup = "", date = new Date(), size = 0, file = "", data_date = new Date(), normalized = 0, ok_data = false, ok_file = false, ok_normalized = false, ok_size = false, ok_general = false, read = false) {
        this.systemUID = "";
        this.systemKey = "";
        this.nameBackup = "";
        this.date = new Date();
        this.size = 0;
        this.file = "";
        this.data_date = new Date();
        this.normalized = 0;
        this.ok_data = false;
        this.ok_file = false;
        this.ok_normalized = false;
        this.ok_size = false;
        this.ok_general = false;
        this.read = false;
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
    static fromBackupData(oRow) {
        const backup = {
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
    static fromBody(body) {
        const backup = {
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
exports.cnt_backup = cnt_backup;
