import React, { FC, useState, useEffect } from 'react';

import List from '../../../../components/List';

import { UserInfoType } from '../../../../contexts/AuthContext/types';
import { fields } from './fields';
import { getDrivers } from './utils';

const Get: FC = () => {
    const [drivers, setDrivers] = useState<UserInfoType[]>([]);

    useEffect(() => {
        (async () => {
            const res = await getDrivers();

            setDrivers(res || []);
        })();
    }, []);

    return <List data={drivers} fields={fields} />;
};

export default Get;
