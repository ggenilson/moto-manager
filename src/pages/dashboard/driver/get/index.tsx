import React, { FC, useState, useEffect } from 'react';

import List from '../../../../components/List';
import Driver from '../index';

import { UserInfoType } from '../../../../contexts/AuthContext/types';
import { fields } from './fields';
import { getDrivers } from './utils';

const Get: FC = () => {
    const [drivers, setDrivers] = useState<UserInfoType[]>([]);
    const [whatRender, setWhatRender] = useState<number>(0);

    useEffect(() => {
        (async () => {
            const res = await getDrivers();

            setDrivers(res || []);
        })();
    }, [whatRender]);

    return whatRender === 0 ? (
        <List
            data={drivers}
            fields={fields}
            onAddClick={() => setWhatRender(1)}
        />
    ) : (
        <Driver whatRender={e => setWhatRender(e)} />
    );
};

export default Get;
