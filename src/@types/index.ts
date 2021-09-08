import { History, Location } from 'history';

export type HistoryType = History<Location>;

export enum MenuType {
    DRIVER = 'Driver',
    ATTENDANCE = 'Attendance',
}
