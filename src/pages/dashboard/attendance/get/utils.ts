import { api as Api } from '../../../../services/api';
import { getUserInfo } from '../../../../utils';
import { AttendanceReturnType } from './types';

export async function getAttendances(): Promise<AttendanceReturnType[] | null> {
    try {
        const attendanceInfo = await Api.get(
            `/attendance${getUserInfo()?.access === 'driver' ? '/driver' : ''}`,
        );

        if (attendanceInfo) {
            return attendanceInfo?.data;
        }

        return null;
    } catch (err) {
        console.log('Error: ', err);
        return null;
    }
}

export async function changeAttendanceStatus(id: string) {
    try {
        await Api.put(`/attendance/${id}/accept`);
        await Api.put(`/attendance/${id}/finish`);

        return true;
    } catch (err) {
        console.log('Error: ', err);
        return false;
    }
}
