import React, { FC, useState, useEffect, useContext } from 'react';

import List from '../../../../components/List';
import Attendance from '../index';

import { fields } from './fields';
import { changeAttendanceStatus, getAttendances } from './utils';
import { InfoCardContext } from '../../../../contexts';
import { AttendanceSimplifiedType } from './types';
import { getUserInfo } from '../../../../utils';

const Get: FC = () => {
    const [attendances, setAttendances] = useState<AttendanceSimplifiedType[]>(
        [],
    );
    const [whatRender, setWhatRender] = useState<number>(0);

    const { setText } = useContext(InfoCardContext);

    async function getAllAttendances() {
        const res = await getAttendances();

        const newRes = res?.map(({ _id, origin, status, createdAt }) => ({
            _id,
            status,
            ...origin,
            createdAt,
        }));

        setAttendances(newRes || []);
    }

    useEffect(() => {
        getAllAttendances();

        if (whatRender === 0) setText('View');
        else setText('Add');
    }, [whatRender]);

    async function markAsAccepted(id: string) {
        const res = await changeAttendanceStatus(id);

        if (res) {
            getAllAttendances();
        }
    }

    return whatRender === 0 ? (
        <List
            data={attendances}
            fields={fields}
            onAddClick={() => setWhatRender(1)}
            acceptButton={e => markAsAccepted(e?._id)}
        />
    ) : (
        <Attendance whatRender={e => setWhatRender(e)} />
    );
};

export default Get;
