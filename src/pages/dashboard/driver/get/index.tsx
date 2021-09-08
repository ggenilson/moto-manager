import React, { FC, useState, useEffect, useContext } from 'react';

import List from '../../../../components/List';
import Driver from '../index';

import { UserInfoType } from '../../../../contexts/AuthContext/types';
import { fields } from './fields';
import { getDrivers } from './utils';
import { InfoCardContext } from '../../../../contexts';

const Get: FC = () => {
    const [drivers, setDrivers] = useState<UserInfoType[]>([]);
    const [whatRender, setWhatRender] = useState<number>(0);

    const { setText } = useContext(InfoCardContext);

    useEffect(() => {
        (async () => {
            const res = await getDrivers();

            setDrivers(res || []);
        })();

        if (whatRender === 0) setText('View');
        else setText('Add');
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
