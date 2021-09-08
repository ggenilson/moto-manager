import { api as Api } from '../../../services/api';
import { AttendanceSend } from './types';

export async function saveAttendance(data: AttendanceSend) {
    try {
        const attendanceInfo = await Api.post('/attendance', data);

        if (attendanceInfo) {
            const { _id } = attendanceInfo?.data;

            return _id;
        }

        return null;
    } catch (err) {
        console.log('Error: ', err);
        return null;
    }
}
